var BaseTableDatatables = function() {
    var initDataTableFull = function() {
        
        // $('#hve14').click(function(event) {
            var triLedx = jQuery('.js-dataTable-normal').dataTable({
                columnDefs: [ { orderable: false, targets: [ 5 ] },{"targets": [ 1 ],"visible": false,"searchable": false} ],
                pageLength: 10,
                lengthMenu: [[5, 10, 15, 20], [5, 10, 15, 20]],
                "processing": true,
                "serverSide": true,
                "ajax": `${path}/dashboard/show`, 
                "language": {
                    "sProcessing":     "Procesando...",
                    "sLengthMenu":     "Mostrar _MENU_ Registros",
                    "sZeroRecords":    "No se encontraron resultados",
                    "sEmptyTable":     "Ningún dato disponible en esta tabla",
                    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix":    "",
                    "sSearch":         "",
                    "sUrl":            "",
                    "sInfoThousands":  ",",
                    "sLoadingRecords": "Cargando...",
                    "oPaginate": {
                        "sFirst":    "Primero",
                        "sLast":     "Último",
                        "sNext":     "Siguiente",
                        "sPrevious": "Anterior"
                    },
                    "oAria": {
                        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                    }
                },
                "columns": [
                    {"bSortable": true},
                    {"bSortable": true},
                    {"bSortable": true,"width": "300"},
                    {"bSortable": true},
                    {"bSortable": true},
                    {"bSortable": false},
                    {"bSortable": false},
                    {"bSortable": false,"width": "300"},
                ],
                "order": [[ 0, "DESC" ]],
                //"bStateSave": true,
                "fnDrawCallback": function () {
                    $('.dropdown-toggle').dropdown();
                    $("[data-toggle='tooltip']").tooltip();
                    $('td div.estatus').editable( `${path}/dashboard/change-status`, {
                        data   : " {'Pendiente':'Pendiente','En Espera':'En Espera','Confirmado':'Confirmado', 'No Participa':'No Participa'}",
                        type   : 'select',
                        submit : 'Actualizar',
                        indicator : '<i class="fa fa-cog fa-spin"></i>',
                        tooltip   : '¡Click para cambiar estatus!',
                        callback: function () {
                            loadDashboard(67, triLed, 'Led');
                            triLedx.api().ajax.reload();
                        }
                    });
                    $("td").on('click', 'a.invitarLRNewC', function(event) {
                        event.preventDefault();
                        var Nombre = $(this).attr('data-nombre');
                        var Email_ = $(this).attr('data-email');
                        $("iframe#F15").attr("src", "../hbsports/index.php?Nombre="+Nombre+"&Email_="+Email_+"&Template=Confirmacion");
                        $("#clickEvent").trigger('click');
                    });
                    $("td").on('click', 'a.invitarLROLD9', function(event) {
                        event.preventDefault();
                        var Nombre = $(this).attr('data-nombre');
                        var Email_ = $(this).attr('data-email');
                        $("iframe#F15").attr("src", "../hbsports/index.php?Nombre="+Nombre+"&Email_="+Email_+"&Template=InvitacionAtlD");
                        $("#clickEvent").trigger('click');
                    });
                    $("td").on('click', 'a.viewInfotriLed', function(event) {
                        event.preventDefault();
                        var idP = $(this).attr('data-id');
                        $.ajaxSetup({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            }
                        })
                        $.ajax({
                            url: `${path}/dashboard/data-participante`,
                            type: 'POST',
                            dataType: 'JSON',
                            data: {idP: idP},
                            success: function(response) {
                                var datos = eval(response);
                                $("form.js-validation-material #nParticipante").val(datos.Info.nom_);
                                $("form.js-validation-material #tParticipante").val(datos.Info.tel_);
                                $("form.js-validation-material #eParticipante").val(datos.Info.ema_);
                                $("form.js-validation-material #par_").val(datos.Info.par_);
                                $("form.js-validation-material #eClub").val(datos.Info.clu_);
                                $("form.js-validation-material #sParticipante").val(datos.Info.sex_).change();
                                $("form.js-validation-material #edParticipante").val(datos.Info.eda_);
                                $("form.js-validation-material #esParticipante").val(datos.Info.e_c_);
                                $("form.js-validation-material #dParticipante").val(datos.Info.dom_);
                                $("form.js-validation-material #peParticipante").val(datos.Info.p_e_);
                                $("form.js-validation-material #paParticipante").val(datos.Info.p_a_);
                                $("form.js-validation-material #nTitular").val(datos.Info.n_r_);
                                $("form.js-validation-material #tTitular").val(datos.Info.t_r_);
                                $("form.js-validation-material #idP").val(idP);
                                //insert tshirt sizes into select options
                                let tallasPlayera = JSON.parse(datos.Info.t_p_sizes)
                                $("#tPlayera").empty();
                                $("#tPlayera").append(tallasPlayera)
                                $("form.js-validation-material #tPlayera").val(datos.Info.t_p_);

                                $("#cPlayera").empty();
                                $("#cPlayera").append(
                                    '<option value="">Elija una opción</option>'+
                                    '<option value="B">Blanca</option>'
                                );
                                $("form.js-validation-material #cPlayera").val(datos.Info.c_p_);

                                let categories = JSON.parse(datos.Info.cate)
                                $("#nCategoria").empty();
                                $("#nCategoria").append(categories);
                                $("form.js-validation-material #nCategoria").val(datos.Info.cat);
                                
                                $("#nPaquete").empty();
                                $("#nPaquete").append(JSON.parse(datos.Info.paq_l));
                                $("form.js-validation-material #nPaquete").val(datos.Info.paq);
                                $("#nDistancia").empty();
                                $("#nDistancia").append(JSON.parse(datos.Info.dist_l));
                                $("form.js-validation-material #nDistancia").val(datos.Info.dist);
                                $("form.js-validation-material #nDistancia").prop("disabled", true);
                                $("#fpago").empty();
                                $("#fpago").append(JSON.parse(datos.Info.fpglist));
                                $("form.js-validation-material #fpago").val(datos.Info.fpg);
                                // console.log(datos.Info.dist);
                                // if (datos.Info.ncor > 0) {
                                //     $("button.btn.btn-sm.btn-primary").attr('disabled', 'disabled');
                                // }else {
                                //     $("button.btn.btn-sm.btn-primary").removeAttr('disabled');
                                // }

                                
                                if(datos.Info.ncor <=9){
                                    datos.Info.ncor = '00'+datos.Info.ncor;
                                }
                                else if(datos.Info.ncor <=99 ){
                                    datos.Info.ncor = '0'+datos.Info.ncor;
                                }

                                $("form.js-validation-material #nCorredor").val(datos.Info.ncor);

                                $("#btnAA").trigger('click');
                            }
                        });
                    });
                    $("td").on('click', 'a.sendMailEvent', function(event) {
                        event.preventDefault();
                        var idP = $(this).attr('data-id');
                        $.ajaxSetup({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            }
                        })
                        $.ajax({
                            url: `${path}/dashboard/data-participante`,
                            type: 'POST',
                            dataType: 'JSON',
                            data: {idP: idP},
                            success: function(response) {
                                var datos = response;
                                const email = datos.Info.ema_;
                                const nombre = datos.Info.nom_;
                                const ncorredor = datos.Info.ncor;

                                const categories = [                                    
                                    { id: 110, descripcion: "Juvenil(14-17 años)" },
                                    { id: 111, descripcion: "Libre(18-39 años)" },
                                    { id: 112, descripcion: "Máster(40-49 años) " },
                                    { id: 113, descripcion: "Veteranos (50+)" },
                                    { id: 114, descripcion: "Caminata (libre)" },
                                    { id: 115, descripcion: "Infantil 4-5 años" },
                                    { id: 116, descripcion: "Infantil 6-7 años" },
                                    { id: 117, descripcion: "Infantil 8-9 años" },
                                    { id: 118, descripcion: "Infantil 10-13 años" },
                                    // Agrega más categorías según sea necesario
                                ];

                                function getCategoryDesc(id) {
                                    const categoriaEncontrada = categories.find(categoria => categoria.id === id);
                                    return categoriaEncontrada ? categoriaEncontrada.descripcion : "Categoría no encontrada";
                                }     
                                const cate = datos.Info.cat                           
                                const cat = getCategoryDesc(+cate);

                                $("#preloader").css("display","block");

                                $.ajax({
                                    url: `${path}/dashboard/send-mail`,
                                    type: 'POST',
                                    dataType: 'JSON',
                                    data: {email: email, nombre: nombre, ncorredor: ncorredor, cat:cat},
                                    success: function(response) {
                                        if(response.status) {
                                            mostrarMensaje("¡El correo se envió correctamente!", "success");
                                        } else {
                                            mostrarMensaje("¡Error al enviar el correo!", "error");
                                        }
                                    },
                                    error: function(error) {
                                        mostrarMensaje("¡Error al enviar el correo!", "error");
                                    },
                                    complete: function() {
                                        $("#preloader").css('display', 'none');
                                    }
                                });

                                function mostrarMensaje(mensaje, tipo) {
                                    $("#mensaje").text(mensaje).addClass(tipo);
                                    $("#mensaje").get(0).scrollIntoView(); // Hacer scroll hacia el mensaje
                                    setTimeout(function() {
                                        $("#mensaje").text("").removeClass(tipo);
                                    }, 5000); // Desaparecer después de 3 segundos (3000 milisegundos)
                                }                                                               
                            }
                        });
                    });
                }
            }).yadcf([
                {column_number : 6, data: ["Pendiente", "En Espera", "Confirmado", "No Participa"], filter_default_label: "Estatus Participante"},
            ], 'header');
        // });
}

