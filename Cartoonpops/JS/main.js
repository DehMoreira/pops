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

    var answers=["as tartarugas ninja | teenage mutant ninja turtles", "a turma do perere", "manda chuva | top cat",
                "os simpsons | the simpsons", "a pantera cor de rosa | the pink phink", "du dudu e edu | ed edd n eddy",
                "doug | doug funnie", "os backyardigans | the backyardigans", "bob esponja | spongeBob squarePants", 
                "scooby doo", "a turma da monica", "george o rei da floresta | george of the jungle", "thundercats",
                "tom e jerry | tom and jerry", "os rugrats | the rugrats", "hamtaro", "a pequena sereia | the little mermaid",
                "sakura | sakura card captors", "timao e pumba | timao and pumba", "rick e morty | rick and morty", "pingu",
                "a hora do recreio | recess", "franklin", "os jetsons | the jetsons", "ursinhos carinhosos | care bears",
                "phineas e ferb | phineas and ferb", "as trigemeas | les tres bessones", "o laboratorio de dexter | dexters laboratory", 
                "catdog", "pinky e o cerebro", "os padrinhos magicos", "os caezinhos do canil", "dragon ball gt", 
                "os jovens titas | teen titans", "o clube das winx | winx club"];

    var pontos = 0;

    // Identificador único para a memória desta categoria
    var STORAGE_KEY = "game_pops_desenhos";

    // Busca ou cria a div 'players' no HTML
    var container = document.getElementById("players");
    if (!container) {
        container = document.createElement("div");
        container.id = "players";
        document.body.appendChild(container);
    }

    // Carrega o histórico salvo (se existir) ou cria um objeto de progresso vazio
    var progressoSalvo = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    // Loop que gera a grade de botões e inputs na tela carregando a memória
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

        // CHECAGEM DE MEMÓRIA: Restaura o card caso ele já tenha sido acertado antes
        if (progressoSalvo[i]) {
            ins.classList.add("acertou");
            inputCampo.disabled = true;
            inputCampo.value = progressoSalvo[i].toUpperCase();
            pontos++; // Soma o ponto silenciosamente no carregamento
        } else {
            // Se não foi acertado ainda, define os eventos normais de jogo
            document.getElementById('a' + i).onclick = function() {
                play(this);
            };
            inputCampo.oninput = function() {
                verificaInstantanea(this);
            };
        }
    }    

    // Atualiza o texto do placar no topo com os pontos carregados do banco local
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

        // Padroniza e limpa a resposta do jogador
        var palpiteLimpo = palpite.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim();

        var resposta = respostaOriginal;
        var auxResposta = respostaOriginal;

        // Trata os casos em que há títulos alternativos separados por "|"
        if (respostaOriginal.includes('|')) {
            var separa = respostaOriginal.split("|");
            resposta = separa[0].trim();
            auxResposta = separa[1].trim(); 
        } else {
            resposta = resposta.trim();
            auxResposta = auxResposta.trim();
        }

        // Padroniza e limpa as respostas cadastradas no banco para o teste ser justo
        var respostaLimpa = resposta.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim();
        var auxRespostaLimpa = auxResposta.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim();

        // Se bater com qualquer uma das opções válidas, valida o acerto e salva localmente
        if (palpiteLimpo === respostaLimpa || palpiteLimpo === auxRespostaLimpa) {
            var card = document.getElementById('b' + indice);
            card.classList.add("acertou");
            
            elem.disabled = true;
            elem.value = resposta.toUpperCase(); // Trava o nome oficial no card
            
            // Pausa a música ao acertar
            var controle = document.getElementById("controle") || document.getElementById("som");
            if (controle) controle.pause();

            // GRAVAÇÃO LOCAL: Registra este acerto no armazenamento do navegador
            progressoSalvo[indice] = resposta;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(progressoSalvo));

            atualizaPonto();
        }
    }

    function atualizaPonto() {
        pontos = pontos + 1;
        atualizaPlacarTexto();

        // VERIFICAÇÃO DE VITÓRIA: Se acertou tudo, abre a janelinha modal
        if (pontos === path.length) {
            setTimeout(function() {
                var finalScore = document.getElementById("score-final");
                if (finalScore) finalScore.innerHTML = pontos + " / " + path.length;

                var modal = document.getElementById("modal-parabens");
                if (modal) modal.classList.add("mostrar");
            }, 600); 
        }
    }

    function updatePlacar() {}

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