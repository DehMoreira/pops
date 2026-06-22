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
                "o rei do gado", "a favorita", "caminhos do caracao", "chocolate com pimenta"];

    var pontos = 0;
    var STORAGE_KEY = "game_pops_novelas";

    // 1. INJEÇÃO DOS BOTÕES NO HEADER AUTOMATICAMENTE
    var header = document.getElementById("header");
    if (header) {
        // Guarda o texto do placar original
        var textoPlacarOrig = header.innerHTML;
        // Limpa e reconstrói com os botões nas laterais
        header.innerHTML = `
            <a href="../index.html" class="btn-voltar" title="Voltar ao Menu">🏠</a>
            ${textoPlacarOrig}
            <button id="btn-reset-game" class="btn-reiniciar" title="Reiniciar Jogo">🗑️</button>
        `;
        
        // Configura o clique do botão de reiniciar com confirmação
        document.getElementById("btn-reset-game").onclick = function() {
            if (confirm("Deseja mesmo zerar seu progresso desta categoria e começar de novo?")) {
                localStorage.removeItem(STORAGE_KEY);
                location.reload();
            }
        };
    }

    var container = document.getElementById("players");
    if (!container) {
        container = document.createElement("div");
        container.id = "players";
        document.body.appendChild(container);
    }

    var progressoSalvo = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    for (var i = 0; i < path.length; i++) {
        var ins = document.createElement("div");
        ins.id = 'b' + i;
        ins.setAttribute("class", "song");
        
        ins.innerHTML = `
            <span class="pop-num">${i + 1}</span>
            <input type="button" id="a${i}" class="play">
            <input type="text" id="palpite${i}" class="answer" placeholder="..." autocomplete="off">
        `;
        
        container.appendChild(ins);
        var inputCampo = document.getElementById('palpite' + i);

        if (progressoSalvo[i]) {
            ins.classList.add("acertou");
            inputCampo.disabled = true;
            inputCampo.value = progressoSalvo[i].toUpperCase();
            pontos++;
        } else {
            document.getElementById('a' + i).onclick = function() {
                play(this);
            };
            inputCampo.oninput = function() {
                verificaInstantanea(this);
            };
            // 2. MONITORA QUANDO O JOGADOR DIRETAMENTE SAI DO CAMPO (FEEDBACK ERRO)
            inputCampo.onchange = function() {
                aplicaFeedbackErro(this);
            };
        }
    }    

    atualizaPlacarTexto();

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

        if (palpiteLimpo === respostaLimpa || palpiteLimpo === auxRespostaLimpa) {
            var card = document.getElementById('b' + indice);
            card.classList.add("acertou");
            
            // Remove a classe de erro caso ela estivesse ativa antes
            elem.classList.remove("erro-feedback");
            elem.disabled = true;
            elem.value = resposta.toUpperCase(); 
            
            var controle = document.getElementById("controle") || document.getElementById("som");
            if (controle) controle.pause();

            progressoSalvo[indice] = resposta;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(progressoSalvo));

            atualizaPonto();
        }
    }

    // 3. FUNÇÃO QUE FAZ O CAMPO TREMER SE RETIRAR O FOCO E ESTIVER ERRADO
    function aplicaFeedbackErro(elem) {
        // Se o campo já estiver desativado (porque acertou), ignore
        if (elem.disabled || !elem.value.trim()) return;

        // Adiciona o tremor visual e a borda vermelha
        elem.classList.add("erro-feedback");

        // Remove o efeito após a animação acabar (0.4s) para o jogador tentar de novo livremente
        setTimeout(function() {
            elem.classList.remove("erro-feedback");
        }, 400);
    }

    function atualizaPonto() {
        pontos = pontos + 1;
        atualizaPlacarTexto();

        if (pontos === path.length) {
            setTimeout(function() {
                var finalScore = document.getElementById("score-final");
                if (finalScore) finalScore.innerHTML = pontos + " / " + path.length;

                var modal = document.getElementById("modal-parabens");
                if (modal) modal.classList.add("mostrar");
            }, 600); 
        }
    }

    function atualizaPlacarTexto() {
        var placar = document.getElementById("pontos");
        if (placar) {
            if (pontos < 10) {
                placar.innerHTML = "0" + pontos + " / " + path.length;  
            } else {
                placar.innerHTML = pontos + " / " + path.length;             
            }
        }
    }
};