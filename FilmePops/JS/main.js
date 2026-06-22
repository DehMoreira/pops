window.onload = function() {
    var path=["musicas\\msc1.mp3"
    ,"musicas\\msc2.mp3"
    ,"musicas\\msc3.mp3"
    ,"musicas\\msc4.mp3"
    ,"musicas\\msc5.mp3"
    ,"musicas\\msc6.mp3"
    ,"musicas\\msc7.mp3"
    ,"musicas\\msc8.mp3"
    ,"musicas\\msc9.mp3"
    ,"musicas\\msc10.mp3"
    ,"musicas\\msc11.mp3"
    ,"musicas\\msc12.mp3"
    ,"musicas\\msc13.mp3"
    ,"musicas\\msc14.mp3"
    ,"musicas\\msc15.mp3"
    ,"musicas\\msc16.mp3"
    ,"musicas\\msc17.mp3"
    ,"musicas\\msc18.mp3"
    ,"musicas\\msc19.mp3"
    ,"musicas\\msc20.mp3"
    ,"musicas\\msc21.mp3"
    ,"musicas\\msc22.mp3"
    ,"musicas\\msc23.mp3"
    ,"musicas\\msc24.mp3"
    ,"musicas\\msc25.mp3"
    ,"musicas\\msc26.mp3"
    ,"musicas\\msc27.mp3"
    ,"musicas\\msc28.mp3"
    ,"musicas\\msc29.mp3"
    ,"musicas\\msc30.mp3"
    ,"musicas\\msc31.mp3"
    ,"musicas\\msc32.mp3"
    ,"musicas\\msc33.mp3"
    ,"musicas\\msc34.mp3"
    ,"musicas\\msc35.mp3"
    ];

    var answers =["da cor do pecado", "estrela guia", "boogie oogie", "avenida brasil", "bela a feia", "paraiso", "por amor", "o outro lado do paraiso",
                "pantanal", "passione", "a gata comeu", "cheias de charme", "bom sucesso", "sinha moca", "verao 90", "porto dos milagres", 
                "o profeta", "era uma vez", "floribella", "duas caras", "a escrava isaura", "cama de gato", "cabocla", "roque santeiro",
                "pe na jaca", "pequena travessa", "o beijo do vampiro", "alto astral", "irmaos coragem", "o setimo guardiao", "verdades secretas",
                "o rei do gado", "a favorita", "caminhos do coracao", "chocolate com pimenta"];

    var pontos = 0;

    // Garante que o container 'players' existe
    var container = document.getElementById("players");
    if (!container) {
        container = document.createElement("div");
        container.id = "players";
        document.body.appendChild(container);
    }

    // Configura placar inicial
    var placar = document.getElementById("pontos");
    if (placar) placar.innerHTML = "00 / " + path.length; 

    // Loop que gera a grade perfeita de 7 colunas
    for (var i = 0; i < path.length; i++) {
        var ins = document.createElement("div");
        ins.id = 'b' + i;
        ins.setAttribute("class", "song");
        
		ins.innerHTML = `
            <span class="pop-num">${i + 1}</span>
            <input type="button" id="a${i}" class="play">
            <input type="text" id="palpite${i}" class="answer" placeholder="Qual a música?" autocomplete="off">
        `;
        
        container.appendChild(ins);

        // Evento do botão Play
        document.getElementById('a' + i).onclick = function() {
            play(this);
        };

        // Verificação instantânea enquanto digita letra por letra
        document.getElementById('palpite' + i).oninput = function() {
            verificaInstantanea(this);
        };
    }    

    function play(elem) {
        var indice = elem.id.replace("a", "");
        var musica = path[indice];
        
        var controle = document.getElementById("controle") || document.getElementById("som");
        if (controle) {
            controle.src = musica;
            controle.load();
            controle.play();
        }
    }

    function verificaInstantanea(elem) {
        var indice = elem.id.replace("palpite", ""); 
        var respostaOriginal = answers[indice];
        
        var palpite = elem.value;
        if (!palpite.trim()) return; 

        // Limpa acentos, espaços extras e deixa em minúsculas
        var palpiteLimpo = palpite.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim();

        var resposta = respostaOriginal;
        var auxResposta = respostaOriginal;

        if (respostaOriginal.includes('|')) {
            var separa = respostaOriginal.split("|");
            resposta = separa[0].trim();
            auxResposta = separa[1].trim(); 
        } else {
            resposta = resposta.trim();
            auxResposta = auxResposta.trim();
        }

        var respostaLimpa = resposta.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim();
        var auxRespostaLimpa = auxResposta.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim();

        // Se o palpite bater exatamente com a resposta do banco
        if (palpiteLimpo === respostaLimpa || palpiteLimpo === auxRespostaLimpa) {
            var card = document.getElementById('b' + indice);
            card.classList.add("acertou");
            
            elem.disabled = true;
            elem.value = resposta.toUpperCase(); // Trava a resposta correta em maiúsculas
            
            // Pausa a música ao acertar
            var controle = document.getElementById("controle") || document.getElementById("som");
            if (controle) controle.pause();

            atualizaPonto();
        }
    }

function atualizaPonto() {
    pontos = pontos + 1;
    var placar = document.getElementById("pontos");
    if (placar) {
        if (pontos < 10) {
            placar.innerHTML = "0" + pontos + " / " + path.length;  
        } else {
            placar.innerHTML = pontos + " / " + path.length;             
        }
    }

    // VERIFICAÇÃO DE VITÓRIA: Se acertou a última que faltava
    if (pontos === path.length) {
        setTimeout(function() {
            // Atualiza o número dentro da janelinha de parabéns
            var finalScore = document.getElementById("score-final");
            if (finalScore) finalScore.innerHTML = pontos + " / " + path.length;

            // Faz a tela de vitória surgir com elegância
            var modal = document.getElementById("modal-parabens");
            if (modal) modal.classList.add("mostrar");
        }, 600); // Dá um pequeno delay de meio segundo para o card ficar verde antes da tela subir
    }
}
};