<?php

namespace App\Services;

use Exception;

class PaidServices
{
    private $defineComision = 0;

    // Precios según la categoría y el periodo
    private $definePrices = [
        "infantil" => [
            "first" => 990.00,  // Precio para el primer periodo
            "second" => 1150.00 // Precio para el segundo periodo
        ],
        "juvenil_novatos_libre_master_veteranos" => [
            "first" => 1150.00, // Precio para el primer periodo
            "second" => 1350.00 // Precio para el segundo periodo
        ],
        "relevos" => [
            "first" => 1490.00, // Precio para el primer periodo
            "second" => 1650.00 // Precio para el segundo periodo
        ]
    ];

    // Método para determinar el monto a pagar y la comisión
    public function definePaidAmount($categoria)
    {
        // Fechas de los periodos
        $start_first_date = "2025-02-01"; // Inicio del primer periodo
        $end_first_date = "2025-02-26";   // Fin del primer periodo

        $start_second_date = "2025-02-27"; // Inicio del segundo periodo
        $end_second_date = "2025-02-28";   // Fin del segundo periodo

        $current_date = date('Y-m-d'); // Fecha actual

        try {
            // Determinar el precio según la categoría
            $priceAmount = $this->getPriceForCategory($categoria);

            // Compara la fecha actual con los periodos
            if ($current_date >= $start_first_date && $current_date <= $end_first_date) {
                return ["monto" => $priceAmount['first'], "comision" => $this->defineComision];
            } else if ($current_date >= $start_second_date && $current_date <= $end_second_date) {
                return ["monto" => $priceAmount['second'], "comision" => $this->defineComision];
            } else {
                // Si la fecha no está en ningún periodo, devuelve el precio del segundo periodo
                return ["monto" => $priceAmount['second'], "comision" => $this->defineComision];
            }
        } catch (Exception $e) {
            return ["error" => $e->getMessage()]; // Manejo de excepciones
        }
    }

    // Método para obtener los precios según la categoría
    private function getPriceForCategory($categoria)
    {
        // Categorías infantiles
        $categoriasInfantiles = [128, 129, 130, 131, 132]; // IDs de categorías infantiles

        // Categorías de juveniles, novatos, libre, master y veteranos
        $categoriasAdultos = [133, 134, 135, 136, 138]; // IDs de categorías adultas

        // Categoría de relevos
        $categoriaRelevos = 137; // ID de categoría de relevos

        if (in_array($categoria, $categoriasInfantiles)) {
            return $this->definePrices["infantil"];
        } else if (in_array($categoria, $categoriasAdultos)) {
            return $this->definePrices["juvenil_novatos_libre_master_veteranos"];
        } else if ($categoria == $categoriaRelevos) {
            return $this->definePrices["relevos"];
        } else {
            throw new Exception("Categoría no válida");
        }
    }
}