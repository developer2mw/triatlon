<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreParticipantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email|max:255',
            'name' => 'required|string|max:255',
            'edad' => 'required|string|max:10',
            'nacimiento' => 'required|string|max:255',
            'phone' => 'required|string|max:15',
            'sangre' => 'required|string|max:100',
            'alergia' => 'required|string|max:255',
            'padecimientos' => 'required|string|max:255',
            'medicamentos' => 'required|string|max:255',
            // 'estado' => 'required',
            'sexo' => 'required|string|max:10',
            'categoria' => 'required|string|max:10',
            'fname' => 'required|string|max:255',
            'fphone' => 'required|string|max:15'
        ];
    }
    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'email.required' => 'El correo electrónico es requerido',
            'name.required' => 'El nombre completo es requerido',
            'edad.required' => 'La edad es requerida',
            'nacimiento.required' => 'El año de nacimiento es requerido',
            'phone.required' => 'El número de teléfono es requerido',
            'sangre.required' => 'El tipo de sangre es requerido',
            'alergia.required' => 'Las alergias del participante es requerida, sino tiene alguno, puede escribir (ninguno)',
            'padecimientos.required' => 'Los padecimientos del participante es requerido, sino tiene alguno, puede escribir (ninguno)',
            'medicamentos.required' => 'Los medicamentos que utiliza o no tolera es requerido, sino tiene alguno, puede escribir (ninguno)',
            // 'estado.required' => 'Seleccione un estado',
            'sexo.required' => 'Seleccione su genero',
            'categoria.required' => 'La categoría es requerida',
            'fname.required' => 'El nombre de su contacto de emergencia es requerido',
            'fphone.required' => 'El teléfono de su contacto de emergencia es requerido'
        ];
    }
}
