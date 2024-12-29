@extends('home.layouts.default')
@section('content')
<style>
    .styled-message {    
        text-align: center !important;    
        font-size: 22px !important;
        color: #111731 !important;
        padding: 10px;        
    }

</style>
<div id="preloader" class="fullscreen loaded" style="display: none;">
    <div class="logo"><img src="https://hbsports.com.mx/images/header/header-1/logo-hardbeat.png" ></div>
    <div class="lds-ring lds-ring-index circular"><div></div><div></div><div></div><div></div><span style="color:white;">Espere...</span></div>
</div>

<header class="header">
    <div class="header-inner ">
        <div style="margin-top: 4em;">
            <div class="nano-content">
                <div class="subtitle">
                    <p style="margin-top:20px; padding: 20px; text-align:center;">
                        VAMOS HUATULCO TE INVITA A PARTICIPAR EN LA 3ERA EDICIÓN DE LA CARRERA CON CAUSA EN APOYO A UN NUEVO AMANECER EN PRO DEL DISCAPACITADO A.C. <br>
                        <!-- <span class="title-event"><b>{{$titulo}}</b></span> -->
                    </p>                    
                    <div class="col100" style="margin-top: -75px;">
                        <h2 style="color:black; margin-bottom: 0;">
                            <b>DATOS DEL EVENTO</b>
                        </h2>                        
                        <ul>
                            <li>
                                <b>Lugar del Evento:</b>
                                <br>{{$opciones_evento['lugar_evento']}}
                            </li>
                            <li>
                                <b>Fecha:</b>
                                <br>{{$opciones_evento['fecha_evento']}}
                            </li>
                            <li>
                                <b>Salida:</b>
                                <br>{{$opciones_evento['salida']}}
                            </li>
                            <li>
                                <b>Meta</b>
                                <br>{{$opciones_evento['meta']}}
                            </li>
                            <li>
                                <b>Distancias:</b>
                                <br>{{$opciones_evento['distancias']}} <br>
                            </li>
                            <li>
                                <b>Horario de arranque:</b>
                                <br>{{$opciones_evento['horario']}}
                            </li>
                            <li>
                                <b>Cupo:</b>
                                <br>{{$opciones_evento['cupo']}} participantes
                            </li>
                        </ul>                                                
                        <div class="container-table100">
                            <div class="wrap-table100">
                                <div class="table-100">
                                    <div class="row-100 three-row header-100">
                                        <div class="cell-100 header-table">COSTOS POR INSCRIPCIÓN</div>
                                    </div>
                                    <div class="row-100 three-row header-three">                                        
                                        <div class="cell-100">
                                            <strong>CATEGORÍA</strong>
                                        </div>
                                        <div class="cell-100">
                                           <strong> DEL 20 DE NOVIEMBRE AL 30 DE NOVIEMBRE </strong><br>
                                            
                                        </div>
                                        <div class="cell-100">
                                            <strong>DEL 01 DE DICIEMBRE AL 09 DE ENERO</strong> <br>
                                            
                                        </div>
                                        <div class="cell-100">
                                            PRECIO EXTEMPORÁNEO <br>
                                            <strong>DEL 10 Y 11 DE ENERO (ENTREGA DE PAQUETES)</strong> <br>                                          
                                             
                                            <span style="color:red;">(sujeto a disponibilidad)</span>
                                        </div>
                                    </div>
                                    <div class="row-100 three-row">                                        
                                        <div class="cell-100">ADULTOS</div>
                                        <div class="cell-100">$300.00</div>
                                        <div class="cell-100">$350.00</div>
                                        <div class="cell-100">$400.00</div>                                        
                                    </div>
                                    <div class="row-100 three-row">                                        
                                        <div class="cell-100">NIÑOS</div>
                                        <div class="cell-100">$200.00</div>
                                        <div class="cell-100">$250.00</div>
                                        <div class="cell-100">$300.00</div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div style="display: flex; justify-content: center; flex-wrap: wrap;">
                            <p style="font-size:18px;"><b>NOTA:</b></p>                            
                            <p style="font-size:18px;"><b>Después del 16 de octubre, tallas sujetas a disponibilidad.</b></p>
                            <p style="font-size:18px;"><b>Si desean adquirir la playera tendrá un costo extra de $160.00.</b></p>                            
                        </div> -->
                        <br>
                        <b>DERECHOS DEL COMPETIDOR</b><br>
                        <ul>                            
                            <li>Medalla de finalista</li>
                            <li>Playera conmemorativa </li>
                            <li>Chip de cronometraje electrónico.</li>
                            <li>Número de corredor</li>
                            <li>Hidratación en ruta</li>
                            <li>Zona de recuperación</li>
                            <li>Servicio médico en ruta y recuperación</li>
                            <li>Seguridad vial</li>
                        </ul>                      

                        <b>REGISTRO E INSCRIPCIÓN </b>
                        <br>
                        <ul>
                            <li>En www.hbsports.com.mx/vamoshuatulco</li>     
                            <li>
                                Nota: Para inscripciones y pago físico, visita Café Porto Huatulco todos los martes de diciembre de 8:30 am a 10:00 am y pregunta por Mark Kennedy 958 115 5597.
                            </li>
                        </ul>
                        <br>
                        <b>SERVICIO MÉDICO</b>
                        <ul>
                            <li>El estado de salud de los competidores es responsabilidad de cada corredor y NO del comité organizador. 
                                Se ofrecerá asistencia médica en caso de que se presente cualquier emergencia. Si padeces de alguna enfermedad es importante que debamos saber,
                                y/o si eres alérgico a algún medicamento, por favor anótalo en la forma de inscripción.</li>
                        </ul>
                        <br>
                        <b>ENTREGA DE PAQUETE DE COMPETIDOR.</b>
                        <ul>
                            <li>
                                ●	Lugar: Parque hundido de Chahué  <br>
                                ●	Fecha: 11 de enero de 2025 <br>
                                ●	Horario: De 14 a 18:00 hrs                      
                            </li>
                            <br>
                            <li>
                                Antes de recoger tu paquete de competidor es indispensable que llenes la forma de exoneración que te proporcionaremos.
                            </li>
                            <br>
                            <li>
                                Sin excepción alguna, no se entregará ningún paquete de corredor a quien no presente debidamente lleno y firmado dicho formato, así como una identificación oficial para corroborar su firma e identidad.
                            </li>
                            <br>
                            <!-- <li>Todo participante inscrito cede al comité organizador el derecho de utilizar su nombre e imagen en cualquier promoción motivo del evento.</li>                             -->
                        </ul>                        
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<section class="main">
    <div class="main-inner">
       
        <form action="#" method="post" class="registro-form tab-form-led" id="registro-form">
            <!-- @csrf Una medida de seguridad contra ataques maliciosos -->
            @csrf
            <input type="hidden" name="idd" id="idd" value="">
            <input type="hidden" name="idr" id="idr" value="">
            <h4 style="margin:0; margin-top: 1rem; margin-bottom: 1rem;">{{$titulo}}</h4>
            <div style="font-size: 16px;">Para hacer tu registro correctamente deberás llenar todos los campos. <br> Si tienes alguna duda contáctanos al 951 243 4100</div>
            <!-- <p style="font-size: 16px; font-weight: bold">NOTA: Para adquirir la playera, contáctanos al 951 243 4100 (costo extra de $160.00).</p> -->
            <p style="color: #fa2d4d">-NOTA: Una vez registrado, te sugerimos hacer el pago en línea. Si generas formato de pago en OXXO tendrás 48 horas para realizar tu pago, de lo contrario tu registro expirará.</p>                      
            <diV id="response"></diV>
            <div class="fields">
                <p>
                    <b>DATOS DEL PARTICIPANTE:</b>
                </p>
                <div class="field-content">
                    <div class="input-group input-group-icon">
                        <input type="email" name="email" id="email" placeholder="Email" class="input-home" required minlength="5">
                        <div class="input-icon"><i class="fa-solid fa-envelope"></i></div>
                    </div>

                    <div class="input-group input-group-icon">
                        <input type="text" name="name" id="name" placeholder="Nombre Completo" class="input-home" required minlength="2">
                        <div class="input-icon"><i class="fa-solid fa-user"></i></div>
                    </div>
                    <div class="input-container-group">
                        <div class="input-group input-group-icon">
                            <input type="number" name="edad" id="edad" placeholder="Edad" class="input-home" required max="999">
                            <div class="message" id="message-age" style="font-weight: bold; color: #dd1313"></div>
                            <div class="input-icon"><i class="fa-solid fa-star"></i></div>
                        </div>
                        <div class="input-group input-group-icon">
                            <input type="text" name="nacimiento" id="nacimiento" placeholder="Fecha de nacimiento" class="input-home" inputmode="numeric" pattern="^\d{2}-\d{2}-\d{4}$" required>
                            <div class="input-icon"><i class="fa-solid fa-star"></i></div>
                        </div>
                    </div>
                    <div class="input-container-group">
                        <div class="input-group input-group-icon">
                            <input type="tel" name="phone" id="phone" placeholder="Teléfono" class="input-home" pattern="^\(\d{3}\) \d{3} \d{2} \d{2}$" required minlength="2">
                            <div class="input-icon"><i class="fa-solid fa-phone"></i></div>
                        </div>
                        <div class="input-group input-group-icon">
                            <input type="text" name="sangre" id="sangre" placeholder="Tipo de Sangre" class="input-home" required>
                            <div class="input-icon"><i class="fa-solid fa-droplet"></i></div>
                        </div>
                    </div>
                    <div class="input-container-group">
                        <div class="input-group input-group-icon">
                            <input type="text" name="alergia" id="alergia" placeholder="Alergia" class="input-home" required>
                            <div class="input-icon"><i class="fa-solid fa-head-side-mask"></i></div>
                        </div>

                        <div class="input-group input-group-icon">
                            <input type="text" name="padecimientos" id="padecimientos" placeholder="Padecimientos" class="input-home" required>
                            <div class="input-icon"><i class="fa-solid fa-heart-circle-xmark"></i></div>
                        </div>
                    </div>

                    <div class="input-group input-group-icon">
                        <input type="text" name="medicamentos" id="medicamentos" placeholder="Medicamentos que utilice regularmente" class="input-home" required>
                        <div class="input-icon"><i class="fa-solid fa-kit-medical"></i></div>
                    </div>
                    <div class="input-group input-group-icon">
                        <input type="text" name="club" id="club" placeholder="Club" class="input-home">
                        <div class="input-icon"><i class="fa-solid fa-people-group"></i></div>
                    </div>
                    {{-- <div class="input-group input-group-icon">
                        <select class="select-home" name="estado" id="estado" style="width: 100%;" required placeholder="Estado">
                            <option disabled selected >Seleccione una opción</option>
                            @foreach ($estados as $estado)                                 
                                <option value="{{$estado->id}}">{{$estado->nombre}}</option>
                            @endforeach
                        </select>
                        <div class="input-icon"><i class="fa-solid fa-school"></i></div>
                    </div> --}}                    
                    <div class="input-group input-group-icon">
                        <select class="select-home" name="categoria" id="categoria" style="width: 100%;" placeholder="Categoria" required>
                            <option value="" selected disabled>Seleccione una categoria</option>                            
                        </select>
                        <div class="input-icon"><i class="fa-solid fa-male"></i></div>
                    </div>
                    <!-- <div class="input-group input-group-icon" id="distancia-group">
                        <select class="select-home" name="facultad" id="facultad" style="width: 100%;" placeholder="Distancia" required>                            
                            <option disabled selected>Seleccione la distancia</option>
                        </select>
                        <div class="input-icon"><i class="fa-solid fa-road"></i></div>
                    </div>                     -->
                    <div class="input-group input-group-icon">
                        <select class="select-home" name="sexo" id="sexo" style="width: 100%;" placeholder="Sexo" required>
                            <option disabled selected >Seleccione su sexo</option>
                            <option value="M">-Masculino</option>
                            <option value="F">-Femenino</option>
                        </select>
                        <div class="input-icon"><i class="fa-solid fa-venus-mars"></i></div>
                    </div>
                    {{-- <div class="input-group input-group-icon">
                        <select class="select-home" name="paquete" id="paquete" class="select-home" required style="width: 100%;" placeholder="KIT">
                            <option value="" selected disabled>Seleccione un paquete</option>
                        </select>
                        <div class="input-icon"><i class="fa-solid fa-folder"></i></div>
                    </div>  --}}
                     
                    {{-- <div class="input-group">
                        <select class="select-home" name="modalidad" id="modalidad" required style="width: 100%;" placeholder="Modalidad">
                            <option value=""></option>
                            <option value="general">General</option>
                            <option value="selectivo">Selectivo</option>
                        </select>
                    </div> --}}
                    {{-- <div class="input-group input-group-icon" id="playera-container">
                        <input type="checkbox" name="playera" id="playera" class="input-home">
                        <label for="playera">Agregar playera conmemorativa</label>
                        <span style="color: #dd1313"><strong>+$160</strong></span>
                    </div> --}}                    
                    <div class="input-group input-group-icon">
                        <select class="select-home" name="talla" id="talla" style="width: 100%;" placeholder="Jersey">
                            <option value="" selected disabled>Seleccione su talla</option>
                        </select>
                        <div class="input-icon"><i class="fa-solid fa-shirt"></i></div>
                    </div>
                </div>
                {{-- <div class="field-wrapper border">
                    <input style="padding-left:1em" type="text" name="domicilio" id="domicilio" placeholder="Domicilio" class="email-field" required value"">
                </div> --}}
                <p>
                    <b>EMERGENCIAS</b>
                </p>

                <div class="input-group input-group-icon">
                        <input type="text" name="fname" id="fname" placeholder="Nombre del familiar" class="input-home" required>
                        <div class="input-icon"><i class="fa-solid fa-person-circle-check"></i></div>
                </div>
                <div class="input-group input-group-icon">
                        <input type="tel" name="fphone" id="fphone" placeholder="Teléfono" class="input-home" pattern="^\(\d{3}\) \d{3} \d{2} \d{2}$" required minlength="5">
                        <div class="input-icon"><i class="fa-solid fa-mobile-retro"></i></i></div>
                </div>
                <div class="input-group input-group-icon">
                    <input type="text" name="codigo" id="codigo" class="input-home" placeholder="Código de descuento">
                    <input type="hidden" name="idParticipantCode" id="idParticipantCode" class="input-home">
                    <div class="input-icon"><i class="fa-solid fa-bookmark"></i></div>
                    <span id="code_message" class="messages"></span>
                </div>
                <div class="field-wrapper send-btn-wrapper">
                    <input type="submit" name="send" id="send" value="¡Registrarme!" class="send-btn">
                </div>
                <div class="errors nota"></div>
            </div>
        </form><br>
        <input type="hidden" name="idDiscountCode" id="idDiscountCode">
    </div>
