var fireBaseAuth = firebase.auth()
$("#signin").click(function () {
    var fromLogin = {
        email: $("#email").val(),
        pass: $("#password").val()
    }
    fireBaseAuth.signInWithEmailAndPassword(fromLogin.email, fromLogin.pass).then(function (success) {
        $("#signin").hide()
        $("#signup").hide()
        $("#signout").show()
        $("#lbPassword").hide()
        $("#logInFail").hide()
        $("#email").val("")
        $("#password").val("")
        $("#frmLogin").hide()
        $("#btnRes").hide()
        $('.btnModel').prop('disabled', false)
        $('.btnModel2').prop('disabled', false)
    }, function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            $("#password").css("border-color", "red solid 1px");
            $("#lbPassword").show();
        } else {
            $("#logInFail").show()
        }
        console.log(error);
    })
})
$("#signout").click(function () {
    if (fireBaseAuth.currentUser) {
        fireBaseAuth.signOut().then(function () {
            $("#frmLogin").show()
            $("#signin").show()
            $("#btnRes").show()
            $("#signup").show()
            $("#signout").hide()          
            $('.btnModel').prop('disabled', true)
            $('.btnModel2').prop('disabled', true)
        }, function (error) {
            alert("Not Logout!");
        });
    }
})


$("#signup").click(function () {
    $("#lbPasswordsignup").hide()
    $("#logInFail").hide()
    var fromSignUp = {
        email: $("#emailsignup").val(),
        pass: $("#passwordsignup").val()
    }
    fireBaseAuth.createUserWithEmailAndPassword(fromSignUp.email, fromSignUp.pass).then(function () {
        alert("สมัครสมาชิกเสร็จเรียบร้อย");
    }, function (error) {
        alert("กรอกข้อมูลไม่ครบ");
    })
})



