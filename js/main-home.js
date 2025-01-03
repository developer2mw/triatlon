$(document).ready(function () {
    $(".various").fancybox({
        // El plugin "fancybox" se utiliza para mostrar ventanas emergentes o modales en un sitio web con ciertas configuraciones
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: "70%",
        height: "70%",
        autoSize: false,
        closeClick: false,
        openEffect: "none",
        closeEffect: "none",
    });

    $("#phone").inputmask("(999) 999 99 99", {
        onincomplete: function () {
            // Manejador de eventos que se ejecuta cuando no se completa la entrada de datos según la mascara definida
            alert("Debe de escribir un número de teléfono válido");
            $("#phone").val("");
        },
    });

    $("#e_telefono").inputmask("(999) 999 99 99", {
        onincomplete: function () {
            alert("Debe de escribir un número de teléfono válido");
            $("#e_telefono").val("");
        },
    });

    $("#phonefather").inputmask("(999) 999 99 99", {
        onincomplete: function () {
            alert("Debe de escribir un número de teléfono válido");
            $("#phonefather").val("");
        },
    });

    $("#phonejobfather").inputmask("(999) 999 99 99", {
        onincomplete: function () {
            alert("Debe de escribir un número de teléfono válido");
            $("#phonejobfather").val("");
        },
    });

    $("#phonecelfather").inputmask("(999) 999 99 99", {
        onincomplete: function () {
            alert("Debe de escribir un número de teléfono válido");
            $("#phonecelfather").val("");
        },
    });

    $("#fphone").inputmask("(999) 999 99 99", {
        onincomplete: function () {
            alert("Debe de escribir un número de teléfono válido");
            $("#fphone").val("");
        },
    });

    $("#nacimiento").inputmask("99-99-9999", {
        onincomplete: function () {
            alert("Debe de escribir una fecha válida DD-MM-YYYY");
            $("#nacimiento").val("");
        },
    });
    // if(!mobileCheck) {
    //     alert("mobile");
    // } else {
    //     alert("nomobile");
    // }
    // limit participant age
    $("#edad").change(function () {
        //Se valida que la edad se encuentre dentro del rango de fechas de 3 a 120 años
        const edadLimite = 3;
        if ($(this).val() < edadLimite) {
            $(this).val(0);
            $("#message-age").text(
                `Debe ser mayor de ${edadLimite} años para acceder a esta competencia.`
            );
            setTimeout(function () {
                $("#message-age").text("");
            }, 1500);
        } else if ($(this).val() > 120) {
            $(this).val(0);
            $("#message-age").text("La edad ingresada no es válida");
            setTimeout(function () {
                $("#message-age").text("");
            }, 1500);
        }
    });
});

WebFontConfig = {
    //Se carga la fuente 'Roboto+Condensed'
    google: {
        families: ["Roboto+Condensed:400,700:latin"],
    },
};

(function () {
    // Se encarga de insertar el script de carga de WebFont en el documento HTML
    var wf = document.createElement("script");
    wf.src =
        ("https:" == document.location.protocol ? "https" : "https") +
        "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    wf.type = "text/javascript";
    wf.async = "true";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wf, s);
})();

const CATEGORIAS = eventCategories;

// const CATEGORIAS = [
//     { id: "6", text: "INFANTIL 8 Y MENORES" },
//     { id: "7", text: "INFANTIL (9-12 AÑOS)" },
//     { id: "8", text: "INFANTIL (13-15 AÑOS)" },
//     { id: "9", text: "JUVENIL (16 A 17 AÑOS)" },
//     { id: "10", text: "LIBRES (18 Y MAS)" },
//     { id: "11", text: "MASTER 40 Y MAS" },
//     { id: "12", text: "MI PRIMER ACUATLON" },
// ]

// when select option enabled package options
$(document).on("change", "#sexo", function (e) {
    e.preventDefault();
    //reset all select values
    $("#paquete").text("Paquete"); //Cambio en el texto
    $("#paquete").val(""); //Cambio en el valor
    $("#categoria").text("Categoria");
    $("#categoria").val("");
    $("#talla").text("Talla");
    $("#talla").val("");

    const sexo = $("#sexo").val(); //Se obtiene el valor alojado en el campo sexo

    if (sexo !== null || sexo !== "")
        chargeSelectCat(CATEGORIAS, "categoria")
});
// when select package options enable categories
$(document).on("change", "#paquete", function (e) {
    e.preventDefault();
    const paquete = $("#paquete").val();
    const sexo = $("#sexo").val();
    // reset after select values
    $("#categoria").text("Categoria");
    $("#categoria").val("");
    $("#talla").text("Talla");
    $("#talla").val("");

    if ((paquete !== null || paquete !== "") && (sexo !== null || sexo !== ""))
        chargeSelectCat(CATEGORIAS[paquete], "categoria");
});

$(document).on("change", "#categoria", function (e) {
    e.preventDefault();

    const categoria = $("#categoria").val();
    const sexo = $("#sexo").val();
    $("#talla").text("Talla");
    $("#talla").val("");
    console.log(categoria);
    

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    })
    $.ajax({
        url: `${path}`,
        type: 'POST',
        data: {
            gender: categoria >= 124 ? sexo : "I"
        },
        success: function(response) {
            chargeSelect(response, "talla")
        }
    });
});

