# RELEASES

## NUEVAS MODIFICACIONES EN EL REPOSITORIO

### Dashboard Controller
- generateCategoryUsingParticipantGenre
    - Método para obtener la categoria en un array
    - Recibe como parámetro el genero del participante
    - Retorna un json con lo que coincide
```php
public function generateCategoryUsingParticipantGenre($genre) 
{   
    $categoryResult = [
        "F" => [
            "RUTA" => [
                0 => "NO TIENE CATEGORIA",
                1 => "Infantil 4-5 años",
                2 => "Infantil 6-7 años",
                3 => "Infantil 8-9 años",
                4 => "Infantil 10-11 años",
                5 => "Infantil 12 años",
                6 => "Libre Femenil",
                7 => "Aficionado Femenil"
            ],
            "MTB" => [
                0 => "NO TIENE CATEGORIA",
                1 => "Libre Femenil",
                2 => "Femenil B",
                3 => "Master 30",
                4 => "Master 40",
                5 => "Master 50",
                6 => "Aficionado Femenil",
                7 => "Juvenil 14-16",
                8 => "Local",
                9 => "Gravel",
                10 => "E-bikes",
            ]
        ],
        "M" => [
            "RUTA" => [
                0 => "NO TIENE CATEGORIA",
                1 => "Infantil 4-5 años",
                2 => "Infantil 6-7 años",
                3 => "Infantil 8-9 años",
                4 => "Infantil 10-11 años",
                5 => "Infantil 12 años",
                6 => "Libre Varonil",
                7 => "Master 35",
                8 => "Master 45",
                9 => "Master 55",
                10 => "Juvenil Varonil 14-16",
                11 => "Juvenil Varonil 16-18"
            ],
            "MTB" => [
                0 => "NO TIENE CATEGORIA",
                1 => "Libre Varonil",
                2 => "Master 30",
                3 => "Master 40",
                4 => "Master 50",
                5 => "Master 60",
                6 => "90k +",
                7 => "Juvenil 14-6",
                8 => "Local",
                9 => "Gravel",
                10 => "E-bikes",
            ]
        ]
    ];
    return json_encode($categoryResult[$genre]);
}
```
## BASE_TABLES_DATATABLES JS
- Agregando categoria de ruta y mtb en el archivo base_tables_datatables.js
    - Valida si el valor es mayor a cero
    - Se asigna el contenido dependiendo de la categoria
    - En el valor del select - option se manda el valor de la ruta o montaña para que se muestre
```js
let categories = JSON.parse(datos.Info.cate)
if(datos.Info.montana >= 0) {
    $("#nMontana").append(categories.MTB)
    $("form.js-validation-material #nMontana").val(datos.Info.montana)
}
if(datos.Info.ruta >= 0) {
    $("#nRuta").append(categories.RUTA)
    $("form.js-validation-material #nRuta").val(datos.Info.ruta)
}
$("#nPaquete").empty();
$("#nPaquete").append(JSON.parse(datos.Info.paq_l));
$("form.js-validation-material #nPaquete").val(datos.Info.paq);
```
## RETO.PHP
- Solucionando problema con un método para obtener el último elemento en el modelo Reto
    - Anteriormente era fijo el evento, se modificó para que reciba como parámetro el evento.
```php 
public function lastElement($event) {
        return Reto::select('numero')
        ->where('evento', '=', $event)
        ->orderBy('numero', 'DESC')
        ->limit(1)
        ->get();
    }
```
## PARTICIPANTE.PHP
- Solucionando problema al obtener el estatus del participante
    - Al momento de obtener el estatus en NULL o si ya dice Pendiente
    - Para ello la consulta queda de la siguiente manera:
```php 
public function getStatus($estatus, $evento) 
{   
    if($estatus == '') {
        return Reto::select('count(*) AS STATUS')
            ->where('evento', '=', $evento)
            ->where(function($query) {
                $query->whereNull('estatus')
                ->orWhere('estatus', '=', 'Pendiente');
            })
            ->count();
    } else {
        return Reto::select('count(*) AS STATUS')
            ->where('estatus', '=', $estatus)
            ->where('evento', '=', $evento)
            ->count();
    }   
}
```
- Modificando el método para obtener las categorias de los participantes
    - Se agregó un método para obtener las categorias de ruta
    - Se agregó otro método para obtener las categorias de montaña
