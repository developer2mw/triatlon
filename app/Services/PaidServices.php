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
        "first" => 300,
        "second" => 350,
        "third" => 400,
        "first_kids" => 200,
        "second_kids" => 250,
        "third_kids" => 300        
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

    public function definePaidAmount($category)
    {
        $priceAmount = $this->defineTeenAndFivePrices; 

        $start_first_date = "2024-11-20";
        $end_first_date = "2024-11-30";

        $start_second_date = "2024-12-01";
        $end_second_date = "2025-01-09";

        $start_third_date = "2025-01-10";
        $end_third_date = "2025-01-11";

        $current_date = date('Y-m-d');

        try {
            if ($category >= 110 && $category <= 114){//110-114
                if ($current_date >= $start_first_date && $current_date <= $end_first_date) {
                    return ["monto" => $priceAmount['first'], "comision" => $this->firstComision];
                } else if ($current_date >= $start_second_date && $current_date <= $end_second_date) {
                    return ["monto" => $priceAmount['second'], "comision" => $this->secondComision];
                } else if ($current_date >= $start_third_date && $current_date <= $end_third_date) {
                    return ["monto" => $priceAmount['third'], "comision" => $this->thirdComision];
                } else {
                    return ["monto" => $priceAmount['third'], "comision" => $this->thirdComision];
                }
            }
            if($category >=115 && $category <= 118){//110-114
                if ($current_date >= $start_first_date && $current_date <= $end_first_date) {
                    return ["monto" => $priceAmount['first_kids'], "comision" => $this->firstComision];
                } else if ($current_date >= $start_second_date && $current_date <= $end_second_date) {
                    return ["monto" => $priceAmount['second_kids'], "comision" => $this->secondComision];
                } else if ($current_date >= $start_third_date && $current_date <= $end_third_date) {
                    return ["monto" => $priceAmount['third_kids'], "comision" => $this->thirdComision];
                } else {
                    return ["monto" => $priceAmount['third_kids'], "comision" => $this->thirdComision];
                }
            }
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}
