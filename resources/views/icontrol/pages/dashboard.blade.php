@php ($leyenda = "Usuarios registrados en hbsports.com.mx")
@extends('icontrol.layouts.default')
@section('content')

<link rel="stylesheet" href="{{asset('js/plugins/datatables/jquery.dataTables.min.css')}}">
<div id="preloader" class="fullscreen loaded" style="display: none;">
    <div class="logo"><img src="https://hbsports.com.mx/images/header/header-1/logo-hardbeat.png"></div>
    <div class="lds-ring lds-ring-index circular">
        <div></div>
        <div></div>
        <div></div>
        <div></div><span style="color:white;">Espere...</span>
    </div>
</div>

<div class="content bg-gray-lighter">
    <div class="row items-push">
        <div class="col-sm-7">
            <h1 class="page-heading">
                Dashboard <br><small> <i class="fa fa-info"></i> {{ $leyenda }}</small>
            </h1>
        </div>
        <div class="col-sm-5 text-right hidden-xs">
            <ol class="breadcrumb push-10-t">
                <li><a class="link-effect" href="">Dashboard</a></li>
            </ol>
        </div>
    </div>
</div>

<div class="content">
    <div class="block">
        <ul class="nav nav-tabs main-menu-hb" data-toggle="tabs">

            <li data-table="TriLed" tipo-evento="67">
                <a id="hve14" href="#btabs-animated-fade-profile-TriLed">{{$titulo}}</a>
            </li>

        </ul>
        <div class="block-content tab-content">
            <div class="tab-pane fade" id="btabs-animated-fade-home">
                <div class="block col-md-12">
                    <div class="block-header">
                        <h3 class="block-title">{{$listaParticipantes}}</h3>
                    </div>
                    <div class="block-content">
                        <table class="table table-bordered table-striped js-dataTable-full">
                            <thead>
                                <tr>
                                    <th class="text-center"></th>
                                    <th>Nombre</th>
                                    <th>Teléfono</th>
                                    <th>Email</th>
                                    <th>Categoría</th>
                                    <th>Estatus</th>
                                    <th>Opción</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div class="tab-pane fade active in" id="btabs-animated-fade-profile-TriLed">
                <div class="block col-md-12">
                    <div class="block-header">
                        <h3 class="block-title">Lista de participantes a Carrera {{$titulo}}</h3>
                        <div class="pull-right">
                            <a title="{{$titulo}} EXCEL" class="btn btn-default" data-toggle="tooltip" href="{{url("/generatexml?evento=$idevento&name=$tituloExcel")}}" target="_blank" data-original-title="Exportar datos a excel">
                                <i class="glyphicon glyphicon-save"></i> Exportar Datos
                            </a>
                        </div>
                    </div>
                    <div class="block-content">
                        <div class="row items-push text-uppercase" style="text-align: center;">
                            <div class="col-xs-6 col-md-3">
                                <div class="font-w700 text-gray-darker animated fadeIn">Pendiente</div>
                                <label class="h2 font-w300 text-primary animated flipInX"><span class="14ST01">{{$evento['pendiente']}}</span></label>
                            </div>
                            <div class="col-xs-6 col-md-3">
                                <div class="font-w700 text-gray-darker animated fadeIn">En Espera</div>
                                <label class="h2 font-w300 text-primary animated flipInX"><span class="14ST02">{{$evento['espera']}}</span></label>
                            </div>
                            <div class="col-xs-6 col-md-3">
                                <div class="font-w700 text-gray-darker animated fadeIn">Confirmado</div>
                                <label class="h2 font-w300 text-primary animated flipInX"><span class="14ST03">{{$evento['confirmado']}}</span></label>
                            </div>
                            <div class="col-xs-6 col-md-3">
                                <div class="font-w700 text-gray-darker animated fadeIn">No Participa</div>
                                <label class="h2 font-w300 text-primary animated flipInX"><span class="14ST04">{{$evento['noparticipa']}}</span></label>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="row items-push text-uppercase" style="text-align: center;">
                        <div class="font-w700 text-gray-darker animated fadeIn">Categorias</div><br>
                        <div class="row items-push text-uppercase" style="text-align: center;">
                            <div class="col-sm-12">
                                <div class="col-xs-12 col-sm-4">
                                    <div class="font-w700 text-gray-darker animated fadeIn">
                                        <small>INFANTIL (5-6 años) FEMENIL / VARONIL</small>
                                    </div>
                                    <label class="h2 font-w300 text-primary animated flipInX" style="font-size: 16px;">
                                        <span class="14C01M">{{$categorias['infantil_5_6_femenil']}}</span> <small>Mujeres</small> / <span class="14C01F">{{$categorias['infantil_5_6_varonil']}}</span> <small>Hombres</small>
                                    </label>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="font-w700 text-gray-darker animated fadeIn">
                                        <small>INFANTIL (7-8 años) FEMENIL / VARONIL</small>
                                    </div>
                                    <label class="h2 font-w300 text-primary animated flipInX" style="font-size: 16px;">
                                        <span class="14C01M">{{$categorias['infantil_7_8_femenil']}}</span> <small>Mujeres</small> / <span class="14C01F">{{$categorias['infantil_7_8_varonil']}}</span> <small>Hombres</small>
                                    </label>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="font-w700 text-gray-darker animated fadeIn">
                                        <small>INFANTIL (9-10 años) FEMENIL / VARONIL</small>
                                    </div>
                                    <label class="h2 font-w300 text-primary animated flipInX" style="font-size: 16px;">
                                        <span class="14C01M">{{$categorias['infantil_9_10_femenil']}}</span> <small>Mujeres</small> / <span class="14C01F">{{$categorias['infantil_9_10_varonil']}}</span> <small>Hombres</small>
                                    </label>
                                </div>
                            </div>
                            <div class="row items-push text-uppercase" style="text-align: center;">
                                <div class="col-sm-12">
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="font-w700 text-gray-darker animated fadeIn">
                                            <small>INFANTIL (11-12 años) FEMENIL / VARONIL</small>
                                        </div>
                                        <label class="h2 font-w300 text-primary animated flipInX" style="font-size: 16px;">
                                            <span class="14C01M">{{$categorias['infantil_11_12_femenil']}}</span> <small>Mujeres</small> / <span class="14C01F">{{$categorias['infantil_11_12_varonil']}}</span> <small>Hombres</small>
                                        </label>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="font-w700 text-gray-darker animated fadeIn">
                                            <small>INFANTIL (13-15 años) FEMENIL / VARONIL</small>
                                        </div>
                                        <label class="h2 font-w300 text-primary animated flipInX" style="font-size: 16px;">
                                            <span class="14C01M">{{$categorias['infantil_13_15_femenil']}}</span> <small>Mujeres</small> / <span class="14C01F">{{$categorias['infantil_13_15_varonil']}}</span> <small>Hombres</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="col-xs-12 col-sm-6">
                                    <div class="font-w700 text-gray-darker animated fadeIn">
                                        <small>JUVENIL (16-17 años) FEMENIL / VARONIL</small>
                                    </div>
                                    <label class="h2 font-w300 text-primary animated flipInX" style="font-size: 16px;">
                                        <span class="14C01M">{{$categorias['juvenil_16_17_femenil']}}</span> <small>Mujeres</small> / <span class="14C01F">{{$categorias['juvenil_16_17_varonil']}}</span> <small>Hombres</small>
                                    </label>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <div class="font-w700 text-gray-darker animated fadeIn">
                                        <small>LIBRE (18-39 años) FEMENIL / VARONIL</small>
                                    </div>
                                    <label class="h2 font-w300 text-primary animated flipInX" style="font-size: 16px;">
                                        <span class="14C01M">{{$categorias['libre_18_39_femenil']}}</span> <small>Mujeres</small> / <span class="14C01F">{{$categorias['libre_18_39_varonil']}}</span> <small>Hombres</small>
                                    </label>
                                </div>
                            </div>
                            <div class="row items-push text-uppercase" style="text-align: center;">
                                <div class="col-sm-12">
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="font-w700 text-gray-darker animated fadeIn">
                                            <small>MASTER (40-49 años) FEMENIL / VARONIL</small>
                                        </div>
                                        <label class="h2 font-w300 text-primary animated flipInX" style="font-size: 16px;">
                                            <span class="14C01M">{{$categorias['master_40_49_femenil']}}</span> <small>Mujeres</small> / <span class="14C01F">{{$categorias['master_40_49_varonil']}}</span> <small>Hombres</small>
                                        </label>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="font-w700 text-gray-darker animated fadeIn">
                                            <small>VETERANOS (50 y más) FEMENIL / VARONIL</small>
                                        </div>
                                        <label class="h2 font-w300 text-primary animated flipInX" style="font-size: 16px;">
                                            <span class="14C01M">{{$categorias['veteranos_50_mas_femenil']}}</span> <small>Mujeres</small> / <span class="14C01F">{{$categorias['veteranos_50_mas_varonil']}}</span> <small>Hombres</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row items-push text-uppercase" style="text-align: center;">
                                <div class="col-sm-12">
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="font-w700 text-gray-darker animated fadeIn">
                                            <small>RELEVOS FEMENIL / VARONIL</small>
                                        </div>
                                        <label class="h2 font-w300 text-primary animated flipInX" style="font-size: 16px;">
                                            <span class="14C01M">{{$categorias['relevos_femenil']}}</span> <small>Mujeres</small> / <span class="14C01F">{{$categorias['relevos_varonil']}}</span> <small>Hombres</small>
                                        </label>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="font-w700 text-gray-darker animated fadeIn">
                                            <small>NOVATOS (18 y más) FEMENIL / VARONIL</small>
                                        </div>
                                        <label class="h2 font-w300 text-primary animated flipInX" style="font-size: 16px;">
                                            <span class="14C01M">{{$categorias['novatos_18_mas_femenil']}}</span> <small>Mujeres</small> / <span class="14C01F">{{$categorias['novatos_18_mas_varonil']}}</span> <small>Hombres</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr>
                        <div class="row items-push text-uppercase" style="text-align: center;">
                            <div class="col-sm-12 col-md-8 col-md-offset-2">
                                <div class="font-w700 text-gray-darker animated fadeIn">
                                    Playeras<br>
                                    <label class="h2 font-w300 text-primary animated flipInX">
                                        {{-- [<span class="14PBTP">{{$tallas['total']}}</span>/<span class="14PBTT">{{$total_playeras}}</span>] --}}
                                        [<span class="14PBTP">{{$tallas['total']}}</span>]
                                    </label>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12" style="margin-top: 30px;">
                                        <div class="font-w700 text-gray-darker animated fadeIn">Hombres</div><br>

                                        <div class="col-xs-6 col-sm-4">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Extra Chica (XS)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14SBMP">{{$tallas['talla_xs_h']}}</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-4">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Chica (S)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14MBMP">{{$tallas['talla_s_h']}}</span>
                                                    {{-- /<span class="14MBMT">{{$tallasM['S']}}</span> --}}
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-xs-12 col-sm-4">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Mediana (M)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14LBMP">{{$tallas['talla_m_h']}}</span>
                                                    {{-- /<span class="14LBMT">{{$tallasM['M']}}</span> --}}
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-6">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Grande (L)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14XBMP">{{$tallas['talla_l_h']}}</span>
                                                    {{-- /<span class="14XBMT">{{$tallasM['L']}}</span> --}}
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-6">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Extra Grande (XL)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14XBMP">{{$tallas['talla_xl_h']}}</span>
                                                    {{-- /<span class="14XBMT">{{$tallasM['XL']}}</span> --}}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12" style="margin-top: 30px;">
                                        <div class="font-w700 text-gray-darker animated fadeIn">Mujeres</div><br>
                                        <div class="col-xs-6 col-sm-4">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Chica (S)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14SBFP">{{$tallas['talla_s_m']}}</span>
                                                    {{-- /<span class="14SBFT">{{$tallasF['S']}}</span> --}}
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-4">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Mediana (M)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14MBFP">{{$tallas['talla_m_m']}}</span>
                                                    {{-- /<span class="14MBFT">{{$tallasF['M']}}</span> --}}
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-4">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Grande (L)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14LBFP">{{$tallas['talla_l_m']}}</span>
                                                    {{-- /<span class="14LBFT">{{$tallasF['L']}}</span> --}}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12" style="margin-top: 30px;">
                                        <div class="font-w700 text-gray-darker animated fadeIn">Infantil</div><br>
                                        <div class="col-xs-12 col-sm-4">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Infantil (6)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14LBFP">{{$tallas['talla_6']}}</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-xs-12 col-sm-4">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Infantil (8)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14LBFP">{{$tallas['talla_8']}}</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-4">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Infantil (10)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14LBFP">{{$tallas['talla_10']}}</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-4">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Infantil (12)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14LBFP">{{$tallas['talla_12']}}</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12">
                                            <div class=" text-gray-darker animated fadeIn">
                                                Infantil (14)<br>
                                                <label class="h2 font-w300 text-primary animated flipInX">
                                                    <span class="14LBFP">{{$tallas['talla_14']}}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <table class="table table-bordered table-striped js-dataTable-normal">
                            <thead>
                                <tr>
                                    <th class="text-center"></th>
                                    <th>FechaRegistro</th>
                                    <th>Nombre</th>
                                    <th>Teléfono</th>
                                    <th>Email</th>
                                    <th>Categoría</th>
                                    <th></th>
                                    <th>Opción</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                        <hr>
                        <div id="mensaje"></div>
                        <hr>
                    </div>
                </div>
            </div>

            <!-- Fade In Modal-->
            <a id="btnAA" data-toggle="modal" data-target="#modal-fadein" data-keyboard="false" data-backdrop="static" type="button">&nbsp;</a>

            <div class="modal fade" id="modal-fadein" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form class="js-validation-material form-horizontal push-10-t push-10" id="formCOmpleto" action="base_forms_validation.php" method="post">
                            <div class="block block-themed block-transparent remove-margin-b">
                                <div class="block-header bg-primary-dark">
                                    <h3 class="block-title">Datos del Participante</h3>
                                </div>
                                <div class="block-content">
                                    <div class="form-group col-md-3">
                                        <div class="col-md-12 push-10">
                                            <div class="form-material">
                                                <input class="form-control" type="text" id="nCorredor" name="nCorredor" placeholder="nCorredor" readonly value="000">
                                                <label for="val-corredor">Núm.Corredor</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <div class="col-md-12 push-10">
                                            <div class="form-material">
                                                <input class="form-control" type="text" id="nParticipante" name="nParticipante" placeholder="Nombre del participante">
                                                <label for="val-username2">Nombre Completo</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group  col-md-6">
                                        <div class="col-md-12 push-10">
                                            <div class="form-material">
                                                <select class="form-control" id="nCategoria" name="nCategoria">
                                                    <option value=""></option>
                                                </select>
                                                <label for="val-password2">Categorias</label>
                                            </div>
                                        </div>
                                    </div>
                                    {{-- <div class="form-group  col-md-6">
                            <div class="col-md-12 push-10">
                                <div class="form-material">
                                    <select class="form-control" id="nPaquete" name="nPaquete">
                                        <option value=""></option>
                                    </select>
                                    <label for="val-password2">Paquete</label>
                                </div>
                            </div>
                        </div> --}}
                                    <div class="form-group  col-md-6">
                                        <div class="col-md-12 push-10">
                                            <div class="form-material">
                                                <select class="form-control" id="nDistancia" name="nDistancia">
                                                    <option value=""></option>
                                                </select>
                                                <label for="val-password2">Distancias</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <div class="col-md-12 push-10">
                                            <div class="form-material">
                                                <input class="form-control" type="text" id="tParticipante" name="tParticipante" placeholder="# Télefono del participante" maxlength="10">
                                                <label for="val-email2">Télefono</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group  col-md-6">
                                        <div class="col-md-12 push-10">
                                            <div class="form-material">
                                                <input class="form-control" type="email" id="eParticipante" name="eParticipante" placeholder="Email de participante">
                                                <label for="val-password2">Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group  col-md-6">
                                        <div class="col-md-12 push-10">
                                            <div class="form-material">
                                                <input class="form-control" type="text" id="edParticipante" name="edParticipante" placeholder="Edad">
                                                <label for="val-password2">Edad</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group  col-md-6">
                                        <div class="col-md-12 push-10">
                                            <div class="form-material">
                                                <input class="form-control" type="text" id="eClub" name="eClub" placeholder="Club">
                                                <label for="eClub">Club</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group  col-md-6">
                                        <div class="col-md-12 push-10">
                                            <div class="form-material">
                                                <select class="form-control" id="tPlayera" name="tPlayera">
                                                    <option value=""></option>
                                                    <option value="NA">No aplica</option>
                                                </select>
                                                <label for="val-password2">Talla del jersey</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <div class="col-sm-12 push-10">
                                            <div class="form-material">
                                                <select class="form-control" id="sParticipante" name="sParticipante">
                                                    <option value="">Elija una opción</option>
                                                    <option value="M">Hombre</option>
                                                    <option value="F">Mujer</option>
                                                </select>
                                                <label for="val-skill2">Sexo</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <div class="col-sm-12 push-10">
                                            <div class="form-material">
                                                <select class="form-control" id="fpago" name="fpago">
                                                </select>
                                                <label for="val-skill2">Forma de pago</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <div class="form-material">
                                                <textarea class="form-control" id="peParticipante" name="peParticipante" rows="3" placeholder="Ingrese la o las enfermedades que padece el participante"></textarea>
                                                <label for="val-suggestions2">Padecimiento Enfermedad</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <div class="form-material">
                                                <textarea class="form-control" id="paParticipante" name="paParticipante" rows="3" placeholder="Ingrese la o las alegrías que padece el participante"></textarea>
                                                <label for="val-suggestions2">Padecimientos de Alergías</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-header bg-primary-dark">
                                    <h3 class="block-title">Avisar en caso de accidente</h3>
                                </div>
                                <div class="block-content">
                                    <div class="form-group  col-md-6">
                                        <div class="col-sm-12">
                                            <div class="form-material">
                                                <input class="form-control" type="text" id="nTitular" name="nTitular" placeholder="Nombre del titular">
                                                <label for="val-website2">Nombre</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group  col-md-6">
                                        <div class="col-sm-12">
                                            <div class="form-material">
                                                <input class="form-control" type="text" id="tTitular" name="tTitular" placeholder="Número de télefono" maxlength="10">
                                                <label for="val-digits2">Número de Télefono</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div class="form-group col-md-8" id="msjModalBoxEvent">
                                </div>
                                <div class="form-group  col-md-4">
                                    <input type="hidden" name="idP" id="idP" value="" placeholder="">
                                    <input type="hidden" name="par_" id="par_" value="" placeholder="">
                                    <button class="btn btn-sm btn-default" id="btnReset" type="button" data-dismiss="modal">Cerrar</button>
                                    <button class="btn btn-sm btn-primary" type="submit"><i class="fa fa-check"></i> Guardar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Modal Users -->
            <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">Control de Usuarios</h4>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label>Usuario: </label>
                                    <select class="form-control" id="id">
                                    </select>
                                </div>
                                <hr>
                                <div class="form-group">
                                    <label>User:</label>
                                    <input type="email" class="form-control" id="user" placeholder="example@example.com">
                                </div>
                                <div class="form-group">
                                    <label>Pass:</label>
                                    <input type="password" class="form-control" id="pass" placeholder="De 6 a 16 Caracteres" minlength="6" maxlength="16">
                                </div>
                                <div class="form-group">
                                    <label>Tipo: </label>
                                    <select class="form-control" id="type">
                                        <option value="1">Usuario</option>
                                        <option value="0">Administrador</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="cancel-user" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                            <button type="button" id="save-user" class="btn btn-primary">Guardar Cambios</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--.Modal Users -->

            <a data-featherlight="#F15" id="clickEvent" class="lightbox" href="#">Click</a>
            <iframe class="lightbox" src="" width="800" height="581" id="F15" style="border:none;" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

            <style type="text/css" media="screen">
                .yadcf-filter-wrapper {
                    color: #fff;
                }

                .yadcf-filter {
                    background-color: #0d2659;
                }

                .yadcf-filter option {
                    background-color: #0d2659;
                }

                .lightbox {
                    display: none;
                }

                /* override default feather style... */
                .fixwidth {
                    background: rgba(256, 256, 256, 0.8);
                }

                .fixwidth .featherlight-content {
                    width: 500px;
                    padding: 25px;
                    color: #fff;
                    background: #111;
                }

                .fixwidth .featherlight-close {
                    color: #fff;
                    background: #333;
                }


                #nCorre {
                    display: block !important;
                }

                .form-horizontal .form-group {
                    margin-left: 0px;
                    margin-right: 0px;
                }

                .form-horizontal .col-md-6 {
                    padding: 0;
                    width: 50%;
                }

                .customErrorClass {
                    display: block;
                    padding-top: 5px;
                    color: red;
                }
            </style>
            <!--cript src="http://jquery-datatables-column-filter.googlecode.com/svn/trunk/media/js/jquery.dataTables.columnFilter.js"></script-->
            @stop