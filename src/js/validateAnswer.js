$(document).ready(function(){
    $("#ans1").click(function(){
      $("#responseTile").hide();
       $("#responseTile2").show();
    });
    $("#ans2").click(function(){
       $("#responseTile2").hide();
       $("#responseTile").show();
        $("#ans1").prop("disabled",true);
        $("#ans2").prop("disabled",true);
    });
});
