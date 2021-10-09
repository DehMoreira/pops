var novelas = [{tit: "da cor do pecado"},
                {tit: "estrela guia"},
                {tit: "boogie oogie"},
                {tit: "avenida brasil"},
                {tit: "bela a feia"},
                {tit: "paraiso"},
                {tit: "por amor"},
                {tit: "o outro lado do paraiso"},
                {tit: "pantanal"},
                {tit: "passione"},
                {tit: "a gata comeu"},
                {tit: "cheias de charme"},
                {tit: "bom sucesso"},
                {tit: "sinha moca"},
                {tit: "verao 90"},
                {tit: "porto dos milagres"},
                {tit: "o profeta"},
                {tit: "era uma vez"},
                {tit: "floribella"},
                {tit: "duas caras"},
                {tit: "a escrava isaura"},
                {tit: "cama de gato"},
                {tit: "cabocla"},
                {tit: "roque santeiro"},
                {tit: "pe na jaca"},
                {tit: "pequena travessa"},
                {tit: "o beijo do vampiro"},
                {tit: "alto astral"},
                {tit: "irmaos coragem"},
                {tit: "o setimo guardiao"},
                {tit: "verdades secretas"},
                {tit: "o rei do gado"},
                {tit: "a favorita"},
                {tit: "caminhos do coracao"},
                {tit: "chocolate com pimenta"},
                {tit: "morde e assopra"},
                {tit: "esmeralda"},
                {tit: "orfaos da terra"},
                {tit: "negocio da china"},
                {tit: "o cravo e a rosa"},
                {tit: "a padroeira"},
                {tit: "cumplices de um resgate"},
                {tit: "eterna magia"},
                {tit: "kubanacan"},
                {tit: "uga uga"},
                {tit: "marisol"},
                {tit: "eta mundo bom"},
                {tit: "as filhas da mae"},
                {tit: "a viagem"},
                {tit: "o clone"},
                {tit: "prova de amor"},
                {tit: "a regra do jogo"},
                {tit: "um anjo caiu do ceu"},
                {tit: "o tempo nao para"},
                {tit: "a vida da gente"},
                {tit: "carrossel"},
                {tit: "alma gemea"},
                {tit: "senhora do destino"},
                {tit: "sete pecados"},
                {tit: "coracao de estudante"},
                {tit: "deus salve o rei"},
                {tit: "saramandaia"},
                {tit: "mulheres de areia"},
                {tit: "explode coracao"}]
var pontos = 0;

    /* botões do player*/
    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');

    /* player */
    const audio_player = document.getElementById('music-player');



window.onload = () => {

    play_btn.addEventListener('click', TogglePlaySong);

    InitPlayer();

function InitPlayer() {
    audio_player.src = "musicas/msc1.mp3";
}


function TogglePlaySong() {
    if (audio_player.paused) {
        audio_player.play();
        play_btn_icon.classList.remove('fa-play');
        play_btn_icon.classList.add('fa-pause');
        setTimeout(function(){
            play_btn_icon.classList.add('fa-play');
            play_btn_icon.classList.remove('fa-pause');
        }, 12000);
    } else {
        audio_player.pause();
        play_btn_icon.classList.add('fa-play');
        play_btn_icon.classList.remove('fa-pause');

    }
}


}

function atualiza(i) {
    var aux = ("musicas/msc") + (i) + (".mp3");
    audio_player.src = aux;
    play_btn_icon.classList.add('fa-play');
    play_btn_icon.classList.remove('fa-pause');
    if (i>1){
        var imagem = document.getElementById("song-image");
        var novela = document.getElementById("name-novel");
        imagem.style.backgroundImage= "url('../imagens/figInicio.jpg";
        novela.innerHTML = ("Novela ") + i;
        document.getElementById('palpite').value='';  // Limpa o campo
    }
  }
  


function Verifica(verifica){

    var palpite = verifica.value.toLowerCase();
    var teste = document.getElementById("name-novel").firstChild.nodeValue;
    var imagem = document.getElementById("song-image");

    var b = teste.split(" ");
    indice = b[1] - 1;
    
  

    if(novelas[indice].tit == palpite){
        //var aux = ("url(") + (novelas[indice].img) + (")");
        imagem.style.backgroundImage = "url('../imagens/certo.png";
        imagem.style.backgroundSize = "cover";
        imagem.style.backgroundRepeat = "no-repeat"; 
        imagem.style.backgroundPosition = "right"; 
        pontos = 1 + pontos;
        var x = parseInt(b[1]);
        var i = x + 1;
        document.getElementById("name-novel").innerHTML = novelas[indice].tit.toUpperCase();

        setTimeout(function() {
            atualiza(i);
          }, 3500);
        
        return false;
    }

    else{
        
        imagem.style.backgroundImage= "url('../imagens/x.jpg";
        return false;
    }
}


