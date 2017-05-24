$(function () {
    $('form').on('submit', function (e) {
       e.preventDefault(); //stopt de pagine laden
       $.ajax({
           type: 'post', 
           url: 'listory.helenparkhurst.net/login.php',
           data: $('form').serialize(), //serialize veranderd data naar soort van get url ?username=abdc&wactwoord=13123
          dataType: 'jsonp',
          crossDomain: true,
           success: function () {
               alert('form was submitted');
           },
           error: function () {
               alert('rip');
           }
        });

   });
});