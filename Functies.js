function LaadPagina (PagN) {
	var LoginI = JSON.parse(localStorage.getItem('LoginI'));
	PageContent = $(LoginI.Htmlpag[PagN]);
     $("#Wrapper").replaceWith(PageContent);
	 if((LoginI.Uname == "admin") && (PagN === 0)){
				$("#Wrapper").append("<button onclick=\"LaadAdminPag();\">Ga naar Configuratie pagina</button>");
	}
}

function LogUit (){
	localStorage.removeItem("LoginI");
	location.reload();
}

function preloadSource(src) {
    $('<img/>')[0].src = src;
}

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function verschwijnen(i,g){
	var volgende = i + 1;
    vragen++;
	if (g==1){
        goede_antwoorden++;
    }
	$(".goed").css('background', 'green');	
	$(".fout").css('background', 'red');
    setTimeout(function(){
        $( "#" + i ).hide();
        $(".goed").css('background', 'white');	
        $(".fout").css('background', 'white');
        $("#" + volgende ).show();
        },1500
    );
    if (vragen == 3){
        $(".FlexContainer").append("Score is " + goede_antwoorden +"/3");
        
    }
  }
function MeerkeuzeHtml (Obj){
	var i = 0;
	var GekozenVragen = new Object();
	while (i === 0){
		var randomNummer = "Vraag" + Math.floor(Math.random() * (Object.keys(Obj).length));
		GekozenVragen[randomNummer] =  Obj[randomNummer];
		if (Object.keys(GekozenVragen).length == 3 ){
			i = 1;
			}
	}
    var html = [];
    for (var i = 0; i<3; i++){
        var vraag = Object.keys(GekozenVragen)[i]; 
        html.push(`<div class="vraag_antwoorden" id="`+ i+`"><div class="rechts vraag">` + GekozenVragen[vraag].vraag + `</div><div class="links">`);
        var antwoorden = [];
        antwoorden.push(`<button class = "keuze goed"  onclick= "verschwijnen(`+i+`,1);">`+ GekozenVragen[vraag].antwoord  +`</button><br>`);
        
        for (var j = 0; j<3; j++){
            antwoorden.push(`<button class ="keuze fout" onclick= "verschwijnen(`+i+`,0);">`+ GekozenVragen[vraag].keuzes[j] +`</button><br>`);
        }
        shuffle(antwoorden);
        html.push(antwoorden.join("") + `</div></div>`)  ; 
    }
	$( document ).ready(function() {
		$(".FlexContainer").append(html.join("") + `</div>`);
		$( "#1").hide();
		$( "#2").hide();
	});
}

function LaadAdminPag(){
	var LoginI = JSON.parse(localStorage.getItem('LoginI'));
	PageContent = $(LoginI.AdminPag);
    $("#Wrapper").replaceWith(PageContent);
}

function galgjeSetup(Obj){
	var randomNummer = "woord" + Math.floor(Math.random() * (Object.keys(Obj).length));
	var GekozenWoord =  Obj[randomNummer];
	return GekozenWoord;
}
