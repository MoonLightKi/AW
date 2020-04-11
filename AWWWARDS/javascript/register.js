$(document).ready(function(){
    var f = true;

    $("#keepstate").click(function(){
        f = !f;
    });


    $("#btn_register").click(function(){
        f = true;
        var username = $("#username").val();
        var pwd = $("#pwd").val();
        var rpwd = $("#rpwd").val();
        if(username.length < 6 || username.length > 15){
            f = false;
            $("username").css("border-color", "red");
            alert("Error: Please enter into username more than 6 words")
        }

        if(pwd.length < 6){
            f = false;
            $("username").css("border-color", "red");
            alert("Error: Please enter into password more than 6 words")
        }else{
            if(pwd != rpwd){
                f =false;
                $("username").css("border-color", "red");
                alert("Error: password validating is not right")
            }
        }

        if(!$("#keepstate").prop("checked")){
            f = false;
        }


        if(f == true){
            $.cookie('username', username);
            $.cookie('pwd', pwd);
            $.cookie('data', 1);
            alert($.cookie('username'));
            $(location).prop('href', 'login.html');
        }
    });
})