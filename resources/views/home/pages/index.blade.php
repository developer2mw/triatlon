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
    <div class="lds-ring lds-ring-index circular"><div></div><div></div><div></div><div></div><span style="color:white;">Espere...</span></div></div>

<header class="header">
    <div class="header-inner ">
        <div class="nano">
            <div class="nano-content">
                <div class="subtitle"><br>
                    <b>{{$titulo}}</b>
                    <br>
                    {{-- <p style="margin-top:20px; padding: 20px; text-align:justify;">
                        
                    </p> --}}
                    <br>
                    <div class="col100" style="margin-top: -35px;">
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
                                <br>{{$opciones_evento['cupo']}}
                            </li>
                        </ul>
                        <br>
                        <b>NOTA:</b><br>
                        <h3>COSTOS POR INSCRIPCIÓN</h3>
                        <div class="container-table100">
                            <div class="wrap-table100">
                                <div class="table-100">
                                    <div class="row-100 third-row header-100">
                                        <div class="cell-100 header-table">COSTOS POR INSCRIPCIÓN</div>
                                    </div>
                                    <div class="row-100 third-row header-third">
                                        {{-- <div class="cell-100">DISTANCIA</div> --}}
                                        <div class="cell-100">
                                            DEL 05 DE ENERO AL 21 DE ENERO DEL 2024 <br>
                                            PREINSCRIPCIÓN
                                        </div>
                                        <div class="cell-100">
                                            DEL 22 DE ENERO AL 2 DE FEBRERO DEL 2024 <br>
                                            INSCRIPCIÓN
                                        </div>
                                        <div class="cell-100">
                                            3 DE FEBRERO DEL 2024<br>
                                            EXTEMPORÁNEO <br>
                                            <span style="color:#dd1313">(SUJETO A DISPONIBILIDAD)</span>
                                        </div>
                                    </div>
                                    <div class="row-100 third-row">
                                        <div class="cell-100">$490.00</div>
                                        <div class="cell-100">$580.00</div>
                                        <div class="cell-100">$650.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <b>NOTA: </b>
                        <ul>
                            <li>
                                La edad para tomarse en cuenta es la que el participante tenga al 31 de diciembre de 2024. Para ello, deberán presentar acta de nacimiento o credencial escolar o CURP para comprobar su edad. 
                            </li>
                            <li>
                                Es indispensable que el padre o tutor firme la hoja de exoneración en caso de que el participante tenga menos de 18 años.
                            </li>
                        </ul>
                        <br>
                        <b>DERECHOS DEL COMPETIDOR</b><br>
                        <ul>
                            <li>Playera.</li>
                            <li>Medalla de finalista.</li>
                            <li>Hidratación de ruta.</li>
                            <li>Zona de recuperación</li>
                            <li>Servicio médico en ruta y recuperación.</li>
                            <li>Chip de cronometraje electrónico.</li>
                            <li>Seguridad víal.</li>
                        </ul>
                        <br>
                        <b>ENTREGA DEL KIT DE CORREDOR</b>
                        <ul>
                            <li>
                                <span style="color: var(--fourth-color);">Fecha y Lugar de Entrega: </span><br>
                                Sábado, 3 de febrero de 2024, de 3:00 pm a 7:00 pm, en el Club Deportivo Oaxaca, Carretera Internacional Kilómetro 6.5, San Francisco Tutla, Oaxaca de Juárez, OAX.
                            </li>
                            <li>
                                <span style="color: var(--fourth-color);">Junta Previa: </span><br>
                                Obligatoria en el Club Deportivo Oaxaca a las 7:00 pm del sábado 3 de febrero de 2023, para conocer la ruta y el reglamento de competencia.
                            </li>
                            <li>
                                <span style="color: var(--fourth-color);">Documentación Necesaria: </span><br>
                                INE original para la entrega del chip. En caso de no contar con este documento, se puede optar por realizar un depósito de $500 pesos, reembolsables al entregar el chip después de la competencia.
                            </li>
                            <li>
                                <span style="color: var(--fourth-color);">Firma de Hoja de Exoneración: </span><br>
                                Se realizará durante la entrega de kits.
                            </li>
                            <li>
                                <span style="color: var(--fourth-color);">Documentación de Inscripción: </span><br>
                                Presentar el documento proporcionado en el momento de la inscripción.
                            </li>
                            <li>
                                <span style="color: var(--fourth-color);">Condiciones de entrega:</span><br>
                                Los participantes que no recojan su kit en el lugar, día y hora indicado, perderán todo derecho derivado de su inscripción.
                            </li>
                            <li>
                                <span style="color: var(--fourth-color);">Derechos de Uso de Nombre e Imagen:</span><br>
                                Todo participante inscrito cede al comité organizador el derecho de utilizar su nombre e imagen en cualquier promoción relacionada con el evento.
                            </li>
                            <li>
                                <span style="color: var(--fourth-color);">Condiciones Únicas.</span><br>
                                Estas bases son las únicas y deben respetarse en todo momento. Cualquier situación no contemplada será resuelta por el comité organizador.
                            </li>
                        </ul>
                        <br>
                        <b>SERVICIOS PARA EL COMPETIDOR</b>
                        <ul>
                            <li>
                                <span style="color: var(--fourth-color);">Abastecimiento</span><br>
                                Contarás con un abastecimiento. En este punto encontraras agua e isotónico, además de que contarás con el apoyo del personal de staff.
                            </li>
                            <li>
                                <span style="color: var(--fourth-color);">Zona de recuperación</span><br>
                                Localizado al final de la meta. Encontrarás agua, isotónicos y fruta para recobrar un poco de energía. Ayuda especializada en primeros auxilios en caso de requerirlo.
                            </li>
                            <li>
                                <span style="color: var(--fourth-color);">Servicio médico</span><br>
                                El estado de salud de los competidores es responsabilidad de cada corredor y NO del comité organizador. Se ofrecerá asistencia médica en primeros auxilios en caso de que se presente cualquier emergencia. <br>
                                Si padeces de alguna enfermedad es importante que debamos saber, y/o si eres alérgico algún medicamento, por favor anótalo en la forma de inscripción.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<section class="main">
    <div class="main-inner">
       
        <form action="#" method="post" class="registro-form tab-form-led" id="registro-form">
            <!-- @csrf Una medida de seguridad cintra ataques maliciosos -->
            @csrf
            <input type="hidden" name="idd" id="idd" value="">
            <input type="hidden" name="idr" id="idr" value="">
            <h4 style="margin:0; margin-top: 1rem; margin-bottom: 1rem;">{{$titulo}}</h4>
            <div style="font-size: 16px;">Para hacer tu registro correctamente deberás llenar todos los campos. Si tienes alguna duda contáctanos al 951 243 4100</div>
            <div class="nota">-NOTA: Una vez registrado, te sugerimos hacer el pago en línea. Si generas formato de pago en OXXO tendrás 48 horas para realizar tu pago, de lo contrario tu registro expirará.</div>
            <div class="nota">-NOTA: SOLO SE GARANTIZA LA TALLA DE PLAYERA A QUIEN SE INSCRIBA ANTES DEL 21 DE ENERO DE 2024</div>
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
                            <input type="text" name="sangre" id="sangre" placeholder="Tipo de Sangre" class="input-home">
                            <div class="input-icon"><i class="fa-solid fa-droplet"></i></div>
                        </div>
                    </div>
                    <div class="input-container-group">
                        <div class="input-group input-group-icon">
                            <input type="text" name="alergia" id="alergia" placeholder="Alergia" class="input-home">
                            <div class="input-icon"><i class="fa-solid fa-head-side-mask"></i></div>
                        </div>

                        <div class="input-group input-group-icon">
                            <input type="text" name="padecimientos" id="padecimientos" placeholder="Padecimientos" class="input-home">
                            <div class="input-icon"><i class="fa-solid fa-heart-circle-xmark"></i></div>
                        </div>
                    </div>

                    <div class="input-group input-group-icon">
                        <input type="text" name="medicamentos" id="medicamentos" placeholder="Medicamentos que utilice regularmente" class="input-home">
                        <div class="input-icon"><i class="fa-solid fa-kit-medical"></i></div>
                    </div>
                    <div class="input-group input-group-icon">
                        <input type="text" name="club" id="club" placeholder="Club" class="input-home">
                        <div class="input-icon"><i class="fa-solid fa-people-group"></i></div>
                    </div>
                    <div class="input-group input-group-icon">
                        <select class="select-home" name="estado" id="estado" style="width: 100%;" required placeholder="Estado">
                            @foreach ($estados as $estado) 
                                <option value="{{$estado->id}}">{{$estado->state}}</option>
                            @endforeach
                        </select>
                        <div class="input-icon"><i class="fa-solid fa-globe"></i></div>
                    </div>
                    <div class="input-group input-group-icon">
                        <select class="select-home" name="sexo" id="sexo" style="width: 100%;" required placeholder="Sexo">
                            <option disabled selected >Seleccione una opción</option>
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
                    <div class="input-group input-group-icon">
                        <select class="select-home" name="categoria" id="categoria" class="select-home" required style="width: 100%;" placeholder="Categoria">
                            <option value="" selected disabled>Seleccione una categoria</option>
                        </select>
                        <div class="input-icon"><i class="fa-solid fa-male"></i></div>
                    </div> 
                    {{-- <div class="input-group">
                        <select class="select-home" name="modalidad" id="modalidad" required style="width: 100%;" placeholder="Modalidad">
                            <option value=""></option>
                            <option value="general">General</option>
                            <option value="selectivo">Selectivo</option>
                        </select>
                    </div> --}}
                    <div class="input-group input-group-icon">
                        <select class="select-home" name="talla" id="talla" required style="width: 100%;" placeholder="Jersey">
                            <option value="" selected disabled>Seleccione su talla</option>
                        </select>
                        <div class="input-icon"><i class="fa-solid fa-arrows-alt"></i></div>
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
                    <div class="table-100" style="--limit-column:5;" >
                        <div class="row-100 custom-row header-100">
                            <div class="cell-100 header-table">FEMENIL - VARONIL</div>
                        </div>
                        <div class="row-100 custom-row custom-header">
                            <div class="cell-100">CATEGORIA</div>
                            <div class="cell-100">RAMA</div>
                            <div class="cell-100"></div>
                            <div class="cell-100">DISTANCIAS</div>
                            <div class="cell-100"></div>
                        </div>
                        <div class="row-100 custom-row custom-header">
                            <div class="cell-100"></div>
                            <div class="cell-100"></div>
                            <div class="cell-100">Carrera</div>
                            <div class="cell-100">Natación</div>
                            <div class="cell-100">Carrera</div>
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">Infantil 8 y menores</div>
                            <div class="cell-100">FEMENIL Y VARONIL</div>
                            <div class="cell-100">300 mts</div>
                            <div class="cell-100">100 mts</div>
                            <div class="cell-100">300 mts</div>
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">Infantil (9-12 años)</div>
                            <div class="cell-100">FEMENIL Y VARONIL</div>
                            <div class="cell-100">1 KM </div>
                            <div class="cell-100">200 mts</div>
                            <div class="cell-100">500 mts</div>
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">Infantil (13-15 años)</div>
                            <div class="cell-100">FEMENIL Y VARONIL</div>
                            <div class="cell-100">1 KM</div>
                            <div class="cell-100">400 mts</div>
                            <div class="cell-100">1 KM</div>
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">Juvenil (16 a 17 años)</div>
                            <div class="cell-100">FEMENIL Y VARONIL</div>
                            <div class="cell-100">2.5 KM</div>
                            <div class="cell-100">600 mts</div>
                            <div class="cell-100">1.5 KM</div>
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">Libre (18 y mas)</div>
                            <div class="cell-100">FEMENIL Y VARONIL</div>
                            <div class="cell-100">2.5 KM</div>
                            <div class="cell-100">600 mts</div>
                            <div class="cell-100">1.5 KM</div>
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">Master 40 y mas</div>
                            <div class="cell-100">FEMENIL Y VARONIL</div>
                            <div class="cell-100">2.5 KM</div>
                            <div class="cell-100">600 mts</div>
                            <div class="cell-100">1.5 KM</div>
                        </div>
                        <div class="row-100 custom-row">
                            <div class="cell-100">Mi primer acuatlon</div>
                            <div class="cell-100">FEMENIL Y VARONIL</div>
                            <div class="cell-100">1 KM</div>
                            <div class="cell-100">200 mts</div>
                            <div class="cell-100">500 mts</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</script>

