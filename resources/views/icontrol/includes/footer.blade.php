<script src="{{asset('js/core/jquery.min.js')}}"></script>
<script src="{{asset('js/core/bootstrap.min.js')}}"></script>
<script src="{{asset('js/core/jquery.slimscroll.min.js')}}"></script>
<script src="{{asset('js/core/jquery.scrollLock.min.js')}}"></script>
<script src="{{asset('js/core/jquery.appear.min.js')}}"></script>
<script src="{{asset('js/core/jquery.countTo.min.js')}}"></script>
<script src="{{asset('js/core/jquery.placeholder.min.js')}}"></script>
<script src="{{asset('js/core/js.cookie.min.js')}}"></script>
<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('js/jquery.validate.min.js')}}"></script>
<script>
    @php($path = url('/icontrol'))
    var path = `{{$path}}`
    // $('#carreras').select2();

    $(".content .block ul.nav.nav-tabs li:nth-last-child(1)").addClass('active');
    $(".content .block .block-content.tab-content div:nth-last-child(1)").addClass('in active');

    /* Carrera Asotffi */
    function loadDashboard(x = 0, y = [], action){
        arrayData(y, '<i class="fa fa-cog fa-spin"></i>');
        $.post('indicators.php', {action: action, param: x})
        .done(function(response){
            //console.log(response);
            var data = JSON.parse(response);
            arrayData(y, data);
        })
        .fail(function(){
            console.log('Fallamos :(');
        });
    }


    function arrayData(z = [], txt){
        //console.dir(z);
        if (( typeof txt) == 'string') {
            for (var i=0; i<z.length; i++) {
                $('.'+z[i]).empty();
                $('.'+z[i]).append(txt);
            }
        }else{
            for(var i=0; i<z.length; i++){
                $('.'+z[i]).empty();
                $('.'+z[i]).append(txt[i]);
            }
        }
    }
    let triLed = ["0","1","2","3","4","5","6","7","8","9", "10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31",
					  "32","33","43","35","36","37","38","39", "61FL1", "6110BUT", "61FL2", "6112BUT", "61FL3", "6114BUT", "61FP0", "61FP1", "61FP2", "61FP3"];
    loadDashboard(67, triLed, 'Led');
</script>
<script src="{{asset('js/base_pages_login.js')}}"></script>
<script src="{{asset('js/plugins/jquery-validation/jquery.validate.min.js')}}"></script>
<script src="{{asset('js/jquery.amaran.min.js')}}"></script>
<script src="{{asset('js/plugins/datatables/jquery.dataTables.min.js')}}"></script>
<script src="{{asset('js/plugins/jquery.dataTables.yadcf.js')}}"></script>
<script src="//cdn.rawgit.com/noelboss/featherlight/1.3.5/release/featherlight.min.js" type="text/javascript" charset="utf-8"></script>
<script src="{{asset('js/pages/base_tables_datatables.js')}}"></script>
<script src="{{asset('js/plugins/datatables/jquery.jeditable.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.4/js/select2.min.js"></script>