
<!DOCTYPE html>
<html lang="en">
<head>
    @include('icontrol.includes.head')
</head>
<body>
    <header id="header-navbar" class="content-mini content-mini-full">
        @include('icontrol.includes.header')
    </header>

    @yield('content')

    <footer>
        @include('icontrol.includes.footer')
    </footer>
</body>
</html>