<?php
namespace App\Services;

use App\Models\EventCategory;
use App\Models\EventCategoryDistance;
use App\Models\EventDistance;
use App\Models\PaidType;
use App\Models\ParticipantNumber;
use DateTime;

class DashboardServices {
    /**
     * Return a list of all categories availables in event
     * @param int $event
     */
    public function listAllCategoriesForEvent($event) 
    {
        return EventCategoryDistance::select('event_category_distances.id_category as id_event_category', 'category.category')->join('category', 'category.id','=', 'event_category_distances.id_category')->where('event_category_distances.id_event',$event)->get()->toArray();
    }
    /**
     * Return a list of all distances availables in event
     * @param int $event
     */
    public function listAllDistancesForEvent($event) 
    {
        return EventCategoryDistance::select('distance.id as id_distance','distance.distance')->join('distance', 'distance.id','=', 'event_category_distances.id_distance')->where('event_category_distances.id_event',$event)->get()->toArray();
    }
    /**
     * Return string to participante category
     * @param int $category
     * @param array $event
     * @return string $category name
     */
    public function getCategories($category, $listOfCategories)
    {
        if(count($listOfCategories) === 0)
            return '';

        foreach($listOfCategories as $categoryId) {
            if($categoryId['id_event_category'] === $category) {
                return $categoryId['category'];
                break;
            }
        }
        
    }
    /**
     *  Return the distance of participant
     * @param int $paquete
     * @param array $listOfDistances
     * @return string $paquete
     * 
     */
    public function getDistances($paquete, $listOfDistances) 
    {
        if(count($listOfDistances) === 0)
            return '';
        foreach($listOfDistances as $distance) {
            if($distance['id_distance'] === $paquete) {
                return $distance['distance'];
                break;
            }
        }
    }
    /**
     * Return a list of available paid options
     */
    public function generateListOfAvailablePaidTypes()
    {
        $listOfTypes = [];
        
        $paidTypes = PaidType::all();
        
        if(count($paidTypes) === 0) 
            return json_encode(["<option value='0'>Ninguna disponible</option>"]);

        foreach($paidTypes as $types) {
            $listOfTypes[] = "<option value='".$types['id']."'>".$types['status']."</option>";
        }
        
        return json_encode($listOfTypes);
    }
    /**
     * Return array of participant tshirt size
     * @return string
     */
    public function getParticipantTShirt()
    {
        $sizes = [
            "<option value=''>NO TIENE CATEGORÍA</option>",
            "<option value='4'>Infantil 4</option>",
            "<option value='6'>Infantil 6</option>",
            "<option value='8'>Infantil 8</option>",
            "<option value='10'>Infantil 10</option>",
            "<option value='12'>Infantil 12</option>",
            "<option value='14'>Infantil 14</option>",
            "<option value='XS'>XS</option>",
            "<option value='S'>S</option>",
            "<option value='M'>M</option>",
            "<option value='L'>L</option>",            
            // "<option value='XL'>XL</option>",
            "<option value='XXL'>XXL</option>",
            "<option value='NA'>No aplica</option>"
        ];

        return json_encode($sizes);
    }
    /**
     * Return a integer with total of shirt size in use.
     * @param string $shirt_size
     * @param int $event
     */
    private function countTotalOfParticipantsConfirmedBySizes($shirt_size, $gender, $event)
    {
        $participantNumber = new ParticipantNumber();

        if($gender === "")
            return $participantNumber->countTotalOfParticipantsForShirtSize($event, $shirt_size);
    
        return $participantNumber->countTotalOfParticipantsForShirtSizeUsingGenre($event, $shirt_size, $gender);
    }
    /**
     * Using a array list with array(string key, int value) validate
     * participant shirt size available and using event id
     * @param array $shirtSizeList
     * @param string $gender
     * @param int $event
     * @return array
     */
    public function showAvailableShirtSizes($shirtSizeList, $gender, $event)
    {
        $totalParticipants = 0;
        //remove numbers and only get array keys
        $listOfKeys = array_keys($shirtSizeList);

        $results = array();
        //loop every key 
        foreach($listOfKeys as $shirtSize) {
            $totalParticipants = (int)$this->countTotalOfParticipantsConfirmedBySizes($shirtSize, $gender, $event);
            $total = (int)$shirtSizeList[$shirtSize] - $totalParticipants;
            if($total >= 0)
                $results[] = array("id" => $shirtSize, "text" => $shirtSize);
        }
        
        return $results;
        
    }
     /**
     * @param int $category
     * @param array $listOfCategories
     * @return string $category name
     */
    public function generateCategory($category, $listOfCategories) 
    {
        return $this->getCategories($category, $listOfCategories);
    }
    /**
     * check if shirt of participant exist and return string value if exist,
     * and empty string if not
     * @param string $tshirt
     * @return string
     */
    public function getTShirt($shirt)
    {
        $shirts = [
            '6' => "Infantil 6",
            '8' => "Infantil 8",
            '10' => "Infantil 10",
            '12' => "Infantil 12",
            '14' => "Infantil 14",
            'XS' => "Extra Chica",
            'C' => "Chica",
            'S' => "Chica",
            'M' => "Mediana",
            'L' => "Grande",
            'XL' => "Extra Grande",
            'XXL' => "Extra Extra Grande",
            'I' => "Infantil",
            'NA' => "No aplica",
            '' => "No tiene talla definida"
        ];
        
        if(array_key_exists($shirt, $shirts))
            return $shirts[$shirt];

        return $shirts[''];
    }
    /**
     * @param string $genre participant
     * @return string JSON with array of package
     */
    public function generateCategoryUsingParticipantGenre($genre) 
    {   
        $categoryResult = [
            "F" => [
                "<option value='0'>NO TIENE CATEGORÍA</option>",
                "<option value='119'>Infantil 5-6 años</option>",
                "<option value='120'>Infantil 7-8 años</option>",
                "<option value='121'>Infantil 9-10 años</option>",
                "<option value='122'>Infantil 11-12 años</option>",                
                "<option value='123'>Infantil 13-15</option>",
                "<option value='124'>Juvenil Menor (16-17 años)</option>",
                "<option value='125'>Libre (18-39 años)</option>",
                "<option value='126'>Master (40 y más)</option>",
                "<option value='127'>Mi primer acuatlón (18 y más)</option>",
            ],
            "M" => [
                "<option value='0'>NO TIENE CATEGORÍA</option>",
                "<option value='119'>Infantil 5-6 años</option>",
                "<option value='120'>Infantil 7-8 años</option>",
                "<option value='121'>Infantil 9-10 años</option>",
                "<option value='122'>Infantil 11-12 años</option>",                
                "<option value='123'>Infantil 13-15</option>",
                "<option value='124'>Juvenil Menor (16-17 años)</option>",
                "<option value='125'>Libre (18-39 años)</option>",
                "<option value='126'>Master (40 y más)</option>",
                "<option value='127'>Mi primer acuatlón (18 y más)</option>",
            ]
        ];

        if(array_key_exists($genre, $categoryResult))
            return json_encode($categoryResult[$genre]);
            
        return json_encode([]);
    }
    /**
     * @param string $birthdate of participant or children
     * @param boolean $option when true is for participant
     * @return int Age of participant or child
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
    /**
     * Generate a list of distances using event id
     * @param int $event
     */
    public function participantPackage($event)
    {
        $packageList = [];

        $package = EventCategoryDistance::leftJoin('distance', 'distance.id','=','event_category_distances.id_distance')
        ->where('id_event', $event)->get();

        if(count($package) === 0)
            return response()->json(["<option value='0'>Ninguno</option>"]);
        foreach($package as $distance) {
            $packageList[] = "<option value='".$distance->id."'>".$distance->distance."</option>";
        }
        return json_encode($packageList);
    }

