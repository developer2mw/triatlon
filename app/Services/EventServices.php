<?php

namespace App\Services;

class EventServices {
    /**
     * Validate if participant have led category
     * and return boolean value
     * @param string $category
     * @return boolean
     */
    public function isLedParticipant($category)
    {
        $categories = [
            'estudiantesled',
            'maestrialed',
            'egresadosled',
            'docentesadminled'
        ];

        return in_array($category, $categories);
    }
    /**
     * @param array $participants
     * @param string $titulo
     * @return string $params
     */
    public function generateXLSX($participants, $titulo, $event = 0)
    {
        $dashboardServices = new DashboardServices();
        $data_numero = [];
        $data_nombre = [];
        $data_edad = [];
        $data_genero = [];
        $data_tipo_sangre = [];
        $data_categoria = [];
        $data_distancia = [];
        $data_nacimiento = [];
        $data_email = [];
        $data_telefono = [];
        $data_talla_playera = [];
        $data_club = [];
        $data_padecimiento_enfermedad = [];
        $data_padecimiento_alergia = [];
        $data_nombre_responsable = [];
        $data_telefono_responsable = [];
        $data_tiempo_personal = [];
        $data_tipo_pago = [];

        $listOfCategories = $dashboardServices->listAllCategoriesForEvent($event);
        $listOfDistances = $dashboardServices->listAllDistancesForEvent($event);

        foreach($participants as $participant) {
            $numero = $participant['number'];
            
            if($participant['id_status'] !== 2 )
                $numero = 0;

            array_push($data_categoria, $dashboardServices->generateCategory($participant['id_category'], $listOfCategories));
            array_push($data_distancia, $dashboardServices->getDistances($participant['id_distance'], $listOfDistances));
            array_push($data_numero, $numero);
            array_push($data_nacimiento, $participant['birth_date']);
            array_push($data_tipo_sangre, $participant['blood_type']);
            array_push($data_genero, $participant['gender']);
            array_push($data_nombre, $participant['name']);
            array_push($data_edad, $participant['age']);
            array_push($data_telefono, $participant['phone']);
            array_push($data_email,$participant['email']);
            array_push($data_talla_playera, $dashboardServices->getTShirt($participant['shirt_size']));
            array_push($data_club,$participant['club']);
            array_push($data_padecimiento_enfermedad, $participant['affliction']);
            array_push($data_padecimiento_alergia,$participant['allergy']);
            array_push($data_nombre_responsable, $participant['responsible']);
            array_push($data_telefono_responsable, $participant['phone_responsible']);
            array_push($data_tiempo_personal, "");    
            switch($participant['id_status']) {
                case 1:
                    array_push($data_tipo_pago, 'Efectivo en HBSports');
                break;
                case 2:
                    array_push($data_tipo_pago,'Deposito Bancario');
                break;
                case 3:
                    array_push($data_tipo_pago,'Gratis');
                break;
                case 4:
                    array_push($data_tipo_pago,'Oxxopay');
                break;
                case 5:
                    array_push($data_tipo_pago, 'Tarjeta de Crédito');
                break;
                default:
                    array_push($data_tipo_pago,'Ninguno');
                break;
            }

        }
        // Template of xlsx
        $templateFile = base_path().'/templates/template.xlsx';
        $filename = 'REGISTRO '.$titulo.'.xlsx';

        $params = [
            '[numero]' => $data_numero,
            '[nombre]' => $data_nombre,
            '[fecha_nacimiento]' => $data_nacimiento,
            '[tipo_sangre]' => $data_tipo_sangre,
            '[genero]' => $data_genero,
            '[edad]' => $data_edad,
            '[telefono]' => $data_telefono,
            '[email]' => $data_email,
            '[distancia]' => $data_distancia,
            '[categoria]' => $data_categoria,
            '[talla_playera]' => $data_talla_playera,
            '[club]' => $data_club,
            '[padecimiento_enfermedad]' => $data_padecimiento_enfermedad,
            '[padecimiento_alergia]' => $data_padecimiento_alergia,
            '[nombre_responsable_incidencia]' => $data_nombre_responsable,
            '[telefono_responsable]' => $data_telefono_responsable,
            '[tiempo_personal]' => $data_tiempo_personal
        ];

        return json_encode(array("templateFile" => $templateFile, "filename" => $filename,
         "params" => $params));
    }

    public function getBody($categoria, $name_, $phone, $email, $evento) {
        $mensaje = ('<table cellpadding="0" cellspacing="0" width="401px" style="margin-top: 50px; line-height:0;" bgcolor="#fff">
					<tr>
						<td align="center"></td>
					</tr>
					<tr>
						<td align="center"><h4>NUEVO PARTICIPANTE</h4></td>
					</tr>
					<tr>
						<td>
							<div style="width:350px; margin:10px auto; line-height:15px; font-family:Arial, Helvetica, sans-serif">
								<p>Participante: <b>'.(strtoupper( strtolower($name_) )).'</b></p>
								<p>Teléfono: <b>'.$phone.'</b></p>
								<p>Email: <b>'.$email.'</b></p>
								<p>Competencia: <b>'.$evento.'</b></p>
								<p>Categoría : <b>'.$categoria.'</b></p>
							</div>
						</td>
					</tr>
					<tr>
						<td  height="57px" align="right"><div style="width:350px; padding-right:25px;"><p style="font-family:Arial, Helvetica, sans-serif"></p></div></td>
					</tr>
				</table>');
        return $mensaje;
    }

    /**
     * Validate if numbers after last number in database is available
     * and return that number
     * @param int $limit
     * @param array $available_numbers
     * 
     * @return int
     */
    public function checkWhatNumbersAreAvailable($limit, $available_numbers)
    {
        // validate if array is empty
        if(count($available_numbers) === 0) {
            return 0;
            exit();
        }

        for($i = 0; $i <= $limit; $i++) {
            // dd($available_numbers[$i]['number']);
            // if first number have value and is different to first numeration return first numeration
            if($i === 0 && $available_numbers[$i]['number'] < 1) { //Verifica si el primer número ya está utilizado en el caso de no ser así, lo asigna 
                return 1;
                break;
            }
            //loop next numbers
            if(isset($available_numbers[$i -1]) && !in_array($i, $available_numbers[$i - 1])) { //Verifica si el número que almacena $i no se encuentra en el array $available_number y retorna ese mismo número
                //NO ES NECESARIO INDICAR LA CLAVE['numero'] ya que in_array verifica directamente si $i se encuentra dentro del array mencionado.
                return $i;
                break;
            }
            //when array available numbers is end and not exist another number break loop and return cero
            if(!isset($available_numbers[$i])) { //verifica si el siguiente $i no existe en el array $available_numbers para retornar 0 y terminar el bucle
                return 0;
                break;
            }
        }
        //when for loop finished and not return nothing return cero.
        return 0;
    }
}