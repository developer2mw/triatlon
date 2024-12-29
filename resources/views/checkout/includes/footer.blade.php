<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js" integrity="sha512-37T7leoNS06R80c8Ulq7cdCDU5MNQBwlYoy1TX/WUsLFC2eYNqtKlV0QjH7r8JpG/S0GUMZwebnVFLPd6SU5yg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<!--<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>-->
<script type="text/javascript" src="https://pay.conekta.com/v1.0/js/conekta-checkout.min.js"></script>
<script type="text/javascript" src="https://cdn.conekta.io/js/latest/conekta.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.4/jquery-confirm.min.js" integrity="sha512-zP5W8791v1A6FToy+viyoyUUyjCzx+4K8XZCKzW28AnCoepPNIXecxh9mvGuy3Rt78OzEsU+VCvcObwAMvBAww==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>

{{-- <script src="{{asset('js/payform.js')}}"></script> --}}
<script src="{{asset('js/jquery.mask.js')}}"></script>

<script>
    let pptor = 80;
    const conektaPublicKey = "{{$conekta_public_key}}"
    const participanteId = "{{ $participant->id_participant; }}"; //Se almacena el ID del participante
    const config = {
      targetIFrame: "#conektaIframeContainer",
      publicKey: conektaPublicKey, // Llaves: https://developers.conekta.com/docs/como-obtener-tus-api-keys
      locale: 'es', // 'es' Español | 'en' Ingles
      paymentMethods: ["Cash", "Card"]
    };
    const callbacks = {
    // Evento que permitirá saber que el token se creado de forma satisfactoria, es importante que se consuman los datos que de el derivan.
      onCreateTokenSucceeded: function(token) {
        // console.log(token)
        $.ajaxSetup({ //Configura las opciones globales para las solicitudes AJAX usando jQuery
            headers: {
                //El objetivo de esto es proteger las solicitudes contra ataques CSRF (Cross-Site Request Forgery).
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') 
            }
        });

        $.ajax({
            url: `{{url('/cardPay/${participanteId}/${token.id}')}}`, //Se construye la url a base del id del participante y el token generado por conekta
            type: 'POST',
            dataType: 'JSON',
            beforeSend: function( xhr ) { //Acciones a realizar antes de proceder con la solicitud 
                $( "#send" ).hide();
                $("#preloader").css("display","block");
            }
        })
        .done(function(response) { //Esta función se ejecuta cuando la petición se ha realizado con exito
            if(response.status){
                //alert(response.message);
                if(response.pdf !== '')
                    download(response.pdf, response.name);
                
                $.confirm({
                    title: 'Pago Exitoso',
                    content: `Tu numero de corredor es: ${response.numero}`,
                    icon: "glyphicon glyphicon-heart",
                    type: 'green',
                    typeAnimated: true,
                    onContentReady: function() {
                        var self = this
                        self.setContentPrepend(`
                            <div style="text-align: center; margin-bottom:1em;">
                                <span id="ttx+AF8-regsuccess" style="color:var(--third-color); font-style: italic; font-size: 1.3em;"> ${response.carrera}</span>
                            </div>
                            <p style="text-align: justify; font-size: 1.2em;">
                                <span style="color:green !important" id="modal_message">
                                    ${response.message} 
                                </span>
                                <span style="color:var(--primary)">${response.name}!</span>
                            </p>
                        `)
                    },
                    buttons: {
                        Aceptar: {
                            text: 'Aceptar',
                            btnClass: 'btn-green',
                            action: function(){
                                // $(location).attr('href',"{{url('/')}}");
                            }
                        }
                    }
                });
                $(".jconfirm-content").css('font-size', '1.2em')
                $(".jconfirm-title-c").css('text-align', 'center')

            }
            else
            {
                $.confirm({
                    title: 'Error',
                    content: response.message,
                    icon: "glyphicon glyphicon-heart",
                    type: 'red',
                    typeAnimated: true,
                    buttons: {
                        Aceptar: {
                            text: 'Aceptar',
                            btnClass: 'btn-red',
                            action: function(){
                            }
                        }
                    }
                });
            }
        })
        .fail(function(error) {
            // alert('Ah ocurrido un error al tratar de realizar el pago'+error)
            $.confirm({
                title: 'Error',
                content: error.message,
                icon: "glyphicon glyphicon-heart",
                type: 'red',
                typeAnimated: true,
                buttons: {
                    Aceptar: {
                        text: 'Aceptar',
                        btnClass: 'btn-red',
                        action: function(){
                        }
                    }
                }
            });
        })
        .always(function() {
            $("#preloader").css("display","none");
        });


      },
		// Evento que permitirá saber que el token se creado de manera incorrecta, es importante que se consuman los datos que de él derivan y se hagan las correciones pertinentes.
      onCreateTokenError: function(error) {
        console.log(error)
      }
    };
    window.ConektaCheckoutComponents.Card({
      config,
	  callbacks,
      //Este componente "allowTokenization" permite personalizar el tokenizador, por lo que su valor siempre será TRUE
      allowTokenization: true, 
    })

        function download(url, name) {
            var a = document.createElement("a");
            a.style = "display: none";
            a.href = url;
            a.download = name + ".pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        

$("#sendoxxo").click(function(e){
    e.preventDefault();
    console.log(participanteId);

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: `{{url('/oxxoPay/${participanteId}')}}`,
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function( xhr ) {
            $( "#send" ).hide();
            $("#preloader").css("display","block");
        }
    })
    .done(function(response) {
        //console.log("success");
        if(response.status){
        //  $("#iframeorden").html(response.ficha);
        // $("#disparador").trigger("click");

        $.confirm({
        title: 'Referencia de pago',
        content: response.message,
        icon: "glyphicon glyphicon-heart",
        type: 'green',
        typeAnimated: true,
        buttons: {
            Aceptar: {
                text: 'Aceptar',
                btnClass: 'btn-green',
                action: function(){
                    $(location).attr('href',"{{url('/')}}");
                }
            },
            close: function () {
            }
        }
        });

        }else{

    $.confirm({
        title: 'Referencia de pago',
        content: response.message,
        icon: "glyphicon glyphicon-heart",
        type: 'red',
        typeAnimated: true,
        buttons: {
            Aceptar: {
                text: 'Aceptar',
                btnClass: 'btn-red',
                action: function(){

                }
            },
            close: function () {
            }
        }
    });
        }
    })
    .fail(function() {
    })
    .always(function() {
        $("#preloader").css("display","none");
    });
});
    $("#closemodal").click(function(e){
        e.preventDefault();
        // $(location).attr('href',"https://hbsports.com.mx/triatlon2022");
        $(location).attr('href',"{{url('/')}}");
    });

</script>
