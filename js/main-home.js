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

    // limit participant age
    $("#edad").on('input', function() {
        const edadMaxima = 80; // Edad máxima permitida
    
        // Verificar si la edad es mayor que la edad máxima
        if ($(this).val() > edadMaxima) {
            $(this).val('');
            $("#message-age").text(`La edad no puede ser mayor de ${edadMaxima} años.`);
            mostrarMensajeTemporal("#message-age");
        }
    });
    
    function mostrarMensajeTemporal(selector) {
        setTimeout(function () {
            $(selector).text("");
        }, 1500);
    }
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

console.log(eventCategories);


const TALLA = [
    { id: "NA", text: "NO APLICA" },    
]
const TALLAS = [
    { id: "XS", text: "XS" },
    { id: "S", text: "S" },
    { id: "M", text: "M" },
    { id: "L", text: "L" },
    { id: "XL", text: "XL" },
    { id: "XXL", text: "XXL" },
]
const TALLAS_INFANTILES = [    
    { id: "4", text: "4" },
    { id: "6", text: "6" },
    { id: "8", text: "8" },
    { id: "10", text: "10" },
    { id: "12", text: "12" },
    { id: "14", text: "14" },
]

$(document).ready(function() {
    // Llenar el select de categorías
    chargeSelectCat(CATEGORIAS, "categoria");

    // Manejador de cambios para el campo 'categoria'
    $('#categoria').change(function() {
        const selectedCategory = $(this).val();  // Obtener valor seleccionado de categoría
        console.log('cat cat',selectedCategory);        
        // Si la categoría es Libre o Master, mostrar tallas de adulto
        if (selectedCategory >= '115' && selectedCategory <= '118' ) {
            chargeSelect(TALLAS_INFANTILES, "talla");  // Tallas de adulto
        } else {
            chargeSelect(TALLAS, "talla");  // Tallas infantiles
        }
    });
    // Inicialmente, cargar NO APLICA en el campo de talla
    chargeSelect(TALLA, "talla");
});

// Función para llenar el select con las opciones de categorías
function chargeSelectCat(optionsArray, selectId) {
    const select = $('#' + selectId);
    select.empty();  // Limpiar opciones previas
    optionsArray.forEach(option => {
        select.append(new Option(option.id_category, option.category));
    });
}

// Función para llenar el select con las opciones de distancias o tallas
function chargeSelect(optionsArray, selectId) {
    const select = $('#' + selectId);
    select.empty();  // Limpiar opciones previas
    optionsArray.forEach(option => {
        select.append(new Option(option.id, option.text));
    });
}



function chargeSelect(options, select) {
    var auxCat =
        "<option value='' disabled selected>Seleccione una opción </option>";

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
        "<option value='' disabled selected>Seleccione una categoria </option>";

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