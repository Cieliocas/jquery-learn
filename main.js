$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').on('click', function(){
        $('form').slideUp();
    })

    $('form').on('submit', function() {
        console.log('submit');
        e.preventDefault();
    });
});
