<script src="{{asset('js/handlebars.js')}}"></script>
<script src="{{asset('js/jquery-1.11.3.min.js')}}"></script>
<script>window.jQuery || document.write('<script src="{{asset("js/jquery-1.11.3.min.js")}}"><\/script>')</script>
<script src="{{asset('js/plugins.js')}}"></script>
<script src="{{asset('js/main.js')}}"></script>
<script type="text/javascript" src="{{asset('js/jquery.nanoscroller.js')}}"></script>
<!-- <script src="{{asset("js/select2.js")}}"></script>  -->
<script src="{{asset('js/inputmask.min.js')}}"></script>
<script src="{{asset('js/jquery.inputmask.min.js')}}"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.js"></script>
<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script> -->
<script>    
    var eventCategories = {!! $eventCategories !!}
</script>
<script>let title = `{{$titulo}}`; const path = `{{route('availableSizes')}}`; </script>
<script src="{{asset('js/main-home.js')}}"></script>
<script src="{{asset('js/jquery.magnific-popup.js')}}"></script>
<script type="text/javascript" src="{{asset('js/FWDRL.js')}}"></script>

<script>
    
    $(document).ready(function() {

        // $("#send").css('display','none')
        // $('.popup-modal').trigger('click')
        // document.getElementById('ttx+AF8-regsuccess').textContent = 'Muchas gracias por su participación en la carrera del próximo 27 de octubre. Ha concluido el periódo de inscripción.'
                
        // const soldOutImage = document.createElement('img')
        // soldOutImage.src = '{{asset("img/sold_out.png")}}'
        // soldOutImage.alt = 'sold out'
        // soldOutImage.style.width = "30em"        
        // $("#modal_message").html('')
        // $("#modal_message").append(soldOutImage)
        // $("#modal_end_message").addClass("styled-message");
        // $("#modal_end_message").text(`¡Los esperamos!`)
        // $("#url_participante").val('')
        // load modal dialog when finished race
        const currentDate = new Date();
        const finished_date = "{{$opciones_evento['finished_date']}}"

        const finishedRace = new Date(finished_date);

        if(currentDate.getTime() >= finishedRace.getTime()) {
            $("#send").css('display','none')
            $('.popup-modal').trigger('click')
            document.getElementById('ttx+AF8-regsuccess').textContent = 'Este evento a finalizado'
            $("#modal_message").text('')
            $("#modal_end_message").text(`Te invitamos a que revises los resultados de la carrera, seleccionando la opción de resultados.`)
            $("#url_participante").val('')
        } 
        // event when modal is close

        $("#registro-form").submit(function(e){
            e.preventDefault(); //  Evita que se ejecute la acción que tiene por defecto al mandar el formulario
            $( "#send" ).hide(); // Oculta el elemento que contenga como id #send
            $("#preloader").css("display","block"); //Muestra una animación 
        // $.ajaxSetup({
        //     headers: {
        //         'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        //     }
        // })
        var form = $("#registro-form").serialize(); // Con la serialización los datos del formulario se convierten en una cadena la cual puede ser mandada por medio de AJAX
            $.ajax({
                url: "{{route('save')}}",
                type: 'POST',
                data: form,
                success: function(data){ // esto sucede cuando la peticción es ejecutada correctamente
                    // console.log(JSON.parse(data));
                    let dataResponse = data // Se parsea la respuesta recibida
                    changeStatusCodeIfDiscountExist() //Método para cambiar el status del código una vez que el descuento exista
                    $("#response").html('<div class="'+dataResponse.clase+'">'+dataResponse.error+'</div>');
                    if(dataResponse.error_code == 'OK'){
                        $('#registro-form')[0].reset();
                        $('#test-modal').find('#ncorredor').html(dataResponse.corredor);//Se establece el contenido de un elemento con el id ncorredor
                        $('#test-modal').find('#nombreCorredor').html(dataResponse.nombreCorredor);
                        $('.popup-modal').trigger('click'); //Abre un modal con información, indicando que ya está su registro
                        //download pdf file
                        if(Object.entries(dataResponse.pdf).length > 0) { //Descarga de un pdf
                            download(dataResponse.pdf, dataResponse.nameCorredor);
                            $("#modal_message").css("color", "gray")
                            $("#modal_message").text(`¡Felicidades, haz quedado registrado en el evento ${dataResponse.nameCorredor}`)
                            $("#modal_end_message").text(`Tu numero de corredor es ${dataResponse.corredor}`)
                        }
                        else {//En el caso de que falle la descarga del pdf se guardar un identificador de participante y se 
                            //save participant id
                            $("#id_participante").val(dataResponse.idparticipante)
                            //Get url
                            const url = `{{url('/checkout/${dataResponse.idparticipante}')}}`
                            //save url
                            $("#url_participante").val(url)
                        }
                    }
                },
                error: function(error) { // En el caso de no ser ejecutada correctamente se ejecuta lo siguiente

                    alert('Ah ocurrido un error, vuelva a intentarlo más tarde')

                    if(error.responseJSON.errors !== undefined) {
                        const errorsList = error.responseJSON.errors

                        for(const fieldName in errorsList) {
                            const errorMessage = errorsList[fieldName]
                            
                            const errorMessageSpan = document.createElement('span')
                            errorMessageSpan.textContent = errorMessage

                            $(".errors").html(errorMessageSpan)
                        }
                    }

                    $("#send").css('display', 'block');
                },
                complete: function() {
                    $("#preloader").css('display', 'none');
                }
            });

            return false;
        });

        function download(url, name) {
            var a = document.createElement("a");
            a.style = "display: none";
            a.href = url;
            a.download = name + ".pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    })
    function changeStatusCodeIfDiscountExist() {
        let code = $("#idDiscountCode").val() 
        if(code !== null || code !== '') {
            const url = "{{$url}}"
            $.ajax({
                url: `${url}update/${code}`,
                type: 'PUT',
                dataType: 'json',
                success: function(response) {
                    console.log("codigo actualizado");
                },
                error: function(error) {
                    console.log("error al actualizar"+ error);
                }
            })
        }
    }
    //validate if code is available
    function validateCode() {        
        const codigo = $("#codigo").val()
        const url = "{{$url}}"
        if(codigo.length > 5) {             
            $("#send").prop('disabled', true);
            $("#send").css('background', "#ccc");         
            $.ajax({
                url: `${url}${codigo}`,
                type: "GET",
                dataType: "json",
                success: function(response) {
                    if(Object.entries(response).length > 0) {
                        $("#send").removeAttr('disabled');
                        $("#send").css('background', "#604282");
                        $("#code_message").text("Código válido")
                        $("#code_message").removeClass("bg-danger")
                        $("#code_message").addClass("bg-success")
                        //Insert id value into input
                        sendRequestCodePorcent(response.id)
                    } else {                        
                        $("#send").prop('disabled', true);
                        $("#send").css('background', "#ccc");
                        $("#code_message").text("Error, código no válido")
                        $("#code_message").removeClass("bg-success")
                        $("#code_message").addClass("bg-danger")
                    }
                    setTimeout(function() {
                        $("#code_message").removeClass("bg-danger")
                        $("#code_message").removeClass("bg-success")
                        $("#code_message").text("")
                    },2000)
                },
                error: function(error) {
                    console.log(error);
                }
            })
        }
    }
    function sendRequestCodePorcent(idParticipantCode) {
        const url = "{{$url}}"
        $.ajax({
            url: `${url}valid/${idParticipantCode}`,
            type: "GET",
            dataType: "JSON",
            success: function(response) {
                console.log(response);
                $("#idParticipantCode").val(response[0].porcent)
                $("#idDiscountCode").val(idParticipantCode)
            }
        })
    }

    //validate mobile or desktop
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        const codigoEvent = document.getElementById('codigo')

        // codigoEvent.addEventListener('pointerup', (e) => {
        //     e.preventDefault()
        // })
        $(document).on('keyup input', '#codigo', function() {
                validateCode()  
        })
    } else {
        // validate if code is available
        $("#codigo").keyup(function (e) { 
            e.preventDefault();
            validateCode()
        });
    }

    function email () {
        var email = $("#email").val();
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

        if (regex.test($('#email').val().trim())) {
            let token = $('meta[name="csrf-token"]').attr('content');
            
            $.ajax({
                url: "{{route('checkMail')}}",
                type: 'POST',
                dataType: 'json',
                data: {'email': email, '_token': token},
                success: function(data){
                    if(data){
                        if (data.success) {
                            $("#name").val(data.nombre);
                            $("#phone").val(data.telefono);
                            $("#edad").val(data.edad);
                            // $("#est-civil").select2('val',data.est_civil);
                            $("#domicilio").val(data.domicilio);
                            $("#e_nombre").val(data.e_nombre);
                            $("#e_telefono").val(data.e_telefono);
                            // $("#sexo").val(data.sexo);
                        } else  {
                            $("#response").html('<div class="has-error">Este correo ya se encuentra registrado<br>para este evento (utilice un correo diferente).</div>');
                            $("#email").val("");
                            setTimeout(function(){
                                $("#response").html("");
                            }, 9000);
                        }
                    }
                }
            });
        }
    }
</script>
<script type="text/javascript">
    FWDRLUtils.onReady(function(){
        new FWDRL({
        mainFolderPath:"{{asset('img/content')}}",
        skinPath:"minimal_skin_dark",
        facebookAppId:"871399879641639",
        rightClickContextMenu:"default",
        buttonsAlignment: "in",
        useDeepLinking:"yes",
        useAsModal:"no",
        slideShowAutoPlay:"no",
        addKeyboardSupport:"yes",
        showCloseButton:"yes",
        showFacebookButton:"yes",
        showZoomButton:"yes",
        showSlideShowButton:"yes",
        showSlideShowAnimation:"yes",
        showNextAndPrevButtons:"yes",
        showNextAndPrevButtonsOnMobile:"yes",
        buttonsHideDelay:3,
        slideShowDelay:4,
        defaultItemWidth:800,
        defaultItemHeight:500,
        itemOffsetHeight:50,
        spaceBetweenButtons:1,
        buttonsOffsetIn:2,
        buttonsOffsetOut:5,
        itemBorderSize:0,
        itemBorderRadius:0,
        backgroundOpacity:.8,
        itemBoxShadow:"none",
        itemBackgroundColor:"#333333",
        itemBorderColor:"transparent",
        backgroundColor:"#000000",
        showThumbnails:"yes",
        showThumbnailsHideOrShowButton:"no",
        showThumbnailsByDefault:"yes",
        showThumbnailsOverlay:"yes",
        showThumbnailsSmallIcon:"no",
        thumbnailsHoverEffect:"scale",
        thumbnailsImageHeight:80,
        thumbnailsBorderSize:0,
        thumbnailsBorderRadius:0,
        spaceBetweenThumbnailsAndItem:0,
        thumbnailsOffsetBottom:0,
        spaceBetweenThumbnails:2,
        thumbnailsOverlayOpacity:.85,
        thumbnailsOverlayColor:"#FFFFFF",
        thumbnailsBorderNormalColor:"#FFFFFF",
        thumbnailsBorderSelectedColor:"#FFFFFF",
        showDescriptionButton:"yes",
        showDescriptionByDefault:"yes",
        descriptionWindowAnimationType:"opacity",
        descriptionWindowPosition:"top",
        descriptionWindowBackgroundColor:"#FFFFFF",
        descriptionWindowBackgroundOpacity:.95,
        useVideo:"yes",
        useAudio:"yes",
        videoShowFullScreenButton:"yes",
        addVideoKeyboardSupport:"yes",
        nextVideoOrAudioAutoPlay:"yes",
        videoAutoPlay:"no",
        videoLoop:"no",
        audioAutoPlay:"no",
        audioLoop:"no",
        videoControllerHideDelay:3,
        videoControllerHeight:41,
        audioControllerHeight:44,
        startSpaceBetweenButtons:7,
        vdSpaceBetweenButtons:9,
        mainScrubberOffestTop:14,
        scrubbersOffsetWidth:1,
        audioScrubbersOffestTotalWidth:4,
        timeOffsetLeftWidth:5,
        timeOffsetRightWidth:3,
        volumeScrubberWidth:80,
        volumeScrubberOffsetRightWidth:0,
        videoControllerBackgroundColor:"#FFFFFF",
        videoPosterBackgroundColor:"#0099FF",
        audioControllerBackgroundColor:"#FFFFFF",
        timeColor:"#000000"
        });
    });
</script>