//END
let evento = $("#infantil").attr('data-evento');
let sexo = $("#infantil").attr('data-sexo');
let categoria = $("#infantil").attr('data-categoria');
let estatus = $("#infantil").attr('data-estatus');



    var bsDataTables = function() {
        var $DataTable = jQuery.fn.dataTable;

        // Set the defaults for DataTables init
        jQuery.extend( true, $DataTable.defaults, {
            dom:
                "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-6'i><'col-sm-6'p>>",
            renderer: 'bootstrap',
            oLanguage: {
                sLengthMenu: "_MENU_",
                sInfo: "Showing <strong>_START_</strong>-<strong>_END_</strong> of <strong>_TOTAL_</strong>",
                oPaginate: {
                    sPrevious: '<i class="fa fa-angle-left"></i>',
                    sNext: '<i class="fa fa-angle-right"></i>'
                }
            }
        });

        // Default class modification
        jQuery.extend($DataTable.ext.classes, {
            sWrapper: "dataTables_wrapper form-inline dt-bootstrap",
            sFilterInput: "form-control",
            sLengthSelect: "form-control"
        });

        // Bootstrap paging button renderer
        $DataTable.ext.renderer.pageButton.bootstrap = function (settings, host, idx, buttons, page, pages) {
            var api     = new $DataTable.Api(settings);
            var classes = settings.oClasses;
            var lang    = settings.oLanguage.oPaginate;
            var btnDisplay, btnClass;

            var attach = function (container, buttons) {
                var i, ien, node, button;
                var clickHandler = function (e) {
                    e.preventDefault();
                    if (!jQuery(e.currentTarget).hasClass('disabled')) {
                        api.page(e.data.action).draw(false);
                    }
                };

                for (i = 0, ien = buttons.length; i < ien; i++) {
                    button = buttons[i];

                    if (jQuery.isArray(button)) {
                        attach(container, button);
                    }
                    else {
                        btnDisplay = '';
                        btnClass = '';

                        switch (button) {
                            case 'ellipsis':
                                btnDisplay = '&hellip;';
                                btnClass = 'disabled';
                                break;

                            case 'first':
                                btnDisplay = lang.sFirst;
                                btnClass = button + (page > 0 ? '' : ' disabled');
                                break;

                            case 'previous':
                                btnDisplay = lang.sPrevious;
                                btnClass = button + (page > 0 ? '' : ' disabled');
                                break;

                            case 'next':
                                btnDisplay = lang.sNext;
                                btnClass = button + (page < pages - 1 ? '' : ' disabled');
                                break;

                            case 'last':
                                btnDisplay = lang.sLast;
                                btnClass = button + (page < pages - 1 ? '' : ' disabled');
                                break;

                            default:
                                btnDisplay = button + 1;
                                btnClass = page === button ?
                                        'active' : '';
                                break;
                        }

                        if (btnDisplay) {
                            node = jQuery('<li>', {
                                'class': classes.sPageButton + ' ' + btnClass,
                                'aria-controls': settings.sTableId,
                                'tabindex': settings.iTabIndex,
                                'id': idx === 0 && typeof button === 'string' ?
                                        settings.sTableId + '_' + button :
                                        null
                            })
                            .append(jQuery('<a>', {
                                    'href': '#'
                                })
                                .html(btnDisplay)
                            )
                            .appendTo(container);

                            settings.oApi._fnBindAction(
                                node, {action: button}, clickHandler
                            );
                        }
                    }
                }
            };

            attach(
                jQuery(host).empty().html('<ul class="pagination"/>').children('ul'),
                buttons
            );
        };

        // TableTools Bootstrap compatibility - Required TableTools 2.1+
        if ($DataTable.TableTools) {
            // Set the classes that TableTools uses to something suitable for Bootstrap
            jQuery.extend(true, $DataTable.TableTools.classes, {
                "container": "DTTT btn-group",
                "buttons": {
                    "normal": "btn btn-default",
                    "disabled": "disabled"
                },
                "collection": {
                    "container": "DTTT_dropdown dropdown-menu",
                    "buttons": {
                        "normal": "",
                        "disabled": "disabled"
                    }
                },
                "print": {
                    "info": "DTTT_print_info"
                },
                "select": {
                    "row": "active"
                }
            });

            // Have the collection use a bootstrap compatible drop down
            jQuery.extend(true, $DataTable.TableTools.DEFAULTS.oTags, {
                "collection": {
                    "container": "ul",
                    "button": "li",
                    "liner": "a"
                }
            });
        }
    };

    var initValidationMaterial = function() {
		
        let categoriaDos = $("#categoriaDos").val();
        let distanciaDos = $("#distanciaDos").val();
        if(categoriaDos == "" || distanciaDos == 0){
            return
        }

        jQuery('.js-validation-material').validate({
            errorClass: 'help-block text-right animated fadeInDown',
            errorElement: 'div',
            errorPlacement: function(error, e) {
                jQuery(e).parents('.form-group .form-material').append(error);
            },
            highlight: function(e) {
                jQuery(e).closest('.form-group').removeClass('has-error').addClass('has-error');
                jQuery(e).closest('.help-block').remove();
            },
            success: function(e) {
                jQuery(e).closest('.form-group').removeClass('has-error');
                jQuery(e).closest('.help-block').remove();
            },
            rules: {
                'nParticipante': {
                    required: true,
                },
                'eParticipante': {
                    required: true,
                    email: true
                },
                'tParticipante': {
                    required: true,
                },
                'edParticipante':{
                    required: true,
                },
                'tPlayera': {
                    required: true,
                },
                'sParticipante': {
                    required: true,
                },
                'esParticipante': {
                    required: true,
                },
                'dParticipante': {
                    required: true
                },
                'peParticipante': {
                    required: true,
                },
                'paParticipante': {
                    required: true,
                },
                'nTitular': {
                    required: true,
                },
                'tTitular': {
                    required: true,
                },
                'fpago': {
                    required: true,
                },
                'cPlayera': {
                    required: true,
                }
            },
            messages: {
                'nParticipante': {
                    required: 'Por favor ingrese el nombre del participante'
                },
                'eParticipante': {
                    required: 'Por favor, introduce una dirección de correo electrónico válida',
                    email : 'Por favor, introduce una dirección de correo electrónico válida'
                },
                'tParticipante': {
                    required: 'Por favor ingrese el número de télefono del participante'
                },
                'edParticipante':{
                    required: 'Ingrese la edad',
                },
                'tPlayera': {
                    required: 'Ingrese el número de talla',
                },
                'sParticipante': {
                    required: 'Por favor seleccione el sexo'
                },
                'esParticipante': {
                    required: 'Por favor seleccione el estado civil'
                },
                'dParticipante': {
                    required: 'Por favor indique cual es el domicilio del participante'
                },
                'peParticipante': {
                    required: 'Por favor indique cual o cuales son las emfermedades que padece el participante'
                },
                'paParticipante': {
                    required: 'Por favor indique cual o cuales son las alergías que padece el participante'
                },
                'nTitular': {
                    required: 'Por favor indique el nombre de la persona para comunicar en caso de accidente del participante'
                },
                'tTitular': {
                    required: 'Por favor indique el número de télefono de la persona para comunicar en caso de accidente del participante'
                },
                'fpago': {
                    required: 'Por favor indique la forma de pago'
                },
                'cPlayera': {
                    required: 'Por favor seleccione una playera'
                }
            },
            submitHandler: function(form) {
                $("#msjModalBoxEvent").html('<div class="block-header bg-info"><h3 class="block-title"  style="color:#FFF;">Procesando Información...</h3></div>');
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                })
                $.ajax({
                    url: `${path}/dashboard/update`,
                    type: 'POST',
                    data: $('.js-validation-material').serialize(),
                    success: function(response) {
                        if (response == 'Error') {
                            alert('¡¡La talla y color de playera seleccionado por el participante esta agotado!!');

                        }
                        else if(response == 'Error_categoria') {
                            alert('¡¡Ingrese la segunda categoria !!')
                        }
                        else if(response == 'Error_distancia') {
                            alert('¡¡Ingrese la segunda distancia!!')
                        }
                        else {
                        //    console.log(response);
                           $("#msjModalBoxEvent").html('<div class="block-header bg-success"><h3 class="block-title" style="color:#FFF;">Datos actualizados correctamente. :)</h3></div>');
                            setTimeout(function(){document.location.reload();},2000)  
                        }
                    }
                });
                return false;
            },
        });

        jQuery("body").on('click', '#btnReset', function(e) {
            $("#formCOmpleto").resetear();
            jQuery(".block-content").find('.form-group').removeClass('has-error');
            jQuery(".form-material").find('.help-block').remove();
            $('#nCorre').hide();
        });

        jQuery("#evento").change(function(e) {
            //SelectNow
            var eventoID = $(this).val();
            $.ajax({
                url: 'server/datasParticipante.php?action=SelectNow',
                type: 'POST',
                data: {evento:eventoID},
                success: function(response) {
                    $('.categoria')
                        .find('option')
                        .remove()
                    ;
                    $.each(response, function(key, value) {
                         $('.categoria')
                             .append($("<option></option>")
                             .attr("value",value)
                             .text(value));
                    });
                }
            });
            if(eventoID == 5){
                $('#tutor').show(1000);
                $('#familiares').show(1000);
            }
            else{ $('#tutor').hide(); $('#familiares').hide();}
        });
        jQuery("body").on('click', '.viewInfoAmas', function(e) {
           $('#nCorre').show();
        });

        //var tableFV = jQuery('#dataTable-familiaresView').DataTable();

        var tableF = jQuery('#js-dataTable-familiares').DataTable();
        $('#addRow').on( 'click', function () {
            var name = $('#nFamiliar').val();
            var fami = $('#familiarF').val();
            var cate = $('#categoriaF').val();
            var edad = $('#edFamiliar').val();
            var sexo = $('#sParticipanteF').val();
            var talla = $('#tPlayeraF').val();
            var enfe = $('#peParticipanteF').val();
            var aler = $('#paParticipanteF').val();
            if (name != '' && fami != '' && cate != '' && edad != '' && sexo != '' && talla != ''  ){
                tableF.row.add( [
                     name ,
                     cate ,
                     edad ,
                     talla ,
                     sexo,
                     enfe ,
                     aler ,
                     fami ,
                    '<a href="#"><i class="fa fa-trash-o fa-2x"></i></a>'
                ] ).draw( false );
                $('#familiares :input').val('');
                $('#familiares :select').val('').change();
            }

        } );
        $('#js-dataTable-familiares tbody').on( 'click', '.fa-trash-o', function () {
            tableF
                .row( $(this).parents('tr') )
                .remove()
                .draw( false);
        } );

        jQuery("body").on('click', '#addParticipante', function(e) {
            //$("#formCOmpleto").resetear();
        });
    };

    jQuery.fn.resetear = function () {
      $(this).each (function() { this.reset(); });
    }


    return {
        init: function() {
            bsDataTables();
            initDataTableFull();
            initValidationMaterial();
        }
    };
}();

