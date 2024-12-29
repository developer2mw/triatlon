# CARRERAS HBSPORTS

## Instalación

El repositorio esta hecho con Laravel y solo se necesita actualizar [composer](https://getcomposer.org/) para actualizar los paquetes.

```bash
composer install
```
ó
```bash
composer update
```

## Estructura
Los siguientes archivos de la estructura son los que se crearon o se modificaron.
- [App]
  - [Http]
     - [Controllers]
       - DashboardController.php
       - EventController.php
       - IControlController.php
       - PaidController.php
  - [Models]
    - Estado.php
    - Notificacion.php
    - Participante.php
    - Reto.php
    - User.php
- [fonts]
- [css]
- [js]
- [img]
- [mail]
    - email.html
    - email_pdf.html
- [public]
- [resources]
  - [views]
    - [icontrol]
      - [includes]
        - footer.blade.php
        - head.blade.php
        - header.blade.php
      - [layouts]
        - default.blade.php
        - variables.blade.php
      - [pages]
        - dashboard.blade.php
        - index.blade.php
        - registration.blade.php
        - xmlfile.blade.php
    - [home]
      - [includes]
        - footer.blade.php
        - head.blade.php
      - [layouts]
        - default.blade.php
      - [pages]
        - index.blade.php
    - [checkout]
      - [includes]
        - footer.blade.php
        - head.blade.php
      - [layouts]
        - default.blade.php
      - [pages]
        - checkout.blade.php
- [routes]
  - web.php
- [templates]
  - template.xlsx
- .env.example

## Usage

```php
//MySQL connection in .env file
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hbsports_racings
DB_USERNAME=admin_racings
DB_PASSWORD=
//Set Cookie session
BROADCAST_DRIVER=log
CACHE_DRIVER=file
//rename for different race
CACHE_PREFIX=triburones2024
FILESYSTEM_DRIVER=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
//rename for different race
SESSION_COOKIE=triburones2024
SESSION_LIFETIME=120

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## USO PARA PRODUCCIÓN
- Asignale las llaves de producción de conekta
  - Tipos de llaves - [Privada] - [Pública]
  - En el Controller PaidController apiKey, reemplazla por la llave de producción privada
  - En el checkout.blade.php reemplazar la llave al momento de hacer la petición para el pago de Oxxo, por la llave de producción pública
- En el archivo .env modificar APP_DEBUG=true por APP_DEBUG=false

## METODOS DE PAGO
- Conekta
  - Oxxopay
  - Card
- Transferencia
- Para poder validar un pago de oxxo y de una tarjeta, es necesario agregarlo en el webhook de hbsports.
### CUESTIONES EXTERNAS VALIDACIÓN DE CATEGORIA O DISTANCIAS
- Si la carrera que se desarrollará necesita de algunos cambios es necesario acceder al webhook para agregarle esa validación
- Casos como la carrera de retobike lo necesita

#### Ruta
- Carpeta Pagos HBSPORTS
 - webhook.php