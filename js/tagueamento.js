// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

$(document).ready(function() {

    $('.menu-lista-contato').on('click', function() {             
        ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');       
     });

     $('.menu-lista-download').on('click', function() {                  
        ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');       
     });
     
     $('.card-montadoras').on('click', function() {
        var card_conteudo = $(this).attr('data-name');    
        alert(card_conteudo);   
        ga('send', 'event', 'analise', 'ver_mais', card_conteudo);   
      });
    

     $('#form_contato input').change(function(){        
        var id_element = $(this).attr('id');
        if($(this).val()){      
            ga('send', 'event', 'contato', id_element, 'preencheu'); 
        }
    });

    $('#form_contato').submit(function(){
        alert("Formulário foi enviado!");            
        ga('send', 'event', 'contato', 'enviado', 'enviado'); 
        
    });

});