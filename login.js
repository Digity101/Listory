$(function () {
    $('form').on('submit', function (e) {
       e.preventDefault(); //stopt de pagine laden
       $.ajax({
            type: 'POST',
            CrossDomain: true,
            url: 'http://listory.helenparkhurst.net/login.php',
            data: $('form').serialize(), //serialize veranderd data naar soort van get url ?username=abdc&wactwoord=13123
           success: function (data) {
               alert(data);
           },
           error: function () {
               alert('rip');
           }
        });
   });
});
