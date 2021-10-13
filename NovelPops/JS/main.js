let novelas = [{tit: "da cor do pecado", stat: false},
                {tit: "estrela guia", stat:false},
                {tit: "boogie oogie", stat:false},
                {tit: "avenida brasil", stat:false},
                {tit: "bela a feia", stat:false},
                {tit: "paraiso", stat:false},
                {tit: "por amor", stat:false},
                {tit: "o outro lado do paraiso", stat:false},
                {tit: "pantanal", stat:false},
                {tit: "passione", stat:false},
                {tit: "a gata comeu", stat:false},
                {tit: "cheias de charme", stat:false},
                {tit: "bom sucesso", stat:false},
                {tit: "sinha moca", stat:false},
                {tit: "verao 90", stat:false},
                {tit: "porto dos milagres", stat:false},
                {tit: "o profeta", stat:false},
                {tit: "era uma vez", stat:false},
                {tit: "floribella", stat:false},
                {tit: "duas caras", stat:false},
                {tit: "a escrava isaura", stat:false},
                {tit: "cama de gato", stat:false},
                {tit: "cabocla", stat:false},
                {tit: "roque santeiro", stat:false},
                {tit: "pe na jaca", stat:false},
                {tit: "pequena travessa", stat:false},
                {tit: "o beijo do vampiro", stat:false},
                {tit: "alto astral", stat:false},
                {tit: "irmaos coragem", stat:false},
                {tit: "o setimo guardiao", stat:false},
                {tit: "verdades secretas", stat:false},
                {tit: "o rei do gado", stat:false},
                {tit: "a favorita", stat:false},
                {tit: "caminhos do coracao", stat:false},
                {tit: "chocolate com pimenta", stat:false},
                {tit: "morde e assopra", stat:false},
                {tit: "esmeralda", stat:false},
                {tit: "orfaos da terra", stat:false},
                {tit: "negocio da china", stat:false},
                {tit: "o cravo e a rosa", stat:false},
                {tit: "a padroeira", stat:false},
                {tit: "cumplices de um resgate", stat:false},
                {tit: "eterna magia", stat:false},
                {tit: "kubanacan", stat:false},
                {tit: "uga uga", stat:false},
                {tit: "marisol", stat:false},
                {tit: "eta mundo bom", stat:false},
                {tit: "as filhas da mae", stat:false},
                {tit: "a viagem", stat:false},
                {tit: "o clone", stat:false},
                {tit: "prova de amor", stat:false},
                {tit: "a regra do jogo", stat:false},
                {tit: "um anjo caiu do ceu", stat:false},
                {tit: "o tempo nao para", stat:false},
                {tit: "a vida da gente", stat:false},
                {tit: "carrossel", stat:false},
                {tit: "alma gemea", stat:false},
                {tit: "senhora do destino", stat:false},
                {tit: "sete pecados", stat:false},
                {tit: "coracao de estudante", stat:false},
                {tit: "deus salve o rei", stat:false},
                {tit: "saramandaia", stat:false},
                {tit: "mulheres de areia", stat:false},
                {tit: "explode coracao", stat:false}]
var pontos = 0;

    /* botões do player*/
    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
   // const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');

    /* player */
    const audio_player = document.getElementById('music-player');
    
    //prev_btn.addEventListener('click', () => Change(false));
    next_btn.addEventListener('click', () => Change());

    let current_song_index;
    let next_song_index;




window.onload = () => {

     
    play_btn.addEventListener('click', TogglePlaySong);

    InitPlayer();

    function InitPlayer() {
    current_song_index = 0;
    next_song_index = current_song_index + 1;
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

function UpdatePlayer() { 
    var aux = parseInt(current_song_index);
    let novela = novelas[aux];
        var music = ("musicas/msc") + (aux) + (".mp3");
        audio_player.src = music;
        play_btn_icon.classList.add('fa-play');
        play_btn_icon.classList.remove('fa-pause');
        var imagem = document.getElementById("song-image");
        var titnovela = document.getElementById("name-novel");
        imagem.style.backgroundImage= "url('../imagens/figInicio.jpg";
        titnovela.innerHTML = ("Novela ") + aux;
        document.getElementById('palpite').value='';  // Limpa o campo
}

function Change(next = true ) {


    if (next) {
        current_song_index++;
        next_song_index = current_song_index +1;

        if (current_song_index > novelas.length - 1) {
            current_song_index = 0;
            next_song_index = current_song_index + 1;
        }

        if (next_song_index > novelas.length - 1) {
            next_song_index = 0;
        }
    } 

    UpdatePlayer();

}



function Atualiza(i) {
    var aux = ("musicas/msc") + (i) + (".mp3");
    audio_player.src = aux;
    play_btn_icon.classList.add('fa-play');
    play_btn_icon.classList.remove('fa-pause');
    
    var imagem = document.getElementById("song-image");
    var novela = document.getElementById("name-novel");
    imagem.style.backgroundImage= "url('../imagens/figInicio.jpg";
    novela.innerHTML = ("Novela ") + i;
    document.getElementById('palpite').value='';  // Limpa o campo
    
  }
  
function AtualizaCorreto(i) {
    var imagem = document.getElementById("song-image");
    imagem.style.backgroundImage = "url('../imagens/certo.png";
    imagem.style.backgroundSize = "cover";
    imagem.style.backgroundRepeat = "no-repeat"; 
    imagem.style.backgroundPosition = "right";
    document.getElementById("name-novel").innerHTML = novelas[i].tit.toUpperCase();
    novelas[i].stat = true; 
}


function Verifica(verifica){

    var palpite = verifica.value.toLowerCase();
    var numero = document.getElementById("name-novel").firstChild.nodeValue;
    var b = numero.split(" ");
    indice = b[1] - 1;
    
  

    if(novelas[indice].tit == palpite){
    
        pontos = 1 + pontos;
        var x = parseInt(b[1]);
        var i = x + 1;
        AtualizaCorreto(indice)
        current_song_index++;

        setTimeout(function() {
            Atualiza(i);
          }, 3500);
        
        return false;
    }

    else{
        
        imagem.style.backgroundImage= "url('../imagens/x.jpg";
        return false;
    }
}


