$(document).ready(function() {

    $(document).foundation();

    loginstate = $.cookie('loginstate');
    username=$.cookie('username');

    if(loginstate == 1){
        $("#loginstate").html(username);
        $(".box-right").prop("disabled", true);

    }
    $(":button").click(function(){
        if(loginstate != 1)
        {
            alert("请登录后，再进行此操作");
            window.location.href = 'login.html';
        }
    });

    $(".box-pic").mouseenter(function(){
        $(this).find("button").fadeToggle(300);
        $(this).find(".button-pic").fadeToggle(300);
    });

    $(".box-pic").mouseleave(function(){
        $(this).find("button").fadeToggle(300);
        $(this).find(".button-pic").fadeToggle(300);
    });

    $(".button-heart").click(function(){
        $(this).children("i").css("color", "red");
        return false;
    });



})