</section>
<aside class="triatlon open" id="triatlon">
    <ul class="listaC" id="listaC">
        <li>
            <a href="#" id="homeLink">
                HOME
            </a>
        </li>
        <li>
            <a href="#" id="eventoLink">
                REGLAMENTO
            </a>
        </li>
        <li>
           <a href="#" id="categoriaLink">
                CATEGORÍAS
            </a>
        </li>
        <li>
            <a href="#" id="premiacionLink">
               PREMIACIÓN
            </a>
        </li>
        <li>
            <a href="#" id="gallery-link">
               PLAYERA
            </a>
            <div class="image-popup-fit-width2" style="display: none;">
               <a href="{{asset('img/playera.jpg')}}"></a>
            </div>
        </li>
        <li>
            <a href="#" id="gallery-link1">
              MEDALLA
            </a>
            <div class="image-popup-fit-width2" style="display: none;">
              <a href="{{asset('img/medalla.jpg')}}"></a>
            </div>
        </li>
        <li>
            <a href="#" id="gallery-link2">
                    RUTA
            </a>
            <div class="image-popup-fit-width2" style="display: none;">
                    <a href="{{asset('img/ruta.jpg')}}"></a>
            </div>
        </li>
   </ul>
    <div class="more-listaC-btn-wrap">
        <button id="more-listaC-btn" class="more-listaC-btn">
            <span aria-hidden="true" class="li_world"></span> &nbsp; CONVOCATORÍA
        </button>
    </div>
