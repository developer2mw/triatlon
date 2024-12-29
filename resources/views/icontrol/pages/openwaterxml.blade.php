<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
@php
    header('Content-Type: text/html; charset=UTF-8'); 
    header("Content-Type: application/vnd.ms-excel;"); 
    header("Content-Disposition: attachment; filename=REGISTRO-".$request->get('name').".xls");
    // $sede = 'Playa Puerto Angelito Open Water 2023';
@endphp   
<table border="1">
    <tr>
      <th>Numero</th>
      <th>Nombre</th>
      <th>Teléfono</th>
      <th>Email</th>
      <th>Genero</th>
      <th>Estado de procedencia</th>
      <th>Distancia</th>
      <th>Distancia 2</th>
      <th>Categoria</th>
      <th>Categoria 2</th>
      <th>Talla Playera</th>
      <th>Club</th>  
      <th>Padecimientos</th>
      <th>Alergias</th>
      <th>Contacto en caso de emergencia</th>
      <th>Teléfono en caso de emergencia</th>  
      <th>Tiempo Personal</th>   
      <th>Metodo de pago</th>     
   </tr> 

   @foreach ($data_arr as $reto)
@php 
@endphp
        <tr>
			<td>{{$reto['numero']}}</td>
			<td>{{html_entity_decode($reto['nombre'])}}</td>
			<td>{{$reto['telefono']}}</td>
			<td>{{$reto['email']}}</td>
            <td>{{$reto['genero']}}</td>
            <td>{{$reto['estado']}}</td>
			<td>{{$reto['distancia']}}</td>
            <td>{{$reto['distancia_dos']}}</td>
			<td>{{$reto['categoria']}}</td>
            <td>{{$reto['categoria_dos']}}</td>
			<td>{{$reto['talla_playera']}}</td>
			<td>{{html_entity_decode($reto['club'])}}</td>
			<td>{{html_entity_decode($reto['padecimiento_enfermedad'])}}</td>
			<td>{{html_entity_decode($reto['padecimiento_alergia'])}}</td>
			<td>{{html_entity_decode($reto['nombre_responsable_incidencia'])}} </td>
			<td>{{html_entity_decode($reto['telefono_responsable'])}}</td>
			<td>{{html_entity_decode($reto['tiempo_personal'])}}</td>
			<td>{{$reto['tipo_pago']}}</td>
		</tr>
@endforeach

</table>
