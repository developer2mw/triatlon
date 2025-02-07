<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash as FacadesHash;
use Illuminate\Support\Facades\Session as FacadesSession;
use App\Http\Controllers\DashboardController;
use App\Models\ParticipantNumber;

class IControlController extends Controller
{
    protected $session_variable = false;
    private $ParticipantNumber;

    public function __construct()
    {
        $this->ParticipantNumber = new ParticipantNumber();    
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $session_in = Auth::check() ? $this->session_variable = true : $this->session_variable;
        $eventController = new EventController();
        $titulo = "HBSPORTS";
        $path = url('icontrol/dashboard/');
        return view('icontrol/pages/index', compact('session_in', 'titulo', 'path'));
    }
    public function callEventController()
    {
        return new EventController();
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function registration()
    {
        return view('icontrol/pages/registration');
    }

    public function customRegistration(Request $request)
    {  
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);
            
        $data = $request->all();
        $check = $this->create($data);
          
        return redirect("icontrol/dashboard")->withSuccess('You have signed-in');
    }
 
 
    public function create(array $data)
    {
      return User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => FacadesHash::make($data['password']),
        'type' => 2
      ]);
    }    


    public function customLogin(Request $request)
    {
        $request->validate([
            'email' =>'required',
            'password' =>'required',
        ]);

        $credentials = $request->only('email', 'password');
        if(Auth::attempt($credentials))
        {
            return "Ok";
            // return redirect()->intended('icontrol/dashboard/')
            //         ->withSuccess('Signed in successfully');
        }

        return redirect('icontrol/')->withErrors('Signed in failed');
    }

    private function getCantidades()
    {
        $eventoOpenPendiente = $this->ParticipantNumber->countParticipantsStatus(1, $this->callEventController()->idevento);
        $eventoOpenEspera = $this->ParticipantNumber->countParticipantsStatus(3, $this->callEventController()->idevento);
        $eventoOpenConfirmado = $this->ParticipantNumber->countParticipantsStatus(2, $this->callEventController()->idevento);
        $eventoOpenNoParticipa = $this->ParticipantNumber->countParticipantsStatus(4, $this->callEventController()->idevento);
 
        return array(
            "pendiente" => $eventoOpenPendiente, "espera" => $eventoOpenEspera, 
            "confirmado" => $eventoOpenConfirmado, "noparticipa" => $eventoOpenNoParticipa
        );
    }
    /**
     * @return array categories
     */
    public function getCategories()
    {
        // Ruta Categories
        $infantil_5_6_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 128, 'M');
        $infantil_5_6_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 128, 'F');
        $infantil_7_8_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 129, 'M');
        $infantil_7_8_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 129, 'F');
        $infantil_9_10_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 130, 'M');
        $infantil_9_10_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 130, 'F');
        $infantil_11_12_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 131, 'M');
        $infantil_11_12_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 131, 'F');
        $infantil_13_15_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 132, 'M');
        $infantil_13_15_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 132, 'F');        
        $juvenil_16_17_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 133,'M');
        $juvenil_16_17_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 133,'F');
        $libre_18_39_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 134,'M');
        $libre_18_39_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 134,'F');
        $master_40_49_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 135,'M');
        $master_40_49_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 135,'F');
        $veteranos_50_mas_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 136,'M');
        $veteranos_50_mas_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 136,'F');        
        $relevos_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 137, 'M');
        $relevos_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 137, 'F');
        $novatos_18_mas_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 138, 'M');
        $novatos_18_mas_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 138, 'F');
                                        
        
        return [
            "infantil_5_6_varonil" => $infantil_5_6_varonil,"infantil_5_6_femenil" => $infantil_5_6_femenil,
            "infantil_7_8_varonil" => $infantil_7_8_varonil,"infantil_7_8_femenil" => $infantil_7_8_femenil,
            "infantil_9_10_varonil" => $infantil_9_10_varonil,"infantil_9_10_femenil" => $infantil_9_10_femenil,
            "infantil_11_12_varonil" => $infantil_11_12_varonil,"infantil_11_12_femenil" => $infantil_11_12_femenil,
            "infantil_13_15_varonil" => $infantil_13_15_varonil,"infantil_13_15_femenil" => $infantil_13_15_femenil,
            "juvenil_16_17_varonil" => $juvenil_16_17_varonil,"juvenil_16_17_femenil" => $juvenil_16_17_femenil,
            "libre_18_39_varonil" => $libre_18_39_varonil,"libre_18_39_femenil" => $libre_18_39_femenil,
            "master_40_49_varonil" => $master_40_49_varonil,"master_40_49_femenil" => $master_40_49_femenil,
            "veteranos_50_mas_varonil" => $veteranos_50_mas_varonil,"veteranos_50_mas_femenil" => $veteranos_50_mas_femenil,
            "relevos_varonil" => $relevos_varonil,"relevos_femenil" => $relevos_femenil,
            "novatos_18_mas_varonil" => $novatos_18_mas_varonil,"novatos_18_mas_femenil" => $novatos_18_mas_femenil
        ];
    }
    
    public function getTallas()
{
    // Tallas infantiles
    $tallaSeisInfantil = $this->ParticipantNumber->countTotalOfParticipantsForShirtSize($this->callEventController()->idevento, '6');
    $tallaOchoInfantil = $this->ParticipantNumber->countTotalOfParticipantsForShirtSize($this->callEventController()->idevento, '8');
    $tallaDiezInfantil = $this->ParticipantNumber->countTotalOfParticipantsForShirtSize($this->callEventController()->idevento, '10');
    $tallaDoceInfantil = $this->ParticipantNumber->countTotalOfParticipantsForShirtSize($this->callEventController()->idevento, '12');
    $tallaCatorceInfantil = $this->ParticipantNumber->countTotalOfParticipantsForShirtSize($this->callEventController()->idevento, '14');

    // Tallas para hombres adultos
    $tallaXSMHombre = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento, 'XSM', 'M');
    $tallaSMHombre = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento, 'SM', 'M');
    $tallaMMHombre = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento, 'MM', 'M');
    $tallaLMHombre = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento, 'LM', 'M');
    $tallaXLMHombre = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento, 'XLM', 'M');

    // Tallas para mujeres adultas
    $tallaSMujer = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento, 'S', 'F');
    $tallaMMujer = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento, 'M', 'F');
    $tallaLMujer = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento, 'L', 'F');

    // Total de tallas
    $totalTallas = $this->ParticipantNumber->countTotalOfShirtSize($this->callEventController()->idevento);

    return [
        // Tallas infantiles
        "talla_6" => $tallaSeisInfantil,
        "talla_8" => $tallaOchoInfantil,
        "talla_10" => $tallaDiezInfantil,
        "talla_12" => $tallaDoceInfantil,
        "talla_14" => $tallaCatorceInfantil,

        // Tallas para hombres adultos
        "talla_xsm_h" => $tallaXSMHombre,
        "talla_sm_h" => $tallaSMHombre,
        "talla_mm_h" => $tallaMMHombre,
        "talla_lm_h" => $tallaLMHombre,
        "talla_xlm_h" => $tallaXLMHombre,

        // Tallas para mujeres adultas
        "talla_s_m" => $tallaSMujer,
        "talla_m_m" => $tallaMMujer,
        "talla_l_m" => $tallaLMujer,

        // Total de tallas
        'total' => $totalTallas
    ];
}

    public function dashboard() 
    {
        $dashboard = new DashboardController();
        $tallasM = $dashboard->tallaM;
        $tallasF = $dashboard->tallaF;
        $tallasI = $dashboard->tallaInfantil;
        $evento = $this->getCantidades();
        $categorias = $this->getCategories();
        $tallas = $this->getTallas();
        $idevento = $this->callEventController()->idevento;
        $titulo = $this->callEventController()->evento;
        $tituloExcel = $this->callEventController()->tituloExcel;
        $listaParticipantes = "Lista  de participantes".$this->callEventController()->evento;
        $total_playeras = $dashboard->totalPlayeras();

        return view('icontrol/pages/dashboard', compact('idevento','evento','titulo','tituloExcel','categorias', 'total_playeras',
        'listaParticipantes', 'tallas', 'tallasM', 'tallasF','tallasI'));
    }
   
    public function signOut() {
        FacadesSession::flush();
        Auth::logout();
   
        return redirect('icontrol/');
    }
}
