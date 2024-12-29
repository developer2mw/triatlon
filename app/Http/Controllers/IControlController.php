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
        $juvenil_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 110,'M');
        $juvenil_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 110,'F');
        $libre_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 111,'M');
        $libre_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 111,'F');
        $master_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 112,'M');
        $master_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 112,'F');
        $veteranos_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 113, 'M');
        $veteranos_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 113, 'F');
        $caminata_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 114, 'M');
        $caminata_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 114, 'F');                                
        $infantil_4_5_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 115, 'M');
        $infantil_4_5_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 115, 'F');
        $infantil_6_7_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 116, 'M');
        $infantil_6_7_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 116, 'F');
        $infantil_8_9_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 117, 'M');
        $infantil_8_9_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 117, 'F');
        $infantil_10_13_varonil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 118, 'M');
        $infantil_10_13_femenil = $this->ParticipantNumber->countTotalOfParticipantsForCategoryUsingGender($this->callEventController()->idevento, 118, 'F');
        
        return [
            "juvenil_varonil" => $juvenil_varonil, "juvenil_femenil" => $juvenil_femenil,            
            "libre_varonil" => $libre_varonil,"libre_femenil" => $libre_femenil,
            "master_varonil" => $master_varonil, "master_femenil" => $master_femenil,
            "veteranos_varonil" => $veteranos_varonil, "veteranos_femenil" => $veteranos_femenil,
            "caminata_varonil" => $caminata_varonil, "caminata_femenil" => $caminata_femenil,
            "infantil_4_5_varonil" => $infantil_4_5_varonil, "infantil_4_5_femenil" => $infantil_4_5_femenil,
            "infantil_6_7_varonil" => $infantil_6_7_varonil, "infantil_6_7_femenil" => $infantil_6_7_femenil,
            "infantil_8_9_varonil" => $infantil_8_9_varonil, "infantil_8_9_femenil" => $infantil_8_9_femenil,
            "infantil_10_13_varonil" => $infantil_10_13_varonil, "infantil_10_13_femenil" => $infantil_10_13_femenil,
            
        ];
    }
    
    public function getTallas()
    {
        $tallaCuatroInfantil = $this->ParticipantNumber->countTotalOfParticipantsForShirtSize($this->callEventController()->idevento,'4');
        $tallaSeisInfantil = $this->ParticipantNumber->countTotalOfParticipantsForShirtSize($this->callEventController()->idevento,'6');
        $tallaOchoInfantil = $this->ParticipantNumber->countTotalOfParticipantsForShirtSize($this->callEventController()->idevento,'8');
        $tallaDiezInfantil = $this->ParticipantNumber->countTotalOfParticipantsForShirtSize($this->callEventController()->idevento,'10');        
        $tallaDoceInfantil = $this->ParticipantNumber->countTotalOfParticipantsForShirtSize($this->callEventController()->idevento,'12');
        $tallaCatorceInfantil = $this->ParticipantNumber->countTotalOfParticipantsForShirtSize($this->callEventController()->idevento,'14');        
        $tallaXSHombre = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento,'XS','M');
        $tallaSHombre = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento,'S','M');
        $tallaMHombre = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento,'M','M');
        $tallaLHombre = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento,'L','M');
        $tallaXLHombre = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento,'XL','M');
        $tallaXXLHombre = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento,'XXL','M');        
        $tallaXSMujer = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento,'XS','F');
        $tallaSMujer = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento,'S','F');
        $tallaMMujer = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento,'M','F');
        $tallaLMujer = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento,'L','F');
        $tallaXLMujer = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento,'XL','F');
        $tallaXXLMujer = $this->ParticipantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($this->callEventController()->idevento,'XXL','F'); 
        $totalTallas = $this->ParticipantNumber->countTotalOfShirtSize($this->callEventController()->idevento);

        return [
            "talla_4" => $tallaCuatroInfantil, "talla_6" => $tallaSeisInfantil,
            "talla_8" => $tallaOchoInfantil, "talla_10" => $tallaDiezInfantil,
            "talla_12" => $tallaDoceInfantil, "talla_14" => $tallaCatorceInfantil,
            "talla_xs_h" => $tallaXSHombre, "talla_s_h" => $tallaSHombre, "talla_m_h" => $tallaMHombre, "talla_l_h" => $tallaLHombre, "talla_xl_h" => $tallaXLHombre, "talla_xxl_h" => $tallaXXLHombre,
            "talla_xs_m" => $tallaXSMujer, "talla_s_m" => $tallaSMujer,"talla_m_m" => $tallaMMujer, "talla_l_m" => $tallaLMujer, "talla_xxl_m" => $tallaXLMujer, "talla_xl_m" => $tallaXXLMujer,
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
