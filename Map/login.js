$( document ).ready(function() {
    var localLogin = JSON.parse(localStorage.getItem('LoginI'));
	var sessionLogin = JSON.parse(sessionStorage.getItem('LoginI'));
        if( localLogin.Uname !== null || sessionLogin.Uname !== null){
            LaadPagina(0);
		} else {

        }
  
});

$(function () {
    $('form').on('submit', function (e) {
       e.preventDefault(); //stopt de pagine laden
       $.ajax({
            type: 'POST',
            CrossDomain: true,
            url: 'login.php',
            data: $('form').serialize(), //serialize veranderd data naar soort van get url ?username=abdc&wactwoord=13123
            success: function (data) {
			var login = JSON.parse(data);
			if (login.RememberMe == "on"){
				localStorage.setItem('LoginI', data);
			}else{
				sessionStorage.setItem('LoginI', data);
			}
			LaadPagina(0);
            localStorage.setItem('Page', 0);
            },
            error: function () {
               alert('rip');
            }
        });
   });
});
