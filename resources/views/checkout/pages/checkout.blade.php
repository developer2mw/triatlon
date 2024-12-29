@extends('checkout.layouts.default')
@section('content')
@php
    date_default_timezone_set("America/Mexico_City");
    $participante = $participant;

    if(isset($paid->paid_status) && $paid->paid_status === 2) {
        echo "<script>
            setTimeout(function() {
                window.location='".url('/')."';
            }, 1000);
        </script>";
    }

    if(isset($paid->id_paid_type) && $paid->id_paid_type === 5) {
        echo "<script> 
            alert('Ya se realiazo el pago correspondiente ');
            setTimeout(function() {
                window.location='".url('/')."';
            }, 1000);
        </script>";
    }

    if(isset($paid->reference) && $paid->reference !== "") {
        echo "<script> 
            alert('Ya se ha generado la referencia oxxo');  
            setTimeout(function() {
                window.location='".url('/')."';
            }, 1000); 
        </script>";
    }

    $paquete = $participante->categoria;
    $resume = "";
    $resumeDescuento = ""; 
    $comision="";
    $total = 0;
    $total = $precioTotal;
    $totalDescuento = 0;
    $totalDescuento = $total - 150;    

    $resume = "<div style='display:block;'><label><b style='color:blue;'>Categoria: ".$categoria."</b></label><label style='float:right;font-size:18px;font-weight:bold;' class = 'total'>$ ".$total."</label>";

    $resumeDescuento = "<label style='float:right;font-size:18px;font-weight:bold;' class = 'total'>$ ".$totalDescuento."</label>";

    $comision = "<div style='display:block;'><label><b style='color:blue;'></b></label><label style='float:right;' class = 'total'>".$pptor."</label></div>";
    $playera = "";    
@endphp
<title>{{$title}} - CHECKOUT</title>

<div id="preloader" class="fullscreen loaded" style="display: none;">
    <div class="logo"><img src="https://hbsports.com.mx/images/header/header-1/logo-hardbeat.png" ></div>
    <div class="lds-ring circular"><div></div><div></div><div></div><div></div><span style="color:white;position:absolute;bottom:0px;margin-top:10px;width:100%;text-align:center;">Espere...</span></div></div>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="contenedor">
                <div class="row">
                    <div class="col-md-12 text-center" style="padding-top:20px;padding-bottom: 50px;background:white;">
                        <img src="https://hbsports.com.mx/images/header/header-1/logo-hardbeat.png">
                    </div>
                </div>
                <div class="row" style="border: 1px solid #8080804d;margin-bottom:8px;">
                    <div class="col-md-12 text-center" style="padding-top:20px;background:white;">
                        <p style="color:green; font-size:1.4em;">Registro satisfactorio hbsports plataforma de registro</p>
                    </div>
                </div>
                <div class="row" style="margin-bottom:10px;border: 1px solid #8080804d;padding: 20px;">
                    <div class="col-md-12">
                        <div class="inf-paticipante">
                            <h4 style="padding-bottom:10px;">Datos del participante:</h4>
                            <ul>
                                <li><b>Nombre:</b> "{{ $participante->name }}"</li>
                                <li><b>Email:</b> "{{ $participante->email }}"</li>
                                <li><b>Telefono:</b> "{{ $participante->phone }}"</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-12" style="padding-top:30px;">
                        <h4 style="padding-bottom:10px;">Detalles del pago:</h4>
                        @php 
                        echo $resume 
                        @endphp
                    </div>
                    <br> 
                    @php 
						 echo $playera 
					@endphp
                    {{-- <strong style="color:red;">(Incluye un cobro de comision de $ {{ number_format($pptor, 2) }} al pagar en línea o por OXXO)</strong>                 --}}
                </div>
                <div class="row" style="padding-top:30px;padding-bottom:30px;border: 1px solid #8080804d;">
                    <div class="col-md-12 text-center" style="padding-bottom: 30px;">
                        <h4>Formas de pago</h4>
                        <p>Si deseas relizar tu pago en linea te presentamos las siguientes opciones</p>
                    </div>
                    <div class="col-md-6 borde">
                        <h4 style="padding-bottom:50px;text-align:center;font-size:17px;">Tarjeta de crédito</h4>
                        <div id="conektaIframeContainer" style="height: 500px;"></div>                        
                    </div>
                    
                    <div class="col-md-6 text-center d-flex oxx" style="flex-direction: column; align-items: center;">
                        <h4 style="text-align:center;font-size:17px;">Deposito en oxxo</h4>
                        <div style="padding: 2em 0;"> <img src="{{ asset('img/oxxopay.png') }}" class="imgoxxo"> </div>
                        <div> <button type="submit" class="btn btn-primary" style="background:#066b90;" id="sendoxxo">Obtener orden de pago</button> </div>
                    </div>
                    
                    <div class="modal-footer col-md-12 text-center" style="text-align: center">
                        <button type="button" id="sendMailPaymentForms" class="btn btn-dark btn-lg btn-block">Cerrar y pagar después</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style="display:none;" id="disparador"></button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body" id="iframeorden" style="padding:0px;"></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="closemodal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<script>
    document.getElementById('sendMailPaymentForms').addEventListener('click', function() {
        const participantData = {
            name: "{{ $participante->name }}",
            email: "{{ $participante->email }}",
            phone: "{{ $participante->phone }}",
            categoria: "{{ $categoria }}"            
        };
        $("#preloader").css("display","block");

        fetch('{{ route('sendPaymentEmail') }}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            body: JSON.stringify(participantData)
        })
        .then(response => response.json())
        .then(data => {
            $("#preloader").css('display', 'none');
            if (data.status) {
                $('#exampleModal').modal('show');
                document.getElementById('iframeorden').innerHTML = '<p style="padding:18px;font-size:18px;"><strong>Se ha enviado a tu correo electrónico el enlace con las diferentes formas de pago.</strong></p>';
                
            } else {
                alert('Error sending email');
            }
        })
        .catch(error => console.error('Error:', error));
    });

    document.getElementById('closemodal').addEventListener('click', function() {
        $('#exampleModal').modal('hide');
        window.location.href = '{{ url('/') }}';
    });
</script>

@stop
