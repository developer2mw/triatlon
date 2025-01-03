<?php

namespace App\Services;

use Exception;
use GuzzleHttp\Client;

class PaidServices
{

    private $firstComision = 0;
    private $secondComision = 0;
    private $thirdComision = 0;

    private $defineTeenAndFivePrices = [
        "first" => 550,
        "second" => 600,
        "third" => 650        
    ];

    public function getCurrentDateTime()
    {
        $client = new Client();
        $response = $client->request('GET', 'http://api.timezonedb.com/v2.1/get-time-zone', [
            'query' => [
                'key' => '7OI91G2SJKVD', // Obtén una clave API gratuita registrándote en TimezoneDB
                'format' => 'json',
                'by' => 'zone',
                'zone' => 'America/Mexico_City', // O la zona horaria que desees
            ],
        ]);

        $body = $response->getBody();
        $data = json_decode($body, true);

        return $data['formatted'];
    }

    public function definePaidAmount()
    {
        $priceAmount = $this->defineTeenAndFivePrices; 

        $start_first_date = "2025-01-01";
        $end_first_date = "2025-01-24";

        $start_second_date = "2025-01-25";
        $end_second_date = "2025-02-13";

        $start_third_date = "2025-02-14";
        $end_third_date = "2025-02-15";

        $current_date = date('Y-m-d');

        try {
                if ($current_date >= $start_first_date && $current_date <= $end_first_date) {
                    return ["monto" => $priceAmount['first'], "comision" => $this->firstComision];
                } else if ($current_date >= $start_second_date && $current_date <= $end_second_date) {
                    return ["monto" => $priceAmount['second'], "comision" => $this->secondComision];
                } else if ($current_date >= $start_third_date && $current_date <= $end_third_date) {
                    return ["monto" => $priceAmount['third'], "comision" => $this->thirdComision];
                } else {
                    return ["monto" => $priceAmount['third'], "comision" => $this->thirdComision];
                }
            
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}
