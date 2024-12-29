@extends('icontrol.layouts.default')
@section('content')
    
<div class="content overflow-hidden">
    <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <div class="block block-themed animated fadeIn">
                <div class="block-header bg-primary">
                    <h3 class="block-title">Entrar</h3>
                </div>
                <div class="block-content block-content-full block-content-narrow">
                    <h1 class="h2 font-w600 push-30-t push-5 ">{{$titulo}}</h1>
                    <form class="js-validation-login form-horizontal push-30-t push-50" method="post">
                        @csrf
                        <div id="Message">
                            
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <div class="form-material form-material-primary floating">
                                    <input class="form-control" type="text" id="email" name="email" autofocus="true">
                                    <label for="login-username">Nombre de usuario</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <div class="form-material form-material-primary floating">
                                    <input class="form-control" type="password" id="password" name="password">
                                    <label for="login-password">Contraseña</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <button class="btn btn-block btn-primary" type="submit"><i class="si si-login pull-right"></i> Entrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="push-10-t text-center animated fadeInUp">
    <small class="text-muted font-w600"><span class="js-year-copy"></span> &copy; </small>
</div>
@stop