    /**
     * Generate a list of distances using event id
     * @param int $event
     */
    public function participantDistance($event)
    {
        $packageList = [];

        $package = EventCategoryDistance::leftJoin('distance', 'distance.id','=','event_category_distances.id_distance')
        ->where('id_event', $event)->get();

        if(count($package) === 0)
            return response()->json(["<option value='0'>Ninguno</option>"]);
        foreach($package as $distance) {
            $packageList[] = "<option value='".$distance->id."'>".$distance->distance."</option>";
        }
        return json_encode($packageList);
    }    
    
    private function checkTallaPlayer($t_playera, $talla) 
    {
        switch($t_playera) {
            case '4':
                return $talla['4'];
            break;
            case '6':
                return $talla['6'];
            break;
            case '8':
                return $talla['8'];
            break;
            case '10':
                return $talla['10'];
            break;
            case '12':
                return $talla['12'];
            break;
            case '14':
                return $talla['14'];
            break;
            case 'XS':
                return $talla['XS'];
            break;
            case 'S':
                return $talla['S'];
            break;
            case 'CH':
                return $talla['CH'];
            return;
            case 'M':
                return $talla['M'];
            break;
            case 'L':
                return $talla['L'];
            break;
            case 'G':
                return $talla['G'];
            break;
            case 'XL':
                return $talla['XL'];
            break;
            case 'XXL':
                return $talla['XXL'];
            break;
            default:
                return 0;
            break;
        }
    }

    public function checkGenrePlayers($t_playera, $sexo, $tallaM, $tallaF, $tallaInfantil) 
    {
        $infantilTalla = ["4","6","8","10","12","14"];

        if(!in_array($t_playera, $infantilTalla)) {
            switch($sexo) {
                case 'M':
                    return $this->checkTallaPlayer($t_playera, $tallaM);
                break;
                case 'F':
                    return $this->checkTallaPlayer($t_playera, $tallaF);
                break;
            }
        } else {
             return $this->checkTallaPlayer($t_playera, $tallaInfantil);
        }
    }
    /**
     * Receive a string status and parset to int using database status
     * @param string $status
     * @param int $statusNumber
     */
    public function parseStatusStringToNumber($status = '')
    {
        $statusArray = [
            'All' => 0,
            'Pendiente' => 1,
            'Confirmado' => 2,
            'En Espera' => 3,
            'No Participa' => 4
        ];

        if(array_key_exists($status, $statusArray))
            return $statusArray[$status];

        return $statusArray['All'];
    }
    /**
     * Return a string status when receive a int status
     * @param int $status
     * @return string $statusString
     */
    public function parseStatusNumberToString($status = 1)
    {
        $statusArray = [
            0 => 'All',
            1 => 'Pendiente',
            2 => 'Confirmado',
            3 => 'En Espera',
            4 => 'No Participa'
        ];

        if(array_key_exists($status, $statusArray))
            return $statusArray[$status];

        return $statusArray[0];
    }
}