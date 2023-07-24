$(document).ready(function () {
    $('form').on('submit', function (e) {
    e.preventDefault();
    const nomeDaAtivade = $('#nome-atividade').val().trim();
    
    if (nomeDaAtivade !== "") {
        const novoItem = $('<li></li>');
        $(`<li>${nomeDaAtivade}</li>`).appendTo(novoItem);
        novoItem.appendTo('#lista');
        $('#nome-atividade').val('');
    }
    });

    $('#lista').on('click', 'li', function () {
    $(this).toggleClass('feito');
    });
});