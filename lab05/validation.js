(function () {
    var password1 = document.getElementById("password");
    var password2 = document.getElementById("password_confirm");

    var checkPasswordValidity = function () {
        if (password1.value !== password2.value) {
            password2.setCustomValidity('Password must match.');
            console.log('not match')
        } else {
            console.log('match')
            password2.setCustomValidity('');
        };
    };
    password1.onchange = checkPasswordValidity;
    password2.onchange = checkPasswordValidity;
}());