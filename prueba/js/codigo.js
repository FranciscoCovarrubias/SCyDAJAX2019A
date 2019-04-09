$(function(){

    var config={
        func : function(resp){
            if(resp!=1){
                $.liga('mensaje','Hubo un error');
            }else{
                $('#divTabla').load('tabla.php');
                $('#algocual').load('selector.php');
            }
        }
    };
    $('form').liga('AJAX', config);
});