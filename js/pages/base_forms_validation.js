var BaseFormValidation = function() {
    var initValidationMaterial = function(){
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
                'val-suggestions2': {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                'val-suggestions2': 'Es necesario agregar un poco de información para procesar su petición. :)'
            },
            submitHandler: function(form) {
                $.ajax({
                    type : "POST",
                    url  : "add_historial.php",
                    data : $("#form-data").serialize(),
                    success: function(datos) {
                        alert("Se guardaron los datos");
                        document.location.reload();
                    }
                });
                return false;
            }
        });
    };

    return {
        init: function () {
            initValidationMaterial();
        }
    };
}();
jQuery(function(){ BaseFormValidation.init(); });