function obtFamilia(){
    var hijos = new Array();
    var enfermedad = "";
    $("#js-dataTable-familiares tbody tr").each(function (index)
    {
        var temp = new Array();
        $(this).children("td").each(function (index2)
        {
            if(index2 != 8){
                if(index2 == 5){
                    enfermedad = $(this).text();
                }
                else if(index2 == 6){
                    temp.push(enfermedad +'-'+$(this).text());
                }
                else{
                    temp.push($(this).text());
                }

            }
        })
        enfermedad  = "";
        hijos.push(temp);
    });
    //console.log("-----"+hijos);
    return hijos;
}

function reloadDatas(object, event) {
    $(object+" #cp").hide('slow');
    $(object+" #ce").hide('slow');
    $(object+" #cc").hide('slow');
    $(object+" #cn").hide('slow');

    $(object+" #cp").empty();
    $(object+" #ce").empty();
    $(object+" #cc").empty();
    $(object+" #cn").empty();


    $(object+" #pbch").hide('slow');
    $(object+" #pbmh").hide('slow');
    $(object+" #pbgh").hide('slow');
    $(object+" #pbcm").hide('slow');
    $(object+" #pbmm").hide('slow');
    $(object+" #pbgm").hide('slow');

    $(object+" #pnch").hide('slow');
    $(object+" #pnmh").hide('slow');
    $(object+" #pngh").hide('slow');
    $(object+" #pncm").hide('slow');
    $(object+" #pnmm").hide('slow');
    $(object+" #pngm").hide('slow');

    $(object+" #pbch").empty();
    $(object+" #pbmh").empty();
    $(object+" #pbgh").empty();
    $(object+" #pbcm").empty();
    $(object+" #pbmm").empty();
    $(object+" #pbgm").empty();

    $(object+" #pnch").empty();
    $(object+" #pnmh").empty();
    $(object+" #pngh").empty();
    $(object+" #pncm").empty();
    $(object+" #pnmm").empty();
    $(object+" #pngm").empty();

    $(object+" #catJ").hide('slow');
    $(object+" #catL").hide('slow');
    $(object+" #catM").hide('slow');
    $(object+" #catV").hide('slow');
    $(object+" #catA").hide('slow');

    $(object+" #catJ").empty();
    $(object+" #catL").empty();
    $(object+" #catM").empty();
    $(object+" #catV").empty();
    $(object+" #catA").empty();

    $(object+" #tb").empty();
    $(object+" #tn").empty();
    $(object+" #tb").append('<i class="fa fa-cog fa-spin"></i>');
    $(object+" #tn").append('<i class="fa fa-cog fa-spin"></i>');
    $.post('editable_ajax.php?action=reload&event='+event)
    .done(function(response){
        var data = JSON.parse(response);
        console.log(data);
        // General
            $(object+" #cp").append(data[0]);
            $(object+" #ce").append(data[1]);
            $(object+" #cc").append(data[2]);
            $(object+" #cn").append(data[3]);
        //.General

        // Playeras
            $(object+" #pbch").append(data[4]);
            $(object+" #pbmh").append(data[5]);
            $(object+" #pbgh").append(data[6]);
            $(object+" #pbcm").append(data[7]);
            $(object+" #pbmm").append(data[8]);
            $(object+" #pbgm").append(data[9]);

            $(object+" #pnch").append(data[11]);
            $(object+" #pnmh").append(data[12]);
            $(object+" #pngh").append(data[13]);
            $(object+" #pncm").append(data[14]);
            $(object+" #pnmm").append(data[15]);
            $(object+" #pngm").append(data[16]);
        //.Playeras

        // Categorias
            $(object+" #catJ").append(data[18]);
            $(object+" #catL").append(data[19]);
            $(object+" #catM").append(data[20]);
            $(object+" #catV").append(data[21]);
            $(object+" #catA").append(data[22]);
        // Categorias
    })
    .fail(function(){
        $(object+" #cp").append('--');
        $(object+" #ce").append('--');
        $(object+" #cc").append('--');
        $(object+" #cn").append('--');

        $(object+" #pbch").append('--');
        $(object+" #pbmh").append('--');
        $(object+" #pbgh").append('--');
        $(object+" #pnch").append('--');
        $(object+" #pnmh").append('--');
        $(object+" #pngh").append('--');

        $(object+" #pbcm").append('--');
        $(object+" #pbmm").append('--');
        $(object+" #pbgm").append('--');
        $(object+" #pncm").append('--');
        $(object+" #pnmm").append('--');
        $(object+" #pngm").append('--');

        $(object+" #catJ").append('--');
        $(object+" #catL").append('--');
        $(object+" #catM").append('--');
        $(object+" #catV").append('--');
        $(object+" #catA").append('--');
    })
    .always(function(response){
        var data = JSON.parse(response);
        $(object+" #tb").empty();
        $(object+" #tn").empty();
        $(object+" #tb").append(data[10]);
        $(object+" #tn").append(data[17]);

        $(object+" #cp").show('fast');
        $(object+" #ce").show('fast');
        $(object+" #cc").show('fast');
        $(object+" #cn").show('fast');

        $(object+" #pbch").show('fast');
        $(object+" #pbmh").show('fast');
        $(object+" #pbgh").show('fast');
        $(object+" #pnch").show('fast');
        $(object+" #pnmh").show('fast');
        $(object+" #pngh").show('fast');

        $(object+" #pbcm").show('fast');
        $(object+" #pbmm").show('fast');
        $(object+" #pbgm").show('fast');
        $(object+" #pncm").show('fast');
        $(object+" #pnmm").show('fast');
        $(object+" #pngm").show('fast');

        $(object+" #catJ").show('fast');
        $(object+" #catL").show('fast');
        $(object+" #catM").show('fast');
        $(object+" #catV").show('fast');
        $(object+" #catA").show('fast');
    });
}

// Initialize when page loads
jQuery(function(){ BaseTableDatatables.init(); });