</aside>

<script id="categoria-plantilla" type="text/x-handlebars-template">
    <div class="subtitle"><br>
        <b>{{$titulo}}</b>
        <div class="col100" style="margin-top: -20px;">
            <h2 style="color:black; margin-bottom: 0;">
                <b>CATEGORIAS</b>
            </h2>
            <div class="container-table100">
                <div class="wrap-table100">
                    <div class="table-100" style="--limit-column:3;" >                        
                        <div class="row-100 custom-row custom-header">
                            <div class="cell-100">CATEGORIA</div>
                            <div class="cell-100">RAMA</div>
                            <div class="cell-100">DISTANCIAS</div>
                        </div>
                        <div class="row-100 custom-row header-100">
                            <div class="cell-100 header-table">Adultos</div>
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">JUVENIL (14-17 AÑOS)</div>
                            <div class="cell-100">VARONIL / FEMENIL</div>
                            <div class="cell-100">5 KM</div>                            
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">LIBRE (18-39 AÑOS)</div>
                            <div class="cell-100">VARONIL / FEMENIL</div>
                            <div class="cell-100">5 KM</div>                            
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">MASTER (40+ AÑOS)</div>
                            <div class="cell-100">VARONIL / FEMENIL</div>
                            <div class="cell-100">5 KM</div>
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">VETERANOS (50+)</div>
                            <div class="cell-100">VARONIL / FEMENIL</div>
                            <div class="cell-100">5 KM</div>
                        </div>                                               
                        <div class="row-100 custom-row">
                            <div class="cell-100">CAMINATA (LIBRE)</div>
                            <div class="cell-100">VARONIL / FEMENIL</div>
                            <div class="cell-100">3 KM</div>
                        </div>
                        <div class="row-100 custom-row header-100">
                            <div class="cell-100 header-table">NIÑOS</div>
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">INFANTIL (4-5 AÑOS)</div>
                            <div class="cell-100">VARONIL / FEMENIL</div>
                            <div class="cell-100">75 M</div>
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">INFANTIL (6-7 AÑOS)</div>
                            <div class="cell-100">VARONIL / FEMENIL</div>
                            <div class="cell-100">100 M</div>
                        </div> 
                        <div class="row-100 custom-row">
                            <div class="cell-100">INFANTIL (8-9 AÑOS)</div>
                            <div class="cell-100">VARONIL / FEMENIL</div>
                            <div class="cell-100">500 M</div>
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">INFANTIL (10-13 AÑOS)</div>
                            <div class="cell-100">VARONIL / FEMENIL</div>
                            <div class="cell-100">1 KM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</script>