<script id="home-plantilla" type="text/x-handlebars-template">
    <div class="subtitle"><br>
        <b>{{$titulo}}</b>
        <br>
        <!--<p style="margin-top:20px; padding: 10px; text-align:justify;">En el marco de las Fiestas de Noviembre de Puerto Escondido, El H. Ayuntamiento constitucional de San Pedro Mixtepec
        en coordinación con la Regiduría de Turísmo, la Regiduría de Deportes y la Escuela de Cultura Física y Deporte de la UABJO invitan a participar
        en su Triatlón denominado "Triatlón LED UABJO" en su séptima edición.</p> -->
        <br>
        <div class="col100" style="margin-top: -35px;">
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
                    <br>{{$opciones_evento['cupo']}}
                </li>
            </ul>
            <br>
            <b>NOTA:</b><br>
            <h3>COSTOS POR INSCRIPCIÓN</h3>
            <div class="container-table100">
                <div class="wrap-table100">
                    <div class="table-100">
                        <div class="row-100 third-row header-100">
                            <div class="cell-100 header-table">COSTOS POR INSCRIPCIÓN</div>
                        </div>
                        <div class="row-100 third-row header-third">
                            {{-- <div class="cell-100">DISTANCIA</div> --}}
                            <div class="cell-100">
                                DEL 05 DE ENERO AL 21 DE ENERO DEL 2024 <br>
                                PREINSCRIPCIÓN
                            </div>
                            <div class="cell-100">
                                DEL 22 DE ENERO AL 2 DE FEBRERO DEL 2024 <br>
                                INSCRIPCIÓN
                            </div>
                            <div class="cell-100">
                                3 DE FEBRERO DEL 2024<br>
                                EXTEMPORÁNEO <br>
                                <span style="color:#dd1313">(SUJETO A DISPONIBILIDAD)</span>
                            </div>
                        </div>
                        <div class="row-100 third-row">
                            <div class="cell-100">$490.00</div>
                            <div class="cell-100">$580.00</div>
                            <div class="cell-100">$650.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <b>NOTA: </b>
            <ul>
                <li>
                    La edad para tomarse en cuenta es la que el participante tenga al 31 de diciembre de 2024. Para ello, deberán presentar acta de nacimiento o credencial escolar o CURP para comprobar su edad. 
                </li>
                <li>
                    Es indispensable que el padre o tutor firme la hoja de exoneración en caso de que el participante tenga menos de 18 años.
                </li>
            </ul>
            <br>
            <b>DERECHOS DEL COMPETIDOR</b><br>
            <ul>
                <li>Playera.</li>
                <li>Medalla de finalista.</li>
                <li>Hidratación de ruta.</li>
                <li>Zona de recuperación</li>
                <li>Servicio médico en ruta y recuperación.</li>
                <li>Chip de cronometraje electrónico.</li>
                <li>Seguridad víal.</li>
            </ul>
            <br>
            <b>ENTREGA DEL KIT DE CORREDOR</b>
            <ul>
                <li>
                    <span style="color: var(--fourth-color);">Fecha y Lugar de Entrega: </span><br>
                    Sábado, 3 de febrero de 2024, de 3:00 pm a 7:00 pm, en el Club Deportivo Oaxaca, Carretera Internacional Kilómetro 6.5, San Francisco Tutla, Oaxaca de Juárez, OAX.
                </li>
                <li>
                    <span style="color: var(--fourth-color);">Junta Previa: </span><br>
                    Obligatoria en el Club Deportivo Oaxaca a las 7:00 pm del sábado 3 de febrero de 2023, para conocer la ruta y el reglamento de competencia.
                </li>
                <li>
                    <span style="color: var(--fourth-color);">Documentación Necesaria: </span><br>
                    INE original para la entrega del chip. En caso de no contar con este documento, se puede optar por realizar un depósito de $500 pesos, reembolsables al entregar el chip después de la competencia.
                </li>
                <li>
                    <span style="color: var(--fourth-color);">Firma de Hoja de Exoneración: </span><br>
                    Se realizará durante la entrega de kits.
                </li>
                <li>
                    <span style="color: var(--fourth-color);">Documentación de Inscripción: </span><br>
                    Presentar el documento proporcionado en el momento de la inscripción.
                </li>
                <li>
                    <span style="color: var(--fourth-color);">Condiciones de entrega:</span><br>
                    Los participantes que no recojan su kit en el lugar, día y hora indicado, perderán todo derecho derivado de su inscripción.
                </li>
                <li>
                    <span style="color: var(--fourth-color);">Derechos de Uso de Nombre e Imagen:</span><br>
                    Todo participante inscrito cede al comité organizador el derecho de utilizar su nombre e imagen en cualquier promoción relacionada con el evento.
                </li>
                <li>
                    <span style="color: var(--fourth-color);">Condiciones Únicas.</span><br>
                    Estas bases son las únicas y deben respetarse en todo momento. Cualquier situación no contemplada será resuelta por el comité organizador.
                </li>
            </ul>
            <br>
            <b>SERVICIOS PARA EL COMPETIDOR</b>
            <ul>
                <li>
                    <span style="color: var(--fourth-color);">Abastecimiento</span><br>
                    Contarás con un abastecimiento. En este punto encontraras agua e isotónico, además de que contarás con el apoyo del personal de staff.
                </li>
                <li>
                    <span style="color: var(--fourth-color);">Zona de recuperación</span><br>
                    Localizado al final de la meta. Encontrarás agua, isotónicos y fruta para recobrar un poco de energía. Ayuda especializada en primeros auxilios en caso de requerirlo.
                </li>
                <li>
                    <span style="color: var(--fourth-color);">Servicio médico</span><br>
                    El estado de salud de los competidores es responsabilidad de cada corredor y NO del comité organizador. Se ofrecerá asistencia médica en primeros auxilios en caso de que se presente cualquier emergencia. <br>
                    Si padeces de alguna enfermedad es importante que debamos saber, y/o si eres alérgico algún medicamento, por favor anótalo en la forma de inscripción.
                </li>
            </ul>
        </div>
    </div>
