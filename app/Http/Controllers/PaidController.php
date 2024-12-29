<?php

namespace App\Http\Controllers;

use App\Models\Paid;
use App\Models\ParticipantDiscounts;
use App\Models\ParticipantFaculty;
use App\Models\ParticipantNumber;
use App\Models\ParticipantTShirt;
use App\Services\DashboardServices;
use App\Services\EventServices;
use App\Services\PaidServices;
use DateInterval;
use DateTime;
use Exception;
use GuzzleHttp\Client;


class PaidController extends Controller
{
    protected $ref = "DÍA DE MUERTOS 2024";
    protected $apiKey = "";
    protected $apiKeyFemsa = "";
    private $eventServices;
    private $dashboardServices;
    private $paidServices;
    private $eventController;
    private $dashboardController;
    private $ParticipantNumber;
    private $Paid;
    private $timezoneApiKey;
    

    public function __construct()
    {   
        // services
        $this->eventServices = new EventServices();
        $this->dashboardServices = new DashboardServices();
        $this->paidServices = new PaidServices();
        // controllers
        $this->eventController = new EventController();
        $this->dashboardController = new DashboardController();
        // models
        $this->Paid = new Paid();
        $this->ParticipantNumber = new ParticipantNumber();
        $this->apiKey = env('CONEKTA_PRIVATE_KEY', 'Bearer key_rDe5qCF8JSjgArVmUZQy9YE');
        $this->apiKeyFemsa = env('FEMSA_PRIVATE_KEY', 'Bearer key_kc0RjszxqpCXyw3MTimc84e');
        $this->timezoneApiKey = '7OI91G2SJKVD' ;
    }

