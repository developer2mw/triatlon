<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dompdf\Dompdf;
use Dompdf\Options;
use alhimik1986\PhpExcelTemplator\PhpExcelTemplator;
use App\Http\Requests\StoreParticipantRequest;
use App\Models\Event;
use App\Models\EventCategory;
use App\Models\EventCategoryDistance;
use App\Models\Paid;
use App\Models\Participant;
use App\Models\ParticipantDetails;
use App\Models\ParticipantDiscounts;
use App\Models\ParticipantFaculty;
use App\Models\ParticipantNumber;
use App\Models\ParticipantTShirt;
use App\Models\State;
use App\Services\DashboardServices;
use App\Services\EventServices;
use App\Services\PaidServices;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;

class EventController extends Controller
{
    public $idevento = "18";
    public $evento = "Triburones 2025";
    public $tituloCorreo = "Triburones2025";
    public $tituloExcel = "Triburones2025";
    public $phone = "(951) 243 41 00";
    public $secondPhone = "(951) 243 41 00";
    public $mailImage = "";
    public $backgroundImage = "";
    public $sede = "Bahía chahúe, Huatulco";
    public $comision = 80;
    public $salida = "Bahía Chahúe";
    public $meta = "Bahía Chahúe";
    public $distancias = "Infantiles, Super Sprint y Sprint";
    public $fecha = "Sábado 01 de marzo y Domingo 02 de marzo de 2025";
    public $cupo = "300 competidores.";
    public $horario_arranque = "07:00 a.m.";
    public $estado;
    private $api_url_discounts = "";
    private $conekta_public_key = "";
    private $Event;
    private $eventServices;
    private $dashboardServices;
    private $paidServices;
    private $dashboardController;
    private $Participant;
    private $ParticipantDetails;
    private $ParticipantNumber;
    private $ParticipantDiscount;
    private $Paid;
    private $EventCategory;
    private $finished_racing = "2025-03-01"; //EL SISTEMA DEBE BLOQUEARSE EL DIA 1 de marzo A LAS 11:59 PM PARA YA NO RECIBIR MAS INSCRIPCIONES
    private $EventCategoryDistance;
    public $ParticipantFaculty;
    public $ParticipantTShirt;

    private $femsa_public_key = "";

    public function __construct()
    {
        // services
        $this->eventServices = new EventServices();
        $this->dashboardServices = new DashboardServices();
        $this->paidServices = new PaidServices();
        // controllers
        $this->dashboardController = new DashboardController();
        // models
        $this->Event = new Event();
        $this->Participant = new Participant();
        $this->ParticipantDetails = new ParticipantDetails();
        $this->ParticipantNumber = new ParticipantNumber();
        $this->ParticipantDiscount = new ParticipantDiscounts();
        $this->Paid = new Paid();
        $this->EventCategory = new EventCategory();
        $this->estado = new State();
        $this->api_url_discounts = env('API_URL_DISCOUNTS', 'http://127.0.0.1:8000/api/discounts/');
        $this->conekta_public_key = env('CONEKTA_PUBLIC_KEY', 'key_LZlFjhaJmUJJI832nBiR4LT');
        $this->EventCategoryDistance = new EventCategoryDistance();
        $this->ParticipantFaculty = new ParticipantFaculty();
        $this->ParticipantTShirt = new ParticipantTShirt();

        $this->femsa_public_key = env('FEMSA_PUBLIC_KEY', 'key_HrdC5YxrZuxYDuSXq9vU7R7');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $idevento = $this->idevento;
        $eventInformation = $this->Event::where('id', $this->idevento)->first();

        if($eventInformation === null)
            return response()->with('error', 'Carrera no encontrada');

        $estados = $this->estado->getStates();
        $titulo = $eventInformation->event;
        $date = Carbon::parse($eventInformation->date);
        $dateFormat = $date->translatedFormat('l j \d\e F');

        $date_carbon = Carbon::parse($eventInformation->date);
        Carbon::setLocale('es');
        $dateEvent = ucfirst($date_carbon->isoFormat('dddd D [de] MMMM [de] YYYY'));

        $eventCategories = $this->EventCategoryDistance::where('id_event', $idevento)
        ->join('category', 'event_category_distances.id_category', '=', 'category.id')
        ->select('event_category_distances.id_category', 'category.category')
        ->get();
        
        $opciones_evento = [
            'lugar_evento' => $eventInformation->place,
            'fecha_evento' => $this->fecha,
            'celular_evento' => $this->phone,
            'distancias' => $this->distancias,
            'salida' => $eventInformation->start,
            'meta' => $eventInformation->goal,
            'horario' => $eventInformation->hour,
            'cupo' => $eventInformation->limit,
            'finished_date' => $this->finished_racing
        ];
        
        $url = $this->api_url_discounts;

        return view('home/pages/index', compact('estados', 'titulo', 'opciones_evento', 'url', 'idevento', 'eventCategories'));
    }
    