function chargeSelect(options, select) {
    var auxCat =
        "<option value='' disabled selected>Seleccione una opción</option>";

    $.each(options, function (ind, elem) {
        //función each de jQuery para recorrer las opciones del elemento options "ind es del indice del elemento"
        auxCat +=
            "<option value='" +
            options[ind].id +
            "' >" +
            options[ind].text +
            "</option>";
    });
    $("#" + select).html(auxCat);
}

function chargeSelectCat(options, select) {
    var auxCat =
        "<option value='' disabled selected>Seleccione una categoria</option>";

    $.each(options, function (ind, elem) {
        //función each de jQuery para recorrer las opciones del elemento options "ind es del indice del elemento"
        auxCat +=
            "<option value='" +
            options[ind].id_category +
            "' >" +
            options[ind].category +
            "</option>";
    });
    $("#" + select).html(auxCat);
}

$(function () {
    $("#tab-res a").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });

    // $("select").select2();

    $(".nano").nanoScroller({
        alwaysVisible: true,
    });

    $(".nano-pane").css("display", "block");

    $("#accordion").accordion({
        collapsible: true,
        active: false,
    });

    $("#homeLink").click(function (e) {
        e.preventDefault(); //Previene el comportamiento predeterminado de un enlace o botón al hacer clic -> ej. si tenia que redirigir hacia otro lado lo cancela
        var fuente = $("#home-plantilla").html();
        var plantilla = Handlebars.compile(fuente);
        var html = plantilla(fuente);
        $(".nano-content").html(html);
        $(".title").html("");
        $(".footer").find(".title").html(`<span>${title}</span>`);
        $(".triatlon").toggleClass("open");
        $(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            tLoading: "Loading image #%curr%...",
            mainClass: "mfp-img-mobile",
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1],
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr("title");
                },
            },
        });
    });

    $("#categoriaLink").click(function (e) {
        e.preventDefault();
        var fuente = $("#categoria-plantilla").html();
        var plantilla = Handlebars.compile(fuente);
        var html = plantilla(fuente);
        $(".nano-content").html(html);
        $(".title").html("<span>CATEGORÍAS</span>");
        $(".triatlon").toggleClass("open");

        $(".nano").nanoScroller({
            alwaysVisible: true,
        });
    });

    $("#eventoLink").click(function (e) {
        e.preventDefault();
        var fuente = $("#reglamento-plantilla").html();
        var plantilla = Handlebars.compile(fuente);
        var html = plantilla(fuente);
        $(".nano-content").html(html);
        $(".title").html("<span>REGLAMENTO</span>");
        $(".triatlon").toggleClass("open");
        $(".nano").nanoScroller({
            alwaysVisible: true,
        });
    });

    $("#premiacionLink").click(function (e) {
        e.preventDefault();
        var fuente = $("#premiacion-plantilla").html();
        var plantilla = Handlebars.compile(fuente);
        var html = plantilla(fuente);
        $(".nano-content").html(html);
        $(".title").html("<span>PREMIACIÓN</span>");
        $(".triatlon").toggleClass("open");
        $(".nano").nanoScroller({
            alwaysVisible: true,
        });
    });

    $("#resultados").click(function (e) {
        e.preventDefault();
        var fuente = $("#resultados-plantilla").html();
        var plantilla = Handlebars.compile(fuente);
        var html = plantilla(fuente);
        $(".nano-content").html(html);
        $(".title").html("<span>RESULTADOS</span>");
        $(".triatlon").toggleClass("open");
        $(".nano").nanoScroller({
            alwaysVisible: true,
        });
    });

    $("#gallery-link").click(function (e) {
        $(this).next().magnificPopup("open"); //Se hace una referencia para que se abra un modal y se pueda mostrar la imagen
    });

    $("#gallery-link1").click(function (e) {
        $(this).next().magnificPopup("open");
    });

    $("#gallery-link2").click(function (e) {
        $(this).next().magnificPopup("open");
    });

    $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1],
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr("title");
            },
        },
    });

    $(".image-popup-fit-width").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        image: {
            verticalFit: false,
        },
    });

    $(".image-popup-fit-width2").magnificPopup({
        // Se encarga de pintar la imagen tomando en cuenta el href que contiene la clase "image-popup-fit-width2"
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        },
        fixedContentPos: false,
    });

    $(".popup-with-form").magnificPopup({
        type: "inline",
        preloader: false,
        focus: "#name",
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 900) {
                    this.st.focus = false;
                } else {
                    this.st.focus = "#name";
                }
            },
        },
    });

    $("#email").on("input", null, null, email);

    $(".popup-modal").magnificPopup({
        type: "inline",
        preloader: false,
        focus: "#username",
        modal: true,
    });

    $(".popup-modal-dismiss").click(function (e) {
        e.preventDefault();

        const url = $("#url_participante").val();

        $.magnificPopup.close();
        if (url !== "") {
            setInterval(function () {
                $(location).attr("href", url);
            }, 2000);
        }
    });
});