<script id="home-plantilla" type="text/x-handlebars-template">
    <div class="subtitle">
        <p style="margin-top:20px; padding: 20px; text-align:center;">
            VAMOS HUATULCO TE INVITA A PARTICIPAR EN LA 3ERA EDICIÓN DE LA CARRERA CON CAUSA EN APOYO A UN NUEVO AMANECER EN PRO DEL DISCAPACITADO A.C. <br>
            <!-- <span class="title-event"><b>{{$titulo}}</b></span> -->
        </p>                    
        <div class="col100" style="margin-top: -75px;">
            <h2 style="color:black; margin-bottom: 0;">
                <b>DATOS DEL EVENTO</b>
            </h2>                        
            <ul>
                <li>
                    <b>Lugar del Evento:</b>
                    <br>{{$opciones_evento['lugar_evento']}}
                </li>
                <li>
                    <b>Fecha:</b>
                    <br>{{$opciones_evento['fecha_evento']}}
                </li>
                <li>
                    <b>Salida:</b>
                    <br>{{$opciones_evento['salida']}}
                </li>
                <li>
                    <b>Meta</b>
                    <br>{{$opciones_evento['meta']}}
                </li>
                <li>
                    <b>Distancias:</b>
                    <br>{{$opciones_evento['distancias']}} <br>
                </li>
                <li>
                    <b>Horario de arranque:</b>
                    <br>{{$opciones_evento['horario']}}
                </li>
                <li>
                    <b>Cupo:</b>
                    <br>{{$opciones_evento['cupo']}} participantes
                </li>
            </ul>                                                
            <div class="container-table100">
                <div class="wrap-table100">
                    <div class="table-100">
                        <div class="row-100 three-row header-100">
                            <div class="cell-100 header-table">COSTOS POR INSCRIPCIÓN</div>
                        </div>
                        <div class="row-100 three-row header-three">                                        
                            <div class="cell-100">
                                <strong>CATEGORÍA</strong>
                            </div>
                            <div class="cell-100">
                                <strong> DEL 20 DE NOVIEMBRE AL 30 DE NOVIEMBRE </strong><br>
                                
                            </div>
                            <div class="cell-100">
                                <strong>DEL 01 DE DICIEMBRE AL 09 DE ENERO</strong> <br>
                                
                            </div>
                            <div class="cell-100">
                                PRECIO EXTEMPORÁNEO <br>
                                <strong>DEL 10 Y 11 DE ENERO (ENTREGA DE PAQUETES)</strong> <br>                                          
                                    
                                <span style="color:red;">(sujeto a disponibilidad)</span>
                            </div>
                        </div>
                        <div class="row-100 three-row">                                        
                            <div class="cell-100">ADULTOS</div>
                            <div class="cell-100">$300.00</div>
                            <div class="cell-100">$350.00</div>
                            <div class="cell-100">$400.00</div>                                        
                        </div>
                        <div class="row-100 three-row">                                        
                            <div class="cell-100">NIÑOS</div>
                            <div class="cell-100">$200.00</div>
                            <div class="cell-100">$250.00</div>
                            <div class="cell-100">$300.00</div>                                        
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div style="display: flex; justify-content: center; flex-wrap: wrap;">
                <p style="font-size:18px;"><b>NOTA:</b></p>                            
                <p style="font-size:18px;"><b>Después del 16 de octubre, tallas sujetas a disponibilidad.</b></p>
                <p style="font-size:18px;"><b>Si desean adquirir la playera tendrá un costo extra de $160.00.</b></p>                            
            </div> -->
            <br>
            <b>DERECHOS DEL COMPETIDOR</b><br>
            <ul>                            
                <li>Medalla de finalista</li>
                <li>Playera conmemorativa </li>
                <li>Chip de cronometraje electrónico.</li>
                <li>Número de corredor</li>
                <li>Hidratación en ruta</li>
                <li>Zona de recuperación</li>
                <li>Servicio médico en ruta y recuperación</li>
                <li>Seguridad vial</li>
            </ul>                      

            <b>REGISTRO E INSCRIPCIÓN </b>
            <br>
            <ul>
                <li>En www.hbsports.com.mx/vamoshuatulco</li>     
                <li>
                    Nota: Para inscripciones y pago físico, visita Café Porto Huatulco todos los martes de diciembre de 8:30 am a 10:00 am y pregunta por Mark Kennedy 958 115 5597.
                </li>
            </ul>
            <br>
            <b>SERVICIO MÉDICO</b>
            <ul>
                <li>El estado de salud de los competidores es responsabilidad de cada corredor y NO del comité organizador. 
                    Se ofrecerá asistencia médica en caso de que se presente cualquier emergencia. Si padeces de alguna enfermedad es importante que debamos saber,
                    y/o si eres alérgico a algún medicamento, por favor anótalo en la forma de inscripción.</li>
            </ul>
            <br>
            <b>ENTREGA DE PAQUETE DE COMPETIDOR.</b>
            <ul>
                <li>
                    ●	Lugar: Parque hundido de Chahué  <br>
                    ●	Fecha: 11 de enero de 2025 <br>
                    ●	Horario: De 14 a 18:00 hrs                      
                </li>
                <br>
                <li>
                    Antes de recoger tu paquete de competidor es indispensable que llenes la forma de exoneración que te proporcionaremos.
                </li>
                <br>
                <li>
                    Sin excepción alguna, no se entregará ningún paquete de corredor a quien no presente debidamente lleno y firmado dicho formato, así como una identificación oficial para corroborar su firma e identidad.
                </li>
                <br>
                <!-- <li>Todo participante inscrito cede al comité organizador el derecho de utilizar su nombre e imagen en cualquier promoción motivo del evento.</li>                             -->
            </ul>                        
            <br>
        </div>
    </div>