    /**
     * @param \Illuminate\Http\Request $request
     * @param int $number
     * @param int $discount
     */
    public function saveParticipante($request, $number, $discount)
    {
        $vowels = array("(", ")", " ");
        $phone  = str_replace($vowels, "", trim($request->phone));
        $phone_responsible = str_replace($vowels, "", trim($request->fphone));
        $nacimiento = date('Y-m-d H:i:s');
        
        if(isset($request->nacimiento))
            $nacimiento = date('Y-m-d H:i:s', strtotime($request->nacimiento));
        // create a participant and get id
        $participant = $this->Participant::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $phone,
            'age' => $request->edad,
            'birth_date' => $nacimiento,
            'gender' => $request->sexo,
            'blood_type' => $request->sangre
        ]);
        // create participant details
        $this->ParticipantDetails::create([
            'id_participant' => $participant->id,
            'affliction' => $request->padecimientos,
            'allergy' => $request->alergia,
            'drugs' => $request->medicamentos,
            'shirt_size' => $request->talla ?? 'NA',
            'address' => $request->address,
            'responsible' => $request->fname,
            'phone_responsible' => $phone_responsible,
            'club' => $request->club,
            'id_state' => 20,
        ]);
        // create paid status and if participant have discount changed and confirm
        $this->Paid::create([
            'id_participant' => $participant->id,
            'id_paid_type' => $number === 0 ? 6 : 3,
            'id_status' => $number === 0 ? 1 : 2
        ]);
        // save participant number if have discount
        $this->ParticipantNumber::create([
            'number' => $number,
            'id_participant' => $participant->id,
            'id_event_category_distance' => $request->categoria
        ]);
        // save participant discount if have discount
        $this->ParticipantDiscount::create([
            'discount' => $discount,
            'id_participant' => $participant->id
        ]);

        // $this->ParticipantFaculty::create([
        //     'faculty' => $request->facultad,
        //     'id_participant' => $participant->id
        // ]);
        // save participant t-shirt
        // $getPlayera = 0;
        // $playera = $request->playera;
        // if($playera){
        //     $getPlayera = 1;
        // }
        // $this->ParticipantTShirt::create([
        //     't_shirt' => $getPlayera,
        //     'id_participant' => $participant->id
        // ]);
        
        return $participant->id; // Para el caso de ser exitoso se retorna el idGenerado desde que se guardó el registro en la tabla reto
    }

    public function store(StoreParticipantRequest $request)
    {
        // date_default_timezone_set("America/Mexico_City");
        date_default_timezone_set('Etc/GMT+6');

        $current_date = date('Y-m-d');

        if($current_date >= $this->finished_racing) {
            return response()->json(['status' => false, 'message' => 'La carrera ha finalizado y no es realizar su registro'], 401);
            exit();
        }

        $lastId = 0;

        $fullPdfPath = "";

        $number = 0;
        $porcent = 0;
        $discount = 0;
        //validate if code number is valid assign participant number
        // check type of porcent of code
        if(isset($request->idParticipantCode) && $request->idParticipantCode !== '') {
            //validate if return value
            $porcent =  (int)$request->idParticipantCode;
            $discount = $porcent;
        }
        // only participants with 100 porcent of discount assign number
        if($porcent === 100) {
            // validate if numbers is in sequence
            $limit = $this->dashboardController->totalPlayeras(); //obtiene el número total de playeras

            $arrayResult = $this->ParticipantNumber->getAllParticipantNumbers($this->idevento); //Hace una consulta para obtener a todos los participantes que se encuentran en el evento en especifico
            //parse result to int
            $numberAvailable = (int)$this->eventServices->checkWhatNumbersAreAvailable($limit, $arrayResult);


            if($numberAvailable === 0) {
                //get last number
                $lastParticipante = $this->ParticipantNumber->getLastElementNumber($this->idevento); //Se obtiene el número máximo que tiene asignado algún participante
                
                if(is_null($lastParticipante) || $lastParticipante === 0) 
                    $number = 1;
                else 
                    $number = $lastParticipante + 1;
            } else 
                $number = $numberAvailable;
        }
        // dd($discount);
        $lastId = $this->saveParticipante($request, $number, $discount);
        
        $path = url('checkout/'.$lastId); //url() función de laravel para construir una url xd. Toma en cuenta el dominio de la aplicación en la cual se encuentra. ej:"http://dominio.com/checkout/123"
        // echo $path;
        $pagoenlinea = $path;

        $image = asset("img/correo.jpg");

        $logs_folder = storage_path().'/logs'; // ruta completa al directorio de registros de la aplicación
        $listOfCategories = $this->dashboardServices->listAllCategoriesForEvent($this->idevento);
        $categoria = $this->dashboardServices->generateCategory((int)$request->categoria, $listOfCategories) ?? ""; //Se obtiene el nombre de la categoria dependiendo del genero
        
        //send mail and download pdf only when participant is 100 porcent of discount
        if($porcent === 100) {

            // 3 = Gratis, 0 = status_tarjeta
            $fullPdfPath = $this->generatePDF($lastId, $request->name, $categoria, $number, 3, 0); //Se obtiene la url para generar el pdf

            try {
                //Se arman los datos para mandar por medio del correo electronico
                $content = [
                    'titulo' => $this->evento,
                    'image_url' => $image,
                    'participante' => $request->name,
                    'numero' => $number,
                    'categoria' => $categoria,
                    'fecha_pago' => date('Y-m-d')
                ];

                $mail = new Mail(); // Se instancia la clase Mail
                //Se pasan como parametros: el destinatario del correo electronico, el contenido y un mensaje que se usa como un asunto
                //ESTA FORMA DE MANDAR LOS EMAILS SE LOGRA POR MEDIO DE USAR LAS FUNCIONES DE ARTISAN "php artisan make: mail 'namex'"
                $mail::to($request->email)->send(new \App\Mail\HBSportMail($content, "HBSPORTS NUEVO PARTICIPANTE")); 

            } catch (\Exception $e) {
                // echo $e->getMessage();
                file_put_contents($logs_folder.'/log_'.date('j.n.Y').'.log', $e->getMessage() . PHP_EOL, FILE_APPEND);
            }
        }

        $nCorredor = $number;

        // $body = $this->generateBody($categoria, $request->name, $number);// Se prepara el cuerpo HTML para utilizarlo en un envio de correo
        // $this->sendMail($request->email,$request->name, 'Nuevo participante',$body, 'admin'); // Se manda a llamar a un método para el envio de correo esto por medio de usar phpMailer
        // \Illuminate\Support\Facades\Mail::to($request->email)->send(new \App\Mail\HBSportPreMail($preMailContent));

        $error = 'Mensaje enviado correctamente';
        $success = 'Su registro se a realizado con exito, gracias!';
        $error_code = 'OK';
        $clase = 'has-success';

        $response = array('error' => $error, 'error_code' => $error_code, 'success' => $success, 'clase' => $clase, 'corredor' => $nCorredor, 'nombreCorredor' => (strtoupper( strtolower("<b>".$request->name."</b>") )), 'idparticipante' => $lastId, 'pdf' => $fullPdfPath, "nameCorredor" => $request->name);

		return response()->json($response);
    }
    
    public function generateBody($categoria, $nombre, $number) 
    {
        $numero = 0;
        if($number !== 0)
            $numero = $number;
        
        $fecha_pago = date('Y-m-d');

        $path = url("mail/email.html");
        $image = asset("img/correo.jpg");
        $body = file_get_contents($path); //Se lee el contenido de la plantilla mail/email.html
        $body = str_replace("{{CATEGORIA}}", $categoria, $body);
        $body = str_replace("{{NUMERO}}", $numero, $body);
        $body = str_replace("{{TITULO}}", $this->evento, $body);
        $body = str_replace("{{EMAIL_IMAGE}}", $image, $body);
        $body = str_replace('{{FECHA_PAGO}}', $fecha_pago, $body);
        $body = str_replace('{{PARTICIPANTE}}', $nombre, $body);

        return $body;
    }
    /**
     * This method generate pdf when card payment method is validate
     * is call in Paid controller
     * @return String {$pdfpath}
     */
    public function generatePDF($id, $participante, $categoria, $numero, $tipo_pago = 6, $status_tarjeta = 1)
    {
        //Se cambia el estatus del participante en la tabla reto y otros datos
        $this->Paid::where('id_participant', '=', $id)
        ->update([
            'id_status' => 2,
            'id_paid_type' => $tipo_pago
        ]);
        //Se le asigna un número al participante en la tabla "participante"
        $this->ParticipantNumber::where('id_participant', '=', $id)
        ->update([
            "number" => $numero
        ]);

        $fecha_pago = date('Y-m-d H:i:s');

        require base_path("vendor/autoload.php"); //autoload.php lo crea Composer autómaticamente dentro de vendor, el contenido sirve para que las librerias se puedan cargar automaticamente.
        $image = asset("img/correo.jpg"); //Referencia hacia un de las imagenes que se van a utilizar en el correo
        $path = url("mail/email_pdf.html"); // Referencia hacia el template que va a ser utilizado como base para el pdf
        $pdf = file_get_contents($path); // Se lee y almacena el contenido de la plantilla HTML dentro de la variable pdf
        
        //Se reemplaza los elementos como {{CATEGORIA}} que se enceuntran en el template por el otros valores
        $pdf = str_replace("{{CATEGORIA}}", $categoria, $pdf); 
        $pdf = str_replace("{{NUMERO}}", $numero, $pdf);
        $pdf = str_replace("{{TITULO}}", $this->evento, $pdf);
        $pdf = str_replace("{{EMAIL_IMAGE}}", $image, $pdf);
        $pdf = str_replace('{{FECHA_PAGO}}', $fecha_pago, $pdf);
        $pdf = str_replace('{{PARTICIPANTE}}', $participante, $pdf);

        $options = new Options(); //Se crea una instancia hacia la clase OPTIONS propia de la libreria de "dompdf"
        $options->set('isRemoteEnabled', true); //Permite cargar imagenes remotas en el pdf
        $pdfname = $participante.".pdf"; //Se contruye el nombre del pdf 
        $address = public_path('pdf/'); //Se construye la ruta del pdf tomando como inicio la ruta completa al directorio público de la aplicación
        if(!File::isDirectory($address))
            File::makeDirectory($address, 0755, true, true);
        // $address = public_path().'/pdf/'; //Se construye la ruta del pdf tomando como inicio la ruta completa al directorio público de la aplicación
        $fullpath = $address.$pdfname; //Se arma la ruta completa del pdf
        $dompdf = new Dompdf($options); //Se crea una instancia hacia el pdf
        $dompdf->loadHtml($pdf);//Se le carga el contenido de la HTML en el dompdf
        $dompdf->render();//Se renderiza el pdf
        $output = $dompdf->output(); //Se almacena el contenido del pdf dentro de la variable $output
        file_put_contents($fullpath, $output);//Se guarda el PDF en el directorio público 

        $pdfPath = url('/public/pdf/'.$pdfname); //Se guarda el PDF en el directorio público utilizando la función url()

        return $pdfPath; //Se retorna la url del pdf para poder acceder a él
    }

    public function sendMail($email, $name, $subject, $body, $type) 
    {
        require base_path("vendor/autoload.php");
        $mail = new PHPMailer;
        try {
            $mail->isSMTP();
            // $mail->SMTPDebug = 0;
            $mail->Host = 'hbsports.com.mx';
            $mail->Priority = 1;
            $mail->CharSet = "UTF-8";
            $mail->SMTPAuth = true;
            $mail->SMTPSecure = 'tsl';
            $mail->Port = 25;
            $mail->Username = 'developer@hbsports.com.mx';
            $mail->Password = 'Uo223%e8l';
            $mail->From = ("developer@hbsports.com.mx");
            $mail->FromName = 'hbsports';
            $mail->Subject  = $subject;
            $mail->addAddress($email);
            $mail->Body = $body;
            $mail->isHTML(true);
            $mail->WordWrap = 30;
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );

            if(!$mail->send() ) 
            {
                return $mail->ErrorInfo;
            } 
            return true;
            
        } catch (Exception $e) 
        {
            return back()->with('error', 'El mensaje no pudo ser enviado'.$e);
        }
    }

    public function generateXML(Request $request)
    {
        $titulo = $this->evento;
        $sede =  $this->sede;
        
        $participants = ParticipantNumber::leftJoin('event_category_distances','event_category_distances.id','=','participant_number.id_event_category_distance')
        ->leftJoin('participant','participant.id','=','participant_number.id_participant')
        ->leftJoin('paid','paid.id_participant','=','participant_number.id_participant')
        ->leftJoin('participant_details','participant_details.id_participant','=','participant_number.id_participant')
        ->where('event_category_distances.id_event', '=', $this->idevento)
        ->orderBy('participant.id', 'ASC')
        ->get()
        ->toArray();

        $response = $this->eventServices->generateXLSX($participants, $titulo, $this->idevento);

        $result = json_decode($response, true);
        
        PhpExcelTemplator::outputToFile($result['templateFile'], $result['filename'], $result['params']);
    }

    public function checkout($id) 
    {
        $title = $this->evento;
        
        $participant = $this->Participant::join('participant_discounts','participant_discounts.id_participant','=','participant.id')->where('participant.id',$id)->first(); //Se obtienen algunos datos de la tabla reto de un participante con el id indicado        

        $paid = $this->Paid::where('id_participant', $id)->first();

        if($participant === null)
            return redirect()->to('/')->with('error', 'No se encontró al participante');

        $participantNumber = $this->ParticipantNumber::rightJoin('event_category_distances', 'event_category_distances.id', '=', 'participant_number.id_event_category_distance')
        ->where('id_participant', $id)
        ->where('event_category_distances.id_event', $this->idevento)
        ->first();
        
        $total = $this->paidServices->definePaidAmount($participantNumber->id_category);// Se obtiene el monto a pagar y la comisión
        $listOfCategories = $this->dashboardServices->listAllCategoriesForEvent($this->idevento);
        
        $categoria = $this->dashboardServices->generateCategory($participantNumber->id_category, $listOfCategories);
        
        $pptor = $total['comision'];

        //validate discount if exist
        $discount = 0;

        $discount = (int)$participant->discount * 0.01; //Se inicia una regla de 3 
        
        $participanteDiscount = $total["monto"] * $discount; //Se termina la regla de 3 y se obtiene el monto de descuento tomando en cuenta el monto a pagar de la carrera sin aplicarle la comisión que se le tiene que aplicar
        
        $precioTotal = $total["monto"] + $total["comision"] - $participanteDiscount; // Se genere el total a pagar tomando en cuenta el monto, comisión y descuento.

        $conekta_public_key = $this->conekta_public_key;        
        
        return view('checkout/pages/checkout', compact('participant', 'paid', 'title', 'categoria', 'precioTotal', 'pptor', 'conekta_public_key'));
    }

    public function checkEmail(Request $request) 
    {
        $input = $request->only(['email']);

        $emailExist = $this->ParticipantNumber::leftJoin('event_category_distances', 'participant_number.id_event_category_distance', '=','event_category_distances.id')
        ->leftJoin('participant', 'participant.id', '=', 'participant_number.id_participant')
        ->where('event_category_distances.id_event', $this->idevento)
        ->where('participant.email', $input)
        ->first();
        
        if(empty($emailExist))
        {
            return response()->json([
                'success' => true,
                'message' => "Email disponible"
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => "Email no disponible"
            ]);
        }
    }
    /**
     * When participant code is valid, validate type of porcent
    * @param Int $idParticipantCode
    */
    public function validateParticipantCode($idParticipantCode) {
        // set post fields

        $ch = curl_init($this->api_url_discounts."valid/".$idParticipantCode);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        //curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

        // execute!
        $response = curl_exec($ch);

        // close the connection, release resources used
        curl_close($ch);

        // response
        $parse = json_decode($response, true);

        $responseReturn = 0;

        if(count($parse) === 0)
            return $responseReturn = 0;

        $responseReturn = (int)$parse[0]['porcent'];
        
        return $responseReturn;
    }

    private function changedCodeStatus($idParticipantCode) 
    {
        $ch = curl_init($this->api_url_discounts."update/".$idParticipantCode);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
        
        $response = curl_exec($ch);

        curl_close($ch);

        if(!$response)
            return false;
        return true;
    }

    public function sendParticipantMail()
    {
        return view('emails/email');
    }

    public function sendPaymentEmail(Request $request)
    {

        $eventInformation = $this->Event::where('id', $this->idevento)->first();

        $data = $request->all();
        $image = asset("img/correo.jpg");

        $participant = Participant::where('participant.email', $data['email'])
        ->join('participant_number', 'participant.id', '=', 'participant_number.id_participant')
        ->whereIn('participant_number.id_event_category_distance', [128,129,130,131,132,133,134,135,136,137,138]) //Actualizar las categorias segun el evento
        ->select('participant.id')
        ->first();

        $idParticipant = $participant->id;

        $title = strtoupper($eventInformation->event);
        // return response()->json(["status" => "true", "response" =>"Correo enviado"]);

        try {
            $content = [
                'titulo' => $title,
                'subtitulo' => "",
                'image_url' => $image,
                'participante' => $data['name'],
                'categoria' => $data['categoria'],
                'link' => "https://www.hbsports.com.mx/triburones2025/checkout/".$idParticipant,                
            ];
            $mail = new Mail(); // Se instancia la clase Mail
            //Se pasan como parametros: el destinatario del correo electronico, el contenido y un mensaje que se usa como un asunto
            //ESTA FORMA DE MANDAR LOS EMAILS SE LOGRA POR MEDIO DE USAR LAS FUNCIONES DE ARTISAN "php artisan make: mail 'namex'"
            $mail::to($data['email'])->send(new \App\Mail\HBSportMailPayMethods($content, "Formas de pago ". $this->evento )); 

            return response()->json(["status" => true, "response" =>"Correo enviado"]);

        } catch (\Exception $e) {
            return response()->json(['status' => false, 'error' => $e->getMessage()]);
        }
    }
}
