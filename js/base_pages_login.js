var BasePagesLogin = function() {
    var initValidationLogin = function(){
        jQuery('.js-validation-login').validate({
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
                'email': {
                    required: true,
                    minlength: 3
                },
                'password': {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                'email': {
                    required: 'Por favor ingrese su nombre de usuarios',
                    minlength: 'Su nombre de usuario debe tener al menos 3 caracteres'
                },
                'password': {
                    required: 'Por favor ingrese su contraseña',
                    minlength: 'Tu contraseña debe tener al menos 5 caracteres'
                }
            },
            submitHandler: function(form) {
                var tE  = '<div class="alert alert-info alert-dismissable">';
                    tE += '    <p><i class="fa fa-cog fa-spin"></i> Procesando, un momento por favor...</p>';
                    tE += '</div><hr>';
                $("#Message").html(tE);
                $.ajax({
                    url: `${path}/custom-login`,
                    type: 'POST',
                    data: $('.js-validation-login').serialize(),
                    success: function(data) {
                        $("#Message").html('');
                        if(data == "Ok"){
                            var tE  = '<div class="alert alert-success alert-dismissable">';
                                tE += '    <p><i class="fa fa-cog"></i> Correcto, redireccionando...</p>';
                                tE += '</div><hr>';
                            $("#Message").html(tE);
                            setTimeout('document.location.href=`${path}/dashboard`;', 3000);
                        } else {
                            var tE  = '<div class="alert alert-danger alert-dismissable">';
                                tE += '    <p><i class="fa fa-cog"></i> Error en la validación de usuario...</p>';
                                tE += '</div><hr>';
                            $("#Message").html(tE);
                            setTimeout('$("#Message").html("");', 2000);
                        }
                    }
                });
            }
        });
    };

    return {
        init: function () {
            initValidationLogin();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BasePagesLogin.init(); });