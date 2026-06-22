window.onload = function() {
    var path=["musicas\\msc1.mp3","musicas\\msc2.mp3","musicas\\msc3.mp3","musicas\\msc4.mp3","musicas\\msc5.mp3","musicas\\msc6.mp3","musicas\\msc7.mp3","musicas\\msc8.mp3","musicas\\msc9.mp3","musicas\\msc10.mp3","musicas\\msc11.mp3","musicas\\msc12.mp3","musicas\\msc13.mp3","musicas\\msc14.mp3","musicas\\msc15.mp3","musicas\\msc16.mp3","musicas\\msc17.mp3","musicas\\msc18.mp3","musicas\\msc19.mp3","musicas\\msc20.mp3","musicas\\msc21.mp3","musicas\\msc22.mp3","musicas\\msc23.mp3","musicas\\msc24.mp3","musicas\\msc25.mp3","musicas\\msc26.mp3","musicas\\msc27.mp3","musicas\\msc28.mp3","musicas\\msc29.mp3","musicas\\msc30.mp3","musicas\\msc31.mp3","musicas\\msc32.mp3","musicas\\msc33.mp3","musicas\\msc34.mp3","musicas\\msc35.mp3"];

    var answers =[ "video show", "toma la da ca", "friends", "cocorico", "domingao do faustao", "pe na cova", "tapas e beijos", "altas horas", "casos de familia", "chapolin | o chapolin colorado", "two and a half men | dois homens e meio", "barney", "disney club | disney cruj", "fantasia", "globo esporte", "zorra total", "tv pirata", "a diarista", "passa ou repassa", "cassino do chacrinha | chacrinha", "arnold | diffrent strokes", "xuxa no mundo da imaginacao", "casa dos artistas", "masterchef", "hoje em dia", "viva o gordo", "sandy e junior", "a grande familia", "sitio do picapau amarelo", "a usurpadora | la usurpadora", "lost", "mega senha", "programa silvio santos | silvio santos", "teletubbies", "one tree hill | lances da vida" ];

    var pontos = 0;
    var STORAGE_KEY = "game_pops_tv";

    // 1. INJEÇÃO DOS BOTÕES NO HEADER AUTOMATICAMENTE
    var header = document.getElementById("header");
    if (header) {
        var textoPlacarOrig = header.innerHTML;
        header.innerHTML = `
            <a href="../index.html" class="btn-voltar" title="Voltar ao Menu">🏠</a>
            ${textoPlacarOrig}
            <button id="btn-reset-game" class="btn-reiniciar" title="Reiniciar Jogo">🗑️</button>
        `;
        
        document.getElementById("btn-reset-game").onclick = function() {
            if (confirm("Deseja mesmo zerar seu progresso desta categoria e começar de novo?")) {
                localStorage.removeItem(STORAGE_KEY);
                location.reload();
            }
        };
    }

    var container = document.getElementById("players") || document.body;
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
            // 2. MONITORA QUANDO O JOGADOR SAI DO CAMPO ERRANDO
            inputCampo.onchange = function() {
                aplicaFeedbackErro(this);
            };
        }
    }    

    atualizaPlacarTexto();

    function play(elem){
        var indice = elem.id.replace("a", "");
        var musica = path[indice];
        var controle = document.getElementById("controle") || document.getElementById("som");
        if(controle) {
            controle.src = musica;
            controle.load();
            controle.play();
        }
    }

    function verificaInstantanea(elem){
        var indice = elem.id.replace("palpite", ""); 
        var srcResposta = answers[indice];
        var palpite = elem.value;
        if (!palpite.trim()) return; 

        var palpiteLimpo = palpite.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim();
        var resposta = srcResposta;
        var auxResposta = srcResposta;

        if (srcResposta.includes('|')){
            var separa = srcResposta.split("|");
            resposta = separa[0].trim();
            auxResposta = separa[1].trim(); 
        } else {
            resposta = resposta.trim();
            auxResposta = auxResposta.trim();
        }

        var respostaLimpa = resposta.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim();
        var auxRespostaLimpa = auxResposta.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim();

        if(palpiteLimpo === respostaLimpa || palpiteLimpo === auxRespostaLimpa) {
            var card = document.getElementById('b' + indice);
            card.classList.add("acertou"); 
            
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

    // 3. FUNÇÃO DO FEEDBACK VISUAL DE ERRO
    function aplicaFeedbackErro(elem) {
        if (elem.disabled || !elem.value.trim()) return;

        elem.classList.add("erro-feedback");

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
        var placar = document.getElementById("pontos") || document.getElementById("pontuacao");
        if(placar) {
            if(pontos < 10){
                placar.innerHTML = "0" + pontos + " / " + path.length;  
            } else {
                placar.innerHTML = pontos + " / " + path.length;             
            }
        }
    }
};