$( document ).ready(function() {
    var localLogin = JSON.parse(localStorage.getItem('LoginI'));
	var sessionLogin = JSON.parse(sessionStorage.getItem('LoginI'));
        if( localLogin.Uname !== null || sessionLogin.Uname !== null){
            LaadPagina(0);
			console.log(1);
			preloadSource('lock.png');
		} else {

        }
  
});

$(function () {
    $('form').on('submit', function (e) {
       e.preventDefault(); //stopt de pagine laden
       $.ajax({
            type: 'POST',
            url: 'login.php',
            data: $('form').serialize(), //serialize veranderd data naar soort van get url ?username=abdc&wactwoord=13123
            success: function (data) {
                localStorage.setItem('http://listory.helenparkhurst.net/LoginI', data);
				var localLogin = JSON.parse(localStorage.getItem('LoginI'));
                LaadPagina(0);
                preloadSource('lock.png');
                var info = `Username : ` + localLogin.Uname +
		          `<button onclick="LogUit();"> Log Uit</button>`;
                console.log(info);
                $("#info").append(info);
				 
            },
            error: function () {
               alert('Uw inlog gegevens kloppen niet');
            }
        });
   });
});

$(window).bind('beforeunload', function(){
  var localLogin = JSON.parse(localStorage.getItem('LoginI'));
  if(not(localLogin.RememberMe == "on")){
	localStorage.removeItem("LoginI");
}
});
