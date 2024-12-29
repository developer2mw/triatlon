<?php

namespace App\Http\Controllers;

use App\Models\Paid;
use App\Models\Participant;
use App\Models\ParticipantDetails;
use App\Models\ParticipantNumber;
use App\Services\DashboardServices;
use App\Services\EventServices;
use DateTime;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class DashboardController extends Controller
{
    public $tallaM = array("XS" => 200, "S" => 200, "M" => 300, "L" => 200, "XL" => 200, "XXL" => 200);
    public $tallaF = array('XS' => 200, 'S' => 200, 'M' => 200, 'L' => 200, "XL" => 200, 'XXL' => 200);
    public $tallaInfantil = array('4' => 200,'6' => 200, '8' => 200, '10' => 200,'12' => 200, '14' => 200);
    private $dashboardServices;
    private $eventServices;
    private $Participant;
    private $ParticipantDetails;
    private $Paid;
    private $ParticipantNumber;

    public function __construct()
    {
        $this->dashboardServices = new DashboardServices();
        $this->eventServices = new EventServices();
        //models
        $this->Participant = new Participant();
        $this->ParticipantDetails = new ParticipantDetails();
        $this->ParticipantNumber = new ParticipantNumber();
        $this->Paid = new Paid();
    }
    /**
     * Call event controller to use in all dashboardController
     * 
     */
    private function callEventController()
    {
        return new EventController();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){}
    /**
     * Search content or if search empty order by column name
     * @param string $search
     * @param int $start
     * @param int $rowperpage
     * @param array $orderColumns
     * @param string $columnName
     * @param string $columnSortOrder
     * @param int $columnSearchEstatus
     * @return array
     */
    public function searchContent($search, $start, $rowperpage, $orderColumns, $columnName, $columnSortOrder, $columnSearchEstatus)
    {

        $result = $this->ParticipantNumber::orderBy('participant.'.$orderColumns[$columnName], $columnSortOrder)
            ->join('paid', 'paid.id_participant', '=', 'participant_number.id_participant')
            ->leftJoin('participant', 'participant.id', '=', 'participant_number.id_participant')
            ->leftJoin('event_category_distances', 'event_category_distances.id', '=', 'participant_number.id_event_category_distance')
            ->leftJoin('participant_details', 'participant_details.id_participant', '=', 'participant_number.id_participant')
            ->where('event_category_distances.id_event', '=', $this->callEventController()->idevento);
        // evaluate if column search is empty
        if(!empty($columnSearchEstatus) && $columnSearchEstatus > 0) {
                if($columnSearchEstatus === 1) {
                    $result->where(function($query) use ($columnSearchEstatus) {
                        $query->whereNull('paid.id_status')
                        ->orWhere('paid.id_status', '=', $columnSearchEstatus);
                    });
                } 
                else 
                    $result->where('paid.id_status', '=', $columnSearchEstatus);
        }
        // evaluate if search is empty
        if(!empty($search)) {
            $result->where(function ($query) use ($search) {
                $query->where('participant.name', 'LIKE', '%'. $search. '%')
                ->orWhere('participant.email','LIKE', '%'.$search. '%')
                ->orWhere('participant.phone','LIKE','%'. $search . '%');
            });
        } 
        return $result
        ->skip($start)
        ->take($rowperpage)
        ->get()
        ->toArray();
    }   
    /**
     * Show content of datatable 
     */
    public function show(Request $request)
    {

            $draw = $request->get('draw');
            $start = $request->get('start');
            $rowperpage = $request->get('length');

            $columnIndex_arr = $request->get('order');
            $columnName_arr = $request->get('columns');
            $order_arr = $request->get('order');
            $search_arr = $request->get('search');

            $columnIndex = $columnIndex_arr[0]['column'];
            $columnName = $columnName_arr[$columnIndex]['data'];
            $columnSearchEstatus = $columnName_arr[6]['search'];
            $columnSortOrder = $order_arr[0]['dir'];
            $searchValue = $search_arr['value'];
            $orderColumns = array( 0 => "id", 2 => "name", 3 => "phone", 4 => "email", 5 => "category", 6 => "id_status");

            $totalRecords = $this->ParticipantNumber::join('paid', 'paid.id_participant', '=', 'participant_number.id_participant')
            ->leftJoin('event_category_distances','event_category_distances.id','=','participant_number.id_event_category_distance')
            ->where('event_category_distances.id_event', '=', $this->callEventController()->idevento)
            ->count();

            $totalRecordsWithFilter = $this->ParticipantNumber::join('paid', 'paid.id_participant', '=', 'participant_number.id_participant')
            ->leftJoin('event_category_distances','event_category_distances.id','=','participant_number.id_event_category_distance')
            ->leftJoin('participant', 'participant.id', '=', 'participant_number.id_participant')
            ->where('event_category_distances.id_event', '=', $this->callEventController()->idevento)
            ->where('participant.name', 'like', '%'.$searchValue.'%')
            ->count();
            
            $records = $this->searchContent($searchValue, $start, $rowperpage, $orderColumns, $columnName, $columnSortOrder, $this->dashboardServices->parseStatusStringToNumber($columnSearchEstatus['value']));
            
            $estatusA = array('Pendiente', 'En Espera', 'Confirmado', 'No Participa', 'Test');
            $Flags = array('text-danger', 'text-warning', 'text-success','text-primary','text-violet');

            $data_arr = array();
            $listOfCategories = $this->dashboardServices->listAllCategoriesForEvent($this->callEventController()->idevento);
            // dd($records[0]);
            foreach($records as $record) {
                $nestedData = array();
                $nbE = $this->dashboardServices->parseStatusNumberToString($record['id_status']);
                $estatusId = (int)array_search($nbE, $estatusA);
                try {
                    # Uptate participant status if has number when status is pendiente and no participa
                    if($record['number'] > 0 && ($record['id_status'] !== 2)) {
                        $this->Paid::where('id_applicant', '=', $record['id_participant'])
                        ->update([
                            'id_status' => $record['id_status']
                        ]);

                        $this->ParticipantNumber::where('id_participant', '=', $record['id_participant'])
                        ->update(['number' => $record['number']]);
                        
                        $record['number'] = 0;
                    }
                } catch (Exception $e) {
                    $e->getMessage();
                }
                
                # Estado del Registro
                $nestedData[] = "<button class='btn btn-default btn-sm' data-placement='top' data-toggle='tooltip' data-original-title='".$nbE."'><i class='fa fa-flag ".$Flags[$estatusId]."'></i></button>";

                # Fecha del Registro
                $nestedData[] = date("d M Y", strtotime($record['created_at']));

                 # Talla y Color de Playera
                $pPColor = '<i class="fa fa-circle"></i>';
                $pColor = 'Blanca';

                $record['shirt_size'] = $this->dashboardServices->getTShirt($record['shirt_size']);
                # Nombre
                $nestedData[] = "<a href='base_timeline.php?competidor=".base64_encode($record['id_participant'])."' data-placement='top' data-toggle='tooltip' data-original-title='Playera ".$record['shirt_size']." ".$pColor."' >".$pPColor."&nbsp;&nbsp;".mb_strtoupper(html_entity_decode($record['name']), 'UTF-8')."<br>numero: ".$record['number']."</a>";

                # Telefono
                $nestedData[] = (trim($record['phone']) != '') ? trim($record['phone']) : 'XXXXXXXXXX';
                $nestedData[] = (trim($record['email']) != '') ? trim($record['email']) : 'Sin Email';
                # Categoria
                $category = $this->dashboardServices->generateCategory($record['id_category'], $listOfCategories);
                # Evento
                $nestedData[] = $category;


                # Estado del Registro
                $nestedData[] = "<div class='estatus' id='".$record['id_participant']."'>".$nbE."</div>";


                $nCorredor = html_entity_decode($record['number']);
                $categoria = html_entity_decode($category);
                $email = $record['email'];
                $edad = $record['age'];
                $sexo = $record['gender'];
                $ncorredor = $record['number'];
                $fecha = date('d/m/Y H:i:s', strtotime($record['created_at']));
                $orden = 0;
                $evento = $this->callEventController()->evento;
                $ncorredor = sprintf("%03d", $ncorredor);
                $registro = $record['created_at'];
                $nombre = $record['name'];
                $telefono = $record['phone'];
                $estatus = $nbE;

                if(strlen($orden) == 0) {
                    $orden = $this->codeGenerator(6);
                }

                $dataParticipante = base64_encode($nombre.'|'.$categoria.'|'.$email.'|'.$edad.'|'.$sexo.'|'.$ncorredor.'|'.$evento.'|'.$orden);
                $color = ($nbE === 'Confirmado')?'btn-success':'btn-info';
                $color = ($nbE === 'No Participa')?'btn-danger':$color;

                # Botones
                if ($nbE === 'Confirmado') {
                    $nestedData[] = '<!-- Single button -->
                                    <div class="btn-group">
                                    <button type="button" class="btn '.$color.' dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Opciones <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a style="cursor: pointer;" class="viewInfotriLed" data-id="'.$record['id_participant'].'"><i class="fa fa-info"></i> &nbsp; Ver Información</a></li>
                                        <li><a style="cursor: pointer;" class="sendMailEvent" data-id="'.$record['id_participant'].'"><i class="fa fa-send"></i> &nbsp; Enviar Mail</a></li>
                                    </ul>
                                    </div>';
                }  else {
                    $nestedData[] = '<!-- Single button -->
                                    <div class="btn-group">
                                    <button type="button" class="btn '.$color.' dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Opciones <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a style="cursor: pointer;" class="viewInfotriLed" data-id="'.$record['id_participant'].'"><i class="fa fa-info"></i> &nbsp; Ver Información </a></li>
                                    </ul>
                                    </div>';
                }

                $data_arr[] = $nestedData;
            }
            // Return response or result of query
            $response = array(
                'draw' => intval($draw),
                'recordsTotal' => intval($totalRecords),
                'recordsFiltered' => intval($totalRecordsWithFilter),
                'data' => $data_arr
            );

            return response()->json($response);
    }
    /**
     * Return total of shirts when all participants sizes sum
     */
    public function totalPlayeras()
    {
        return array_sum($this->tallaM) + array_sum($this->tallaF) + array_sum($this->tallaInfantil); 
    }

    private function codeGenerator($long) 
    {
        $key = '';
        $pattern = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $max = strlen($pattern) - 1;

        for ($i=0; $i < $long; $i++) { 
            $key .= $pattern[mt_rand(0, $max)];
        }
        return $key;
    }
    /**
     *  Return information about participant 
     * @param id reto
     * @return json response
     */
    public function participanteData(Request $request)
    {
            // $participante = new Participante();
            $idP = $request->idP;
            $participant = $this->Participant::where('id', '=', $idP)->first();

            if($participant === null)
                return response()->json(['Respuesta' => "Error", "Info" => []]);

            $participantDetails = $this->ParticipantDetails::where('id_participant', $idP)->first();

            $participantNumber = $this->ParticipantNumber::where('id_participant', $idP)->first();

            $participantPaid = $this->Paid::join('paid_type','paid_type.id', '=','paid.id_status')
            ->where('id_participant', $idP)->first();

            $categoryId = $this->ParticipantNumber::leftJoin('event_category_distances', 'event_category_distances.id', 'participant_number.id_event_category_distance')
            ->where('event_category_distances.id_event', $this->callEventController()->idevento)->first();

            // $distanceId = $this->ParticipantNumber::leftJoin('event_distances_distances', 'event_distances.id','=','participant_number.id_event_distance')
            // ->where('event_category_distances.id_event', $this->callEventController()->idevento)->first();

            $ff = explode('-', date('Y-m-d', strtotime($participant->birth_date)));
            
            $newff = $ff[2].'-'.$ff[1].'-'.$ff[0];

            if(checkdate($ff[1], $ff[0], $ff[2])) {
                $birthday = new DateTime($newff);
                $today = new DateTime();
                $years = $today->diff($birthday);

                $years_old = $years->y;
            } else {
                $years_old = 0;
            }

            $num = ($participantPaid->id_status === 2) ? $participantNumber->number : 0;

            $datos = array(
				'nom_' => html_entity_decode($participant->name),
				'tel_' => html_entity_decode($participant->phone),
				'ema_' => html_entity_decode($participant->email),
				//'dat_' => html_entity_decode($db->row['iddato']),
				'par_' => html_entity_decode($participant->id),
				'sex_' => html_entity_decode($participant->gender),
				'eda_' => html_entity_decode($participant->age),
				'e_c_' => html_entity_decode(''),
				'dom_' => html_entity_decode($participantDetails->address),
				'p_e_' => html_entity_decode($participantDetails->affliction),
				'p_a_' => html_entity_decode($participantDetails->allergy),
				'n_r_' => html_entity_decode($participantDetails->responsible),
				't_r_' => html_entity_decode($participantDetails->phone_responsible),
				't_p_' => html_entity_decode($participantDetails->shirt_size),
                't_p_sizes' => html_entity_decode($this->dashboardServices->getParticipantTShirt()),
				'c_p_' => html_entity_decode('Blanca'),
				'clu_' => html_entity_decode($participantDetails->club),
				// 'hij_' => html_entity_decode($participant[0]['hijos']),
				'cate' => html_entity_decode($this->dashboardServices->generateCategoryUsingParticipantGenre($participant->gender)),
                'paq_l' => html_entity_decode($this->dashboardServices->participantPackage($this->callEventController()->idevento)),
                'paq' => html_entity_decode($categoryId->id_distance),
                'dist_l' => html_entity_decode($this->dashboardServices->participantDistance($this->callEventController()->idevento)),
                'dist' => html_entity_decode($categoryId->id_distance),
                'cat' => html_entity_decode($categoryId->id_category),
				'ncor' => html_entity_decode($num),
			    'fpg' => html_entity_decode($participantPaid->id_paid_type),
                'fpglist' => html_entity_decode($this->dashboardServices->generateListOfAvailablePaidTypes()),
			    'folio' => html_entity_decode($participantNumber->number),
			    'edad' => $years_old,
			);

            $res = array("Respuesta"=>"Ok", "Info"=>$datos);

            return response()->json($res);
    }
  
    public function changeEstatus(Request $request) 
    {
        
        $participant = ParticipantNumber::select('event_category_distances.id_event','paid.id_status','participant.gender',
        'participant_details.shirt_size')
        ->leftJoin('event_category_distances', 'event_category_distances.id', '=', 'participant_number.id_event_category_distance')
        ->leftJoin('paid', 'paid.id_participant', '=', 'participant_number.id_participant')
        ->leftJoin('participant', 'participant.id', '=', 'participant_number.id_participant')
        ->leftJoin('participant_details', 'participant_details.id_participant', '=', 'participant_number.id_participant')
        ->where('participant_number.id_participant', '=', $request->id)
        ->first();
        
        $db_estatus = $this->dashboardServices->parseStatusNumberToString($participant->id_status);
        $db_evento = $participant->id_event;

        $db_sexo = $participant->gender;
        $db_talla_playera = $participant->shirt_size;
        
        $db_total = ParticipantNumber::leftJoin('paid','paid.id_participant', '=','participant_number.id_participant')
        ->leftJoin('event_category_distances','event_category_distances.id','=','participant_number.id_event_category_distance')
        ->where('paid.id_status', '=', 2)
        ->where('event_category_distances.id_event', '=', $db_evento)
        ->count();

        $db_ultimo = ParticipantNumber::leftJoin('paid','paid.id_participant', '=','participant_number.id_participant')
        ->leftJoin('event_category_distances','event_category_distances.id','=','participant_number.id_event_category_distance')
        ->where('paid.id_status', '=', 2)
        ->where('event_category_distances.id_event', '=', $db_evento)
        ->max('participant_number.number');

        $db_inicial = 0;

        $ultimo_registro = ParticipantNumber::leftJoin('event_category_distances','event_category_distances.id','=','participant_number.id_participant')
        ->leftJoin('paid','paid.id_participant','=','participant_number.id_participant')
        ->where('event_category_distances.id_event', '=', $db_evento)
        ->max('participant_number.number');

        $folio = (int)$ultimo_registro + 1;

        if($folio === 0) {
            echo 'Exit';
            exit();
        }
        
        if($db_estatus !== NULL && $request->value !== 'Confirmado') {
            if($request->value === 'No Participa') {
                Paid::where('id_participant','=', $request->id)
                ->update([
                    'id_status' => $this->dashboardServices->parseStatusStringToNumber($request->value),
                    'id_paid_type' => 6
                ]);
                ParticipantNumber::where('id_participant', $request->id)
                ->update([
                    'number' => 0
                ]);

                echo $request->value;
                exit();
            }
            if($db_estatus === $request->value && ($db_estatus === 'Pendiente' || $db_estatus === 'No Participa')) {
                if($request->value === 'Pendiente' && $db_estatus === $request->value) {
                    echo $db_estatus === NULL ? $request->value : $db_estatus;
                } else {
                    Paid::where('id_participant', '=', $request->id)
                    ->update([
                        'id_status' => $this->dashboardServices->parseStatusStringToNumber($request->value),
                        'id_paid_type' => 6
                    ]);

                    ParticipantNumber::where('id_participant', '=', $request->id)
                    ->update([
                        'number' => 0
                    ]);

                    echo $request->value;
                }
            } else {
                
                ParticipantNumber::where('id_participant', '=', $request->id)
                ->update([
                    'number' => 0
                ]);

                Paid::where('id_participant', '=', $request->id)
                ->update([
                    'id_status' => $this->dashboardServices->parseStatusStringToNumber($request->value),
                    'id_paid_type' => 6
                ]);

                echo $request->value;
            }   
        } else {

            $rest = $this->isTallaAvailable($db_sexo, $db_talla_playera, $db_evento);
            
            if(!$rest && $db_talla_playera !== "NA") {
                echo '<script>alert("La talla seleccionada no está disponible")</script>';
                exit();
            }
            
            $limit = $this->totalPlayeras();

            $arrayResult = $this->ParticipantNumber->getAllParticipantNumbers($this->callEventController()->idevento);

            $numberAvailable = (int)$this->eventServices->checkWhatNumbersAreAvailable($limit, $arrayResult);

            if($numberAvailable === 0)
                $db_corredor = $db_total > 0 ? $db_ultimo + 1 : $db_inicial + 1;
            else
                $db_corredor = $numberAvailable;

            ParticipantNumber::where('id_participant', '=', $request->id)
                ->update([
                    'number' => $db_corredor
                ]);

            Paid::where('id_participant', '=', $request->id)
                ->update([
                    'id_status' => $this->dashboardServices->parseStatusStringToNumber($request->value)
                ]);

            echo $request->value;
        }
        

    }

    public function isTallaAvailable($sexo, $t_playera, $evento) 
    {
        // $participante = new Participante();

        $cantidad = ParticipantNumber::leftJoin('event_category_distances','event_category_distances.id','participant_number.id_event_category_distance')
        ->leftJoin('participant', 'participant.id','=','participant_number.id_participant')
        ->leftJoin('participant_details','participant_details.id_participant','=','participant_number.id_participant')
        ->leftJoin('paid','paid.id_participant','=','participant_number.id_participant')
        ->where('participant.gender', '=', $sexo)
        ->where('participant_details.shirt_size', $t_playera)
        ->where('event_category_distances.id_event', '=', $evento)
        ->where('paid.id_status', '=', 2)
        ->count();

        $res = $cantidad + 1;
        $total = $this->dashboardServices->checkGenrePlayers($t_playera, $sexo, $this->tallaM, $this->tallaF, $this->tallaInfantil);

        if($res <= $total) {
            return true;
        }
        return false;
    }

    public function update(Request $request)
    {

        $retos = ParticipantNumber::rightJoin('event_category_distances','event_category_distances.id','=','participant_number.id_event_category_distance')
        ->where('participant_number.id_participant', '=', $request->par_)
        ->first();

        if($retos === null) {
            echo 'Error: no se encontró al participante';
            exit();
        }

        $db_evento = $retos->id_event;
        $db_sexo = $request->sParticipante;
        $db_talla_playera = $request->tPlayera;

        $STC = ParticipantNumber::leftJoin('event_category_distances','event_category_distances.id','=','participant_number.id_event_category_distance')
                ->leftJoin('paid','paid.id_participant','=','participant_number.id_participant')
                ->leftJoin('participant','participant.id','=','participant_number.id_participant')
                ->leftJoin('participant_details','participant_details.id_participant','=','participant_number.id_participant')
                ->where('paid.id_status', '=', 2)
                ->where('event_category_distances.id_event', '=', $db_evento)
                ->where('participant.gender', '=', $db_sexo)
                ->where('participant_details.shirt_size', '=', $db_talla_playera)
                ->count();

        $playerasCantidad = $this->totalPlayeras();

        if($db_talla_playera !== 'NA') {
            if($STC > $playerasCantidad) {
                echo 'Error';
                exit();
            }
        }
        
        ParticipantDetails::where('id_participant', '=', $request->par_)
        ->update([
            'affliction' => $request->peParticipante,
            'allergy' => $request->paParticipante,
            'responsible' => $request->nTitular,
            'phone_responsible' => $request->tTitular,
            'shirt_size'  => $request->tPlayera,
            'club'  => $request->eClub ?? ""
        ]);

        Participant::where('id', $request->par_)
        ->update([
            'name' => $request->nParticipante,
            'age' => $request->edParticipante,
            'phone' => $request->tParticipante,
            'email' => $request->eParticipante,
            'gender' => $request->sParticipante
        ]);

        ParticipantNumber::where('id_participant', $request->par_)
        ->update([
            'id_event_category_distance' => $request->nCategoria
        ]);

        Paid::where('id_participant',$request->par_)
        ->update([
            'id_paid_type' => $request->fpago
        ]);

    }
    /**
     * @param string $gender
     */
    public function availableShirtSizes(Request $request)
    {
        $gender = isset($request->gender) ? $request->gender : "I";

        if($gender === "M")
           return response()->json($this->dashboardServices->showAvailableShirtSizes($this->tallaM, $gender, $this->callEventController()->idevento));
        else if($gender === "F")
           return response()->json($this->dashboardServices->showAvailableShirtSizes($this->tallaF, $gender, $this->callEventController()->idevento));
        else 
           return response()->json($this->dashboardServices->showAvailableShirtSizes($this->tallaInfantil,"", $this->callEventController()->idevento));
        
    }
    public function sendMail(Request $request){
        $image = asset("img/correo.jpg");
        $logs_folder = storage_path().'/logs';
        // dd($request);
        try {
            //Se arman los datos para mandar por medio del correo electronico
            $content = [
                'titulo' => "CARRERA VAMOS HUATULCO 3ERA EDICIÓN",
                'image_url' => $image,
                'participante' => $request->nombre,
                'numero' => $request->ncorredor,
                'categoria' => $request->cat,
                'fecha_pago' => date('Y-m-d')
            ];

            $mail = new Mail(); // Se instancia la clase Mail
            //Se pasan como parametros: el destinatario del correo electronico, el contenido y un mensaje que se usa como un asunto
            //ESTA FORMA DE MANDAR LOS EMAILS SE LOGRA POR MEDIO DE USAR LAS FUNCIONES DE ARTISAN "php artisan make: mail 'namex'"
            $mail::to($request->email)->send(new \App\Mail\HBSportMail($content, "Inscripción a VAMOS HUATULCO 3ERA EDICIÓN")); 

            return response()->json(["status" => "true", "response" =>"Correo enviado"]);

        } catch (\Exception $e) {
            // echo $e->getMessage();
            file_put_contents($logs_folder.'/log_'.date('j.n.Y').'.log', $e->getMessage() . PHP_EOL, FILE_APPEND);
        }
    }
}
