<ul class="nav-header pull-right">
    <li>
        <div class="btn-group">
            <button class="btn btn-default btn-image dropdown-toggle" data-toggle="dropdown" type="button">
                <img src="{{asset('img/avatars/avatar10.jpg')}}" alt="Avatar">
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-right">
                <li class="dropdown-header">Acciones</li>
                
                <li>
                    <a tabindex="-1" href="#" id="modal-users" data-toggle="modal" data-target=".bs-example-modal-sm" data-keyboard="false" data-backdrop="static">
                        <i class="fa fa-users pull-right"></i>Usuarios
                    </a>
                </li>
                
                <li>
                    <a tabindex="-1" href="{{route('signout')}}">
                        <i class="si si-logout pull-right"></i>Salir
                    </a>
                </li>
            </ul>
        </div>
    </li>
</ul>