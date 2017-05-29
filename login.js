$(function () {
    $('form').on('submit', function (e) {
       e.preventDefault(); //stopt de pagine laden
       $.ajax({
           type: 'post', 
           url: 'login.php',
           data: $('form').serialize(), //serialize veranderd data naar soort van get url ?username=abdc&wactwoord=13123
           success: function () {
               alert('form was submitted');
           },
           error: function () {
               alert('rip');
           }
        });

   });
});