</script>

<script id="reglamento-plantilla" type="text/x-handlebars-template">
    <div class="subtitle">
        <div class="col100" style="margin-top: 20px">
            <p style="font-size: 20px"><b>Motivos de descalificación: </b></p>
            <ul>
                <li>No tener colocado el número de corredor al frente de la playera durante toda la competencia (sin dobleces, recortes ni alteraciones).</li>
                <li><br></li>
                <li>Estar delante de la línea de salida en el momento de dar la señal de inicio de carrera.</li>
                <li><br></li>
                <li>No correr la ruta completa.</li>
                <li><br></li>
                <li>No seguir la ruta marcada.</li>
                <li><br></li>
                <li>Actitudes antideportivas con corredores y/o jueces.</li>
                <li><br></li>
                <li>No concentrarse en el área de salida.</li>
                <li><br></li>
                <!-- <li>Correr acompañado de una mascota.</li> -->
                <!-- <li><br></li> -->
                <li>Ingresar a la carrera con bicibleta o cualquier vehículo motorizado.</li>
            </ul>
            <br>
            {{-- <div>TIEMPO LÍMITE PARA LA PRUEBA:</div><br>
            <ul>
                <li>
                    Por seguridad de los competidores el "tiempo máximo" para la carrera es de 01:00 hora, lapso durante el cual la ruta
                    permanecerá cerrada y protegida por el personal de Tránsito y Seguridad Pública. El comité organizador NO se hace responsable
                    por competidores que continúen en la ruta después del tiempo límite.
                </li>
            </ul> --}}
        </div>
    </div>