```php
public function getParticipantesRutaCategoria($evento, $sexo, $ruta) 
{
        return Participante::select('count(idparticipante) as Total')
        ->join('reto', 'reto.id', '=', 'datos_participante.idparticipante')
        ->where('sexo', '=', $sexo)
        ->where('ruta', '=', $ruta)
        ->where('playera_color', '=', 'B')
        ->where('evento', '=', $evento)
        ->count();
}
public function getParticipantesMTBCategoria($evento, $sexo, $montana) 
{
        return Participante::select('count(idparticipante) as Total')
        ->join('reto', 'reto.id', '=', 'datos_participante.idparticipante')
        ->where('sexo', '=', $sexo)
        ->where('montana', '=', $montana)
        ->where('playera_color', '=', 'B')
        ->where('evento', '=', $evento)
        ->count();
}
```
- Agregando método para convertir la fecha de nacimiento del participante en un entero de edad
    - Recibe como parámetros la fecha de nacimiento del participante y la opción.
    - La opción es porque al guardar las fechas puede variar desde un dispositivo móvil o una laptop o equipo de escritorio.
```php
/**
 * @param String $birthdate of participant or children
 * @param Boolean $option when true is for participant
 * @return Int Age of participant or child
 */
public function convertDateToIntDate($dateParticipant, $option) {
    $ff = explode('-', $dateParticipant);
    if(count($ff) < 2) 
        return 0;
    if($option) {
        $newff = $ff[2].'-'.$ff[1].'-'.$ff[0];
        if(checkdate($ff[1], $ff[0], $ff[2])) {
            $birthday = new DateTime($newff);
            $today = new DateTime();
            $years = $today->diff($birthday);

            return $years->y;
        } else {
            return 0;
        }
    }
    else {
        $newff = $dateParticipant;
        
        if(checkdate($ff[1], $ff[2], $ff[0])) {
            $birthday = new DateTime($newff);
            $today = new DateTime();
            $years = $today->diff($birthday);

            return $years->y;
        } else {
            return 0;
        }
    }
}
```
## EVENT CONTROLLER 
- En el event controller al subir al servidor este controller hacer la siguiente modificación
    - Cambiar la diagonal invertida por una diagonal normal
        - Situación: En windows funciona con diagonal invertida, en el server es Linux y funciona con diagonal normal las rutas.
#### Windows
```php
 // Template of xlsx
$templateFile = base_path().'\templates\template.xlsx';
$filename = 'REGISTRO '.$titulo.'.xlsx';
```
#### Linux
```php
 // Template of xlsx
$templateFile = base_path().'/templates/template.xlsx';
$filename = 'REGISTRO '.$titulo.'.xlsx';
```
### CSS
- screen.css
- app.css
- checkout.css
En cada uno de esos archivos se crearon variables globales y también se corrigío problemas con el responsive
### PAID CONTROLLER
- Implementar en cada una de las carreras este método o manera de mandar los datos
- Es importante actualizarlos para evitar agregar cada carrera manualmente en el webhook
```php
$paid = array(
    //dentro de conekta
    'metadata' => [
        'participant_id' => (string)$participanteData[0]['id'],
        'event_id' => (string)$participanteData[0]['evento'],
        'image' => $image
    ]
);
```
### SERVICES
- Se crearon los diferentes servicios para poder almacenar código que no puede tener una relación directa con el controlador
- y solamente pueda ser llamado desde cualquier controller si se requiere.

- Ubicación
- [App]
    - [Services]
        - DashboardServices.php
        - EventServices.php
        - PaidServices.php

### EVENT SERVICES
```php
// Los siguientes métodos anteriormente en el event controller se movieron al servicio.
public function isLedParticipant($category){}

public function generateXLSX($retos, $titulo){}

public function getBody(){}
```
### PAID SERVICES
```php
$defineComision = [];
$defineFirstPrices = [];

public function definePaidAmount($package) {}

```
### DASHBOARD SERVICES
```php
public function getCategories($genre, $category) {}

public function generateCategory($category, $genre) {}

public function getTshirt($shirt) {}

public function getDistances() {}

public function generateCategoryUsingParticipantGenre($genre) {}

public function convertDateToIntDate($dateParticipant, $option) {}

public function participantPackage() {}

public function checkTallaPlayer($t_playera, $talla) {}

public function checkGenrePlayers($t_playera, $sexo, $tallaM, $tallaF) {}

```