    private function getExpirationTimestamp() {
        $client = new Client();
        
        // Obtener timestamp actual desde TimezoneDB
        $response = $client->request('GET', 'http://api.timezonedb.com/v2.1/get-time-zone', [
            'query' => [
                'key' => $this->timezoneApiKey,
                'format' => 'json',
                'by' => 'zone',
                'zone' => 'America/Mexico_City',
            ],
        ]);
        
        $data = json_decode($response->getBody(), true);
        
        // Crear DateTime con el timestamp de TimezoneDB
        $dateTime = new DateTime();
        $dateTime->setTimestamp($data['timestamp']);
        
        // Agregar 3 días
        $dateTime->add(new DateInterval('P3D'));
        
        // Establecer la hora a las 23:59:59
        $dateTime->setTime(23, 59, 59);
        // dd($dateTime->getTimestamp());
        
        return $dateTime->getTimestamp();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {}

    public function getDistance($id)
    {
        $participanteData = ParticipantNumber::select('event_category_distances.id_distance')->join('event_category_distances','event_category_distances.id','=','participant_number.id_event_category_distance')
        ->where('participant_number.id_participant', $id)->first();

        $listOfDistances = $this->dashboardServices->listAllDistancesForEvent($this->eventController->idevento);
        $distance = $this->dashboardServices->getDistances($participanteData->id_distance, $listOfDistances);
        $distancia = "Distancia: ".$distance;

        return $distancia;
    }
    
    public function cardPaid($id, $conektaTokenId) 
    {

        $participanteData = $this->Paid::leftJoin('participant', 'participant.id', '=', 'paid.id_participant')
        ->where('paid.id_participant',$id)->first();// Se obtienen todos los datos del participante

        $participantNumber = ParticipantNumber::leftJoin('event_category_distances', 'event_category_distances.id_category', '=', 'participant_number.id_event_category_distance')
        ->where('id_participant', $id)->first();

        $participantCategory = $participantNumber->id_event_category_distance;

        $participantDiscount = ParticipantDiscounts::where('id_participant', $id)->first();        

        if($participanteData === null)
            return response()->json(['status' => false, 'message' => 'No se encontró al participante']);
        if($participantNumber === null)
            return response()->json(['status' => false, 'message' => 'No se encontró al participante']);

        if($participantNumber->number !== 0 && $participanteData->paid_status === 2) {
            $pdf = url('/public/pdf/'.$participanteData->name.'.pdf');

            if($pdf === '')
                $pdf = '';
            
            $this->Paid::where('id_participant', $id)
            ->update(['paid_status' => 2, 'tipo_pago' => 5]);

            return response()->json(array("status" => true, "message" => "Su pago ya ha sido realizado",  "name" => $participanteData->name, "pdf" => $pdf, "numero" => $participanteData->number, "carrera" => $this->eventController->evento));
            
            exit();
        }
        $listOfCategories = $this->dashboardServices->listAllCategoriesForEvent($this->eventController->idevento);
        $categoria = $this->dashboardServices->generateCategory($participantNumber->id_category, $listOfCategories);
        
        $total = 0;
        $discount = 0;
        $total = $this->paidServices->definePaidAmount($participantCategory); // Se obtiene el monto a pagar y su respectiva comisión
        $participanteDescuento = $participantDiscount->discount ?? 0;
        $discount = $participanteDescuento * 0.01;
        
        $participanteDiscount = $total["monto"] * $discount;
        
        $total_comision = $total["monto"] + $total["comision"] - $participanteDiscount; // Se genera el total a pagar incluyendo el monto, descuento y comisión.
        // verify if name of image is same
        $image = asset('img/correo.jpg');
        
        $comision = (int)$total['comision'];//Almacena la comisión a pagar

        $itemsname = "Suscripción a ".$this->eventController->evento."('".$categoria."')  + Comisión Bancaria $".$comision." ";

        $totalParticipants = (int)$this->dashboardController->totalPlayeras(); //Total de playesras 

        $dateTime  = new DateTime(); //Obetner la fecha actual

        $logs_folder = storage_path().'/logs'; //ruta a la carpeta de almacenamiento

        $dateInterval = new DateInterval('P30D'); //Clase para representar un intervalo de tiempo-> se declara un intervalo de 30 días

        $client = new \GuzzleHttp\Client();

        try {
            $thirty_days_from_now = ($dateTime)->add($dateInterval)->getTimestamp();

            $order = $client->request('POST', 'https://api.conekta.io/orders', [
                'body' => '{"customer_info":{"name":"'.html_entity_decode($participanteData->name).'","email":"'.$participanteData->email.'","phone":"'.$participanteData->phone.'"},"metadata":{"participant_id":"'.(string)$participanteData->id_participant.'","event_id":"'.(string)$this->eventController->idevento.'","image":"'.$image.'","category":"'.$categoria.'","total_tshirts":"'.$totalParticipants.'"},"pre_authorize":false,"currency":"MXN","line_items":[{"name":"'.$itemsname.'","quantity":1,"unit_price":'.($total_comision * 100).'}],"charges":[{"payment_method":{"type":"card","token_id":"'.$conektaTokenId.'"}}]}',
                'headers' => [
                  'Accept-Language' => 'es',
                  'accept' => 'application/vnd.conekta-v2.1.0+json',
                  'authorization' => $this->apiKey,
                  'content-type' => 'application/json',
                ],
            ]);
            
            $limit = $this->dashboardController->totalPlayeras();

            $arrayResult = $this->ParticipantNumber->getAllParticipantNumbers($this->eventController->idevento);
            
            $numberAvailable = (int)$this->eventServices->checkWhatNumbersAreAvailable($limit, $arrayResult);
            
            $lastParticipante = $this->ParticipantNumber->getLastElementNumber($this->eventController->idevento);
            // var_dump($lastParticipante);
            if($numberAvailable === 0) {
                if(is_null($lastParticipante) || $lastParticipante === 0) 
                    $participante = 1;
                else 
                    $participante = $lastParticipante + 1;
            } else
                $participante = $numberAvailable;

            //send mail
            try {

                $content = [
                    'titulo' => $this->eventController->evento,
                    'image_url' => $image,
                    'participante' => $participanteData->name,
                    'numero' => $participante,
                    'categoria' => $categoria,
                    'fecha_pago' => date('Y-m-d')
                ];

                \Illuminate\Support\Facades\Mail::to($participanteData->email)->send(new \App\Mail\HBSportMail($content, $itemsname));

            } catch (\Exception $e) {
                file_put_contents($logs_folder.'/log_'.date('j.n.Y').'.log', $e->getMessage() . PHP_EOL, FILE_APPEND);
            }

            $pdf = $this->eventController->generatePDF($participanteData->id_participant, $participanteData->name, $categoria, $participante, 5, 1);
            
            return response()->json( array("status" => true, "message" => "¡Felicidades, haz quedado registrado en el evento", "pdf" => $pdf, "name" => $participanteData->name, "numero" => $participante, "carrera" => $this->eventController->evento));

        } catch (\GuzzleHttp\Exception\ClientException $error) {

            $errorMessage = json_decode($error->getResponse()->getBody()->getContents());
            return response()->json(array("status" => false, "message" => $errorMessage->details[0]->message, "errorCode" => $errorMessage->details[0]->code));
        } catch (\Conekta\ProcessingError $error){
            
            return response()->json( array("status"=>true, "message"=> $error->getMessage() ) );
            file_put_contents($logs_folder.'/log_'.date('j.n.Y').'.log', $error->getMessage() . PHP_EOL, FILE_APPEND);
        } catch (\Conekta\ParameterValidationError $error){
            
            return response()->json( array("status"=>true, "message"=> $error->getMessage() ) );
            file_put_contents($logs_folder.'/log_'.date('j.n.Y').'.log', $error->getMessage() . PHP_EOL, FILE_APPEND);
        } catch (\Conekta\Handler $error){
            
            return response()->json( array("status"=>true, "message"=> $error->getMessage() ) );
            file_put_contents($logs_folder.'/log_'.date('j.n.Y').'.log', $error->getMessage() . PHP_EOL, FILE_APPEND);
        }
    }

    public function oxxoPay($id) 
    {
        $participanteData = $this->Paid::leftJoin('participant', 'participant.id', '=', 'paid.id_participant')
        ->where('paid.id_participant',$id)->first();// Se obtienen todos los datos del participante

        $participantNumber = $this->ParticipantNumber::leftJoin('event_category_distances', 'event_category_distances.id_category', '=', 'participant_number.id_event_category_distance')
        ->where('id_participant', $id)->first();

        $participantCategory = $participantNumber->id_event_category_distance;

        $participantDiscount = ParticipantDiscounts::where('id_participant', $id)->first();

        $participantTShirt = ParticipantTShirt::where('id_participant', $id)->first();
        // $tShirt = $participantTShirt->t_shirt;
        
        $participantDistance = ParticipantFaculty::where('id_participant', $id)->first();
        // $distance = $participantDistance->faculty;

        if($participanteData === null)
            return response()->json(['status' => false, 'message' => 'No se encontró al participante']);
        if($participantNumber === null)
            return response()->json(['status' => false, 'message' => 'No se encontró al participante']);
        $listOfCategories = $this->dashboardServices->listAllCategoriesForEvent($this->eventController->idevento);
        $categoria = $this->dashboardServices->generateCategory($participantNumber->id_category, $listOfCategories); // Se obtiene el nombre de la categoria de la carrera

        $total = 0;
        $total = $this->paidServices->definePaidAmount($participantCategory); //Se obtiene el monto y la comisión a pagar
        // get discount in database
        $participanteDescuento = $participantDiscount->discount ?? 0;
        $discount = $participanteDescuento * 0.01; //Inicia la regla de tres
        
        $participanteDiscount = $total["monto"] * $discount; //Se termina la regla de tres y se obtiene el monto del descuento a partir del monto normal a pagar
        
        $total_comision = $total["monto"] + $total["comision"] - $participanteDiscount; //Se obtiene el total a pagar tomando en cuenta el monto originalm su descuento más la comisión
        // verify if name of image is same
        $image = asset('img/correo.jpg');

        $comision = (int)$total["comision"];// comisión a pagar

        $itemsname = "Suscripción a ".$this->eventController->evento."('".$categoria."')  + Comisión Bancaria '$".$comision."' "; //Se crea un titulo descriptivo

        $totalParticipants = (int)$this->dashboardController->totalPlayeras(); //Se obtiene un total de playeras = total de participantes
        
        $client = new \GuzzleHttp\Client();

        try {

            $orderData = [
                'customer_info' => [
                    'name' => html_entity_decode($participanteData->name),
                    'email' => $participanteData->email,
                    'phone' => $participanteData->phone
                ],
                'metadata' => [
                    'participant_id' => (string)$participanteData->id_participant,
                    'event_id' => (string)$this->eventController->idevento,
                    'image' => $image,
                    'category' => $categoria,
                    'total_tshirts' => $totalParticipants
                ],
                'pre_authorize' => false,
                'currency' => 'MXN',
                'line_items' => [
                    [
                        'name' => $itemsname,
                        'quantity' => 1,
                        'unit_price' => $total_comision * 100
                    ]
                ],
                'charges' => [
                    [
                        'payment_method' => [
                            'type' => 'cash',
                            'expires_at' => $this->getExpirationTimestamp()
                        ]
                    ]
                ]
            ];
    
            $order = $client->request('POST', 'https://api.digitalfemsa.io/orders', [
                'body' => json_encode($orderData),
                'headers' => [
                    'Accept-Language' => 'es',
                    'accept' => 'application/vnd.app-v2.1.0+json',
                    'authorization' => $this->apiKeyFemsa,
                    'content-type' => 'application/json',
                ],
            ]);


            $content = $order->getBody()->getContents();
            
            $parseString = json_decode($content, true);

            $reference = $parseString['charges']['data'][0]['payment_method']['reference'];

            $ref = $this->formatref($reference);

            $path = asset("mail/templateoxxo.html");
            $mailImage = asset("img/correo.jpg");
            $ficha = file_get_contents($path);
            $ficha = str_replace("{{MONTO}}", number_format($total_comision, 2), $ficha);
            $ficha = str_replace("{{REFERENCIA}}", $ref, $ficha);
            $ficha = str_replace("{{TITULO}}", $this->eventController->tituloCorreo, $ficha);
            $ficha = str_replace("{{EMAIL_IMAGE}}", $mailImage, $ficha);
            $ficha = str_replace("{{PHONE}}", $this->eventController->phone, $ficha);
            $ficha = str_replace("{{SECOND_PHONE}}", $this->eventController->phone, $ficha);

            $this->Paid->where('id_participant', $participanteData->id_participant)->update(['reference' =>  $reference, 'id_paid_type' => 4]);

            $this->eventController->sendMail($participanteData->email, $this->ref.'Referencia de pago - "'.$this->eventController->evento.'"', 'Referencia de pago - "'.$this->eventController->evento.'"', $ficha, "admin");

            return response()->json( array("status" => true, "message" => "Se ha enviado la referencia al email con el que te inscribiste", "ficha" => $ref));

        } catch (\GuzzleHttp\Exception\ClientException $error) {

            $errorMessage = json_decode($error->getResponse()->getBody()->getContents());
            return response()->json(array("status" => false, "message" => $errorMessage->details[0]->message, "errorCode" => $errorMessage->details[0]->code));
        } catch (\Conekta\ParameterValidationError $error){
            
            return response()->json( array("status"=>false, "message"=> $error->getMessage()) );
        } catch (\Conekta\Handler $error){
            
            return response()->json( array("status"=>true, "message"=> $error->getMessage() ) );
        }
    }

    private function formatref($referencia)
    {
        $p4 = substr($referencia, -2);
        $p3 = substr($referencia, -6,  4);
        $p2 = substr($referencia, -10, 4);
        $p1 = substr($referencia, -14, 4);
        return $p1.'-'.$p2.'-'.$p3.'-'.$p4;
    }
    
}