</script>

<script id="premiacion-plantilla" type="text/x-handlebars-template">
    <div class="subtitle"><br>
        <b>{{$titulo}}</b>
        <div class="col100" style="margin-top: -20px;">
            <h2 style="color:black; margin-bottom: 0;">
                <b>PREMIACIÓN</b>
            </h2>
            <div class="container-table100">
                <div class="wrap-table100">
                    <div class="table-100" style="--limit-column:5;">
                        <div class="row-100 custom-row header-100">
                            <div class="cell-100 header-table">LIBRE</div>
                        </div>
                        <div class="row-100 custom-row header-custom"> 
                            <div class="cell-100">
                                <strong>CATEGORÍA</strong>
                            </div>
                            <div class="cell-100">
                                <strong>EDAD</strong>
                            </div>                           
                            <div class="cell-100">
                                <strong>1ER LUGAR</strong>
                            </div>
                            <div class="cell-100">
                                <strong>2DO LUGAR</strong>
                            </div>
                            <div class="cell-100">
                                <strong>3ER LUGAR</strong>
                            </div>                            
                        </div>
                        <div class="row-100 custom-row">                                        
                            <div class="cell-100">Juvenil</div>
                            <div class="cell-100">14-17 años</div>
                            <div class="cell-100">$900.00</div>
                            <div class="cell-100">$800.00</div>
                            <div class="cell-100">$700.00</div>                                                                    
                        </div>
                        <div class="row-100 custom-row">                                        
                            <div class="cell-100">Libre</div>
                            <div class="cell-100">18-39 años</div>
                            <div class="cell-100">$2,000.00</div>
                            <div class="cell-100">$1,500.00</div>
                            <div class="cell-100">$1,000.00</div>                                                                    
                        </div>
                        <div class="row-100 custom-row">                                        
                            <div class="cell-100">Máster</div>
                            <div class="cell-100">40-49 años</div>
                            <div class="cell-100">$1,000.00</div>
                            <div class="cell-100">$900.00</div>
                            <div class="cell-100">$800.00</div>                                                                    
                        </div>  
                        <div class="row-100 custom-row">                                        
                            <div class="cell-100">Veteranos</div>
                            <div class="cell-100">50+</div>
                            <div class="cell-100">$1,000.00</div>
                            <div class="cell-100">$900.00</div>
                            <div class="cell-100">$800.00</div>                                                                    
                        </div>                      
                    </div>
                </div>
            </div>
            <p style="font-size: 18px">
                Carrera de niños regalos sorpresa
            </p>
        </div>
    </div>
</script>

<script id="resultados-plantilla" type="text/x-handlebars-template">
  <div class="subtitle"><br>
     <div class="col100" style="margin-top: -20px;">
     </div>  
  </div>
</script>

    <a class="popup-with-form" href="Aj-test-form" style="display:none;">Open form</a>

    <div id="test-modal" class="white-popup-block mfp-hide">
        <center>
            <img src="{{asset("img/hbs.png")}}" height="90">
        </center>
        <div style="text-align: center;">
            <span id="ttx+AF8-regsuccess" style="color:green; font-weight: bold"> Gracias por registrarte en la  {{$titulo}} </span>
        </div>
        <p style="text-align: justify;">
            <span style="color:red !important" id="modal_message"> Te recordamos que no estas formalmente inscrito hasta realizar el pago, al dar clic en el botón de abajo te mostraremos la ventana de pago, donde podrás elegir pago con tarjeta y pago referenciado en tiendas OXXO, si pagas con tarjeta bancaria (débito o crédito) se te asignara un numero de corredor y quedaras formalmente inscrito. si eliges pago en OXXO, tendrás un lapso de 48 horas para realizar el pago, de lo contrario se borrara este pre-registro y tendrás que volver a hacerlo.
            </span>
        </p>
        <p style="text-align: justify; font-weight: bold" id="modal_end_message">
           Te sugerimos hacerlo a la brevedad ya que los lugares están disponibles hasta agotar existencias.
        </p>
        <center>
            <p>
                <input type="hidden" name="url_participante" id="url_participante">
                <input type="hidden" name="id_participante" id="id_participante">
                <input type="button" class="popup-modal-dismiss" value="cerrar">
                {{-- <a href="https://hbsports.com.mx/resultados" style="text-decoration: none;color:#000;" id="link">Resultados</a> --}}
            </p>
        </center>
    </div>

    <a class="popup-modal" href="#test-modal" style="display:none;" >Open modal</a>
    <div class="footer">
        <a href="https://www.hbsports.com.mx/" target="_blank">
            <img src="https://hbsports.com.mx/images/header/header-1/logo-hardbeat.png" height="70">
        </a>
        <h3 class="title">-INFORMES</h3>
        <!-- <a class="phone" href="tel:9511259335">
            (951) 125 9335
        </a> -->
        <a class="phone" href="tel:9512434100">
            (951) 243 4100
        </a>
        <a class="facebook" href="https://www.facebook.com/hardbeatsports" target="_blank">
            fb/hardbeatsports
        </a>
        <a class="url" href="https://hbsports.com.mx/aviso-de-privacidad/" target="_blank">
            Aviso de Privacidad
        </a>
    </div>

    <a href="#" class="test" id="testButton" style="display:none;">↑</a>
    <a href="#registro-form" class="test-2" id="testDos">REGISTRO</a>
    <style>       
        .test {
            position: fixed; 
            bottom: 100px; 
            right: 8px; 
            background-color: var(--primary-color);             
            color: white; 
            border: none; 
            border-radius: 50%; 
            width: 40px; 
            height: 40px; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            font-size: 22px; 
            text-decoration: none; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
            transition: background-color 0.3s; 
        }

        .test:hover {
            background-color: #faaf44; 
        }

        .test-2 {
            position: fixed; 
            top: 50%; 
            left: 0;
            padding: 10px 4px; /* Ajusta el padding según sea necesario */
            background-color: var(--primary-color); 
            opacity: 0.8;
            border-left: solid 3px #faaf44;
            border-right: solid 5px #faaf44;
            color: white; 
            /* border: none;  */
            border-radius: 5%; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            font-size: 20px; 
            text-decoration: none; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
            transition: background-color 0.3s; 
            writing-mode: vertical-rl; /* Rotar el texto */
            transform: rotate(180deg); /* Ajusta la orientación del texto */
        }

        .test-2:hover {
            background-color: #faaf44; 
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const floatButton = document.getElementById('testButton');
            const scrollThreshold = 300; // Ajusta este valor según sea necesario
        
            window.addEventListener('scroll', function () {
                if (window.scrollY > scrollThreshold) {
                    floatButton.style.display = 'flex'; // Muestra el botón
                } else {
                    floatButton.style.display = 'none'; // Oculta el botón
                }
            });
        });
    </script>
@stop