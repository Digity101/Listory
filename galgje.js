var GalgjeWoorden = {
    woord0:{
        woord:"vaderlandsliefde",
        betekenis:`In de literatuur werd veel aandacht op de grootheid van het nationale verleden gericht. verleden werd beschreven om er lessen voor het heden uit af te leiden.`
    },
    woord1:{
        woord:`grumor`,
        betekenis: `Grumor is een combinatie tussen humor en griezelen.`
    },
    woord2:{
        woord:`domineedichter`,
        betekenis: `schrijvers die ook dominee waren`
    },
    woord3:{
        woord:`autonoom`,
        betekenis:`hiermee wordt de literatuur bedoeld die werd geschreven zonder belemmerende of opvoedkundige bedoeling.`
    },
    woord4:{
        woord:`tegencultuur`,
        betekenis: `een groep mensen die zich afzet tegen de dominante cultuur. in de negentiende eeuw was de beweging van tachtig zo een tegencultuur. Ze zetten zich af tegen de massacultuur.
`
    },
    woord5:{
        woord:`stemmingskunst`,
        betekenis: `een weergave van stemming en/of emotie.`
    },
    woord6:{
        woord: `cultuursprookje`,
        betekenis: `dit is een sprookje die door een schrijver bedacht is.`
    },
    woord7:{
        woord: `massalectuur`,
        betekenis:`19de eeuw steeg de vraag naar boeken in de steden. Met massalectuur worden boeken die zich richten op een groot koperspubliek bedoeld.
`
    },
    woord8:{
        woord:`volkssprookje`,
        betekenis:`oud, mondeling overgeleverd volksverhaal waarin heksen, sprekende dieren en andere fantastische elementen de hoofdrol hadden.`,
    },
    woord9:{
        woord:`noodlot`,
        betekenis:`het leven van de mens wordt bepaald door buiten hem staande omstandigheden waar hij geen grip op kan krijgen`
    },

}

var aantalFouten = 0;
var GekozenWoord = galgjeSetup(GalgjeWoorden);
var Woord = GekozenWoord.woord.split('');
var streep = [];
for (var i = 0; i < Woord.length; i++){
	streep.push("_");
}
$( document ).ready(function() {
	$(".galgwoord").append(streep.join(" "));
});

function raden(letter){
    if ($.inArray(letter,Woord) !== -1){
        for(i = 0; i<Woord.length;i++){
            if (Woord[i] == letter){
                streep[i] = letter;
                $(".galgwoord").html(streep.join(" "));
             }
            }
    }else{
        aantalFouten++;
        switch(aantalFouten) {
            case 0: $(".galg").html(`<img src="galg/13.png">`);
                    break;
            case 1: $(".galg").html(`<img src="galg/12.png">`);
                    break;
            case 2: $(".galg").html(`<img src="galg/11.png">`);
                    break;
            case 3: $(".galg").html(`<img src="galg/10.png">`);
                    break;
            case 4: $(".galg").html(`<img src="galg/9.png">`);
                    break;
            case 5: $(".galg").html(`<img src="galg/8.png">`);
            break;
            case 6: $(".galg").html(`<img src="galg/7.png">`);
                    break;
            case 7: $(".galg").html(`<img src="galg/6.png">`);
                    break;
            case 9: $(".galg").html(`<img src="galg/5.png">`);
                    break;
            case 10: $(".galg").html(`<img src="galg/4.png">`);
                    break;
            case 11: $(".galg").html(`<img src="galg/3.png">`);
                    break;
            case 12: $(".galg").html(`<img src="galg/2.png">`);
                    break;
            case 13: $(".galg").html(`<img src="galg/1.png">`);
                    break;
            default:
        }
        $("#kansen").html(13-aantalFouten);
        if (aantalFouten == 13){
            alert("Volgende keer beter!"); 
        }
    }
    if ($.inArray("_",streep) == -1){
        alert("Jij hebt het geraden");
    }
    $(`#`+letter).replaceWith(`<div class="letter geklikt" >`+letter.toUpperCase()+`</div>`);
}
