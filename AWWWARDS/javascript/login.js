$(document).ready(function(){

    username=$.cookie('username');
    pwd = $.cookie('pwd');

    data = 0;
    data = $.cookie('data');



    if(data){
        $(":submit").click(function(){
            if($("#user").val() == username && $("#pwd").val() == pwd){
                alert("success");
                $.cookie('username', $("#user").val());
                $.cookie("loginstate", 1);
                parent.location.href = "index.html";
            }
            else
            {
                $(".errorinfo").text("Username or Password may be wrong !");
            }
        });
    }

        $(":submit").click(function(){
            if($("#user").val() == "zoi" && $("#pwd").val() == "zoi123"){
                alert("success");
                $.cookie('username', $("#user").val());
                $.cookie("loginstate", 1);
                parent.location.href = "index.html";
            }
            else
            {
                $(".errorinfo").text("Username or Password may be wrong !");
            }
        });
    

})