</script>

<script id="reglamento-plantilla" type="text/x-handlebars-template">
    <div class="subtitle">
        <div class="col100" style="margin-top: 20px">
            <h2>REGLAMENTO</h2>
            <br>
            <span>
                El presente reglamento tiene como objetivo establecer las normas y directrices que regirán el desarrollo del Acuatlón Deportivo Oaxaca 2024. Todos los participantes están obligados a conocer y cumplir con estas disposiciones para garantizar un evento seguro y justo. Cualquier violación a este reglamento puede resultar en descalificación.
            </span>
            <br>
            <b>DISPOSICIONES GENERALES: </b><br>
            <ul>
                <li>
                    La participación en el Acuatlón implica la aceptación de las reglas y regulaciones establecidas por el comité organizador.
                </li>
                <li>
                    El reglamento tiene como objetivo garantizar la seguridad y equidad de la competencia.
                </li>
            </ul>
            <br>
            <b>INSCRIPCIONES: </b><br>
            <ul>
                <li>La inscripción es personal e intransferible. Cualquier intento de transferencia resultará en descalificación.</li>
                <li>Los participantes deben proporcionar información veraz y completa durante el proceso de inscripción.</li>
                <li>Solo se permitirá la participación a aquellos que hayan completado el proceso de inscripción de acuerdo con los plazos establecidos.</li>
            </ul>
            <br>
            <b>EDAD Y DOCUMENTACIÓN: </b><br>
            <ul>
                <li>La edad válida para cada categoría es la que el participante tenga al 31 de diciembre de 2024.</li>
                <li>Se requerirá la presentación de acta de nacimiento, credencial escolar o CURP para verificar la edad.</li>
                <li>En caso de participantes menores de 18 años, es obligatoria la firma del padre o tutor en la hoja de exoneración.</li>
            </ul>
            <br>
            <b>SEGURIDAD Y EQUIPO: </b><br>
            <ul>
                <li>Todos los participantes deben usar el equipo obligatorio durante toda la competencia.</li>
                <li>EN LA ETAPA DE CARRERA EL TORSO DEBE IR CUBIERTO, EL NUMERO DE COMPETENCIA ASIGNADO DEBE IR EN LA PARTE FRONTAL DEL TORSO.</li>
                <li>EL USO DE GOOGLES Y GORRO DURANTE LA ETAPA DE NATACIÓN ES OBLIGATORIO.</li>
            </ul>
            <br>
            <b>COMPORTAMIENTO: </b><br>
            <ul>
                <li>Se espera que todos los participantes mantengan un comportamiento deportivo y respetuoso en todo momento.</li>
                <li>Cualquier forma de conducta antideportiva, como el bloqueo intencional o el comportamiento agresivo, resultará en descalificación.</li>
            </ul>
            <br>
            <b>DESARROLLO DE LA COMPETENCIA: </b>
            <ul>
                <li>Todos los participantes deben seguir la ruta oficial y las indicaciones del personal de seguridad.</li>
                <li>No se permite el acceso a la zona de competencia a personas ajenas al evento.</li>
                <li>La participación en la junta previa es obligatoria para conocer la ruta y el reglamento de competencia.</li>
            </ul>
            <br>
            <b>ENTREGA DEL KIT: </b><br>
            <ul>
                <li>La entrega del kit se realizará exclusivamente en la fecha y lugar designados.</li>
                <li>La firma de la hoja de exoneración es requisito para recibir el kit.</li>
            </ul>
            <br>
            <b>INICIO DE LA COMPETENCIA: </b><br>
            <ul>
                <li>La competencia comenzará a las 07:00 a.m. del domingo, 4 de febrero de 2024.</li>
                <li>Se seguirán las instrucciones del personal de organización para el inicio y durante la competencia.</li>
            </ul>
            <br>
            <b>CRONOMETRAJE ELECTRÓNICO: </b><br>
            <ul>
                <li>Cada participante recibirá un chip para el cronometraje electrónico. Este debe colocarse según las instrucciones proporcionadas.</li>
                <li>La pérdida o mal uso del chip resultará en la descalificación automática.</li>
            </ul>
            <br>
            <b>ZONAS DE TRANSICIÓN:</b><br>
            <ul>
                <li>Habrá zonas designadas para la transición de natación a carrera. Estas áreas deben ser respetadas para evitar sanciones.</li>
            </ul>
            <br>
            <b>ABASTECIMIENTO E HIDRATACIÓN: </b><br>
            <ul>
                <li>Puntos de abastecimiento y zonas de hidratación estarán ubicados a lo largo del recorrido. Se anima a los participantes a mantenerse hidratados.</li>
            </ul>
            <br>
            <b>DERECHOS DE USO DE NOMBRE E IMAGEN:</b><br>
            <ul>
                <li>Al inscribirse, los participantes otorgan al comité organizador el derecho de utilizar su nombre e imagen con fines promocionales.</li>
            </ul>
            <br>
            <b>DESCALIFICACIONES:</b><br>
            <ul>
                <li>Cualquier violación a las normas establecidas puede resultar en descalificación.</li>
                <li>El uso de sustancias prohibidas o cualquier forma de dopaje llevará a la descalificación inmediata.</li>
            </ul>
            <br>
            <b>DECISIONES DEL COMITÉ: </b><br>
            <ul>
                <li>El comité organizador tiene la autoridad para tomar decisiones finales sobre cualquier situación no contemplada en este reglamento.</li>
            </ul>
            <br>
            <span>
                Al participar en el Acuatlón Deportivo Oaxaca 2024, todos los competidores aceptan y se comprometen a cumplir con este reglamento. 
                El desconocimiento de las normas no exime de su cumplimiento. ¡Les deseamos a todos los participantes una competencia exitosa y llena de logros!
            </span>
            <br>
            <b>TRANSITORIOS: </b><br>
            <b>UNICO. MODIFICACIONES AL REGLAMENTO: </b><br>
            <p>El comité organizador se reserva el derecho de realizar modificaciones al reglamento, las cuales serán comunicadas a los participantes con anticipación.</p>
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
            <span>
                Al concluir la competencia y tras recibir los resultados preliminares por parte de los jueces, <br>
                el comité organizador llevará a cabo la ceremonia de premiación en presencia de invitados, medios de comunicación y el público en general.
            </span>
            <br>
            <b>NOTA: </b>
            <ul>
                <li>
                    Únicamente se premia a los 3 primeros lugares de cada categoría.
                </li>
                <li>
                    Reconocimiento a los 3 primeros lugares de cada categoría.
                </li>
                <li>
                    Si el competidor no recoge su premio, en el momento de la premiación, tendrá 10 días naturales después del evento para recogerlo en las instalaciones del Deportivo Oaxaca. <br>
                    En caso de pasar después del termino estipulado, el comité organizador no podrá hacerse responsable de la entrega.
                </li>
            </ul>
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
            <span id="ttx+AF8-regsuccess" style="color:green; font-style: italic;"> Gracias por registrarte en la carrera {{$titulo}} </span>
        </div>
        <p style="text-align: justify;">
            <span style="color:red !important" id="modal_message"> Te recordamos que no estas formalmente inscrito hasta realizar el pago, al dar clic en el botón de abajo te mostraremos la ventana de pago, donde podrás elegir pago con tarjeta y pago referenciado en tiendas OXXO, si pagas con tarjeta bancaria (débito o crédito) se te asignara un numero de corredor y quedaras formalmente inscrito. si eliges pago en OXXO, tendrás un lapso de 48 horas para realizar el pago, de lo contrario se borrara este pre-registro y tendrás que volver a hacerlo.
            </span>
        </p>
        <p style="text-align: justify;" id="modal_end_message">
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

    <!-- <a href="#" class="test" id="testButton" style="display:none;">↑</a>
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
    </script> -->
@stop