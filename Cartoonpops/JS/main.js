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
 			"os simpsons | the simpsons", "a pantera cor de rosa | 	the pink phink", "du dudu e edu | ed edd n eddy",
			"doug | doug funnie", "os backyardigans | the backyardigans", "bob esponja | spongeBob squarePants", 
			"scooby doo", "a turma da monica", "george o rei da floresta | george of the jungle", "thundercats",
			"tom e jerry | tom and jerry", "os rugrats | the rugrats", "hamtaro", "a pequena sereia | the little mermaid",
			"sakura | sakura card captors", "timao e pumba | timao and pumba", "rick e morty | rick and morty", "pingu",
			"a hora do recreio | recess", "franklin", "os jetsons | the jetsons", "ursinhos carinhosos | care bears",
			"phineas e ferb | phineas and ferb", "as trigemeas | les tres bessones", "o laboratorio de dexter | dexters laboratory", 
			"catdog", "pinky e o cerebro", "os padrinhos magicos", "os caezinhos do canil", "dragon ball gt", 
			"os jovens titas | teen titans", "o clube das winx | winx club"];

var pontos = 0;


document.getElementById("pontos").innerHTML =  "00 / " + path.length; 

//cria os players
for (var i = 0; i<path.length; i++) {
	var ins=document.createElement("div");
	ins.id='b'+i;
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div\'> <input type="button" id="'+"a"+i+'" class="play" >  <input type="button" id="'+"ok"+i+'" class="answer" value="Responder" >';
	// input caixinha <input type="text" class="form-control caixinha" id="'+"palpite"+i+'" >
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
    document.getElementById('ok'+i).onclick=function(){
		verifica(this);
	};
}	 

function play(elem){

	var pegaId = elem.id.split("a");
	var indice = pegaId[1];
	var musica = path[indice];
	
	document.getElementById("som").src= musica;
	document.getElementById("controle").load();
	document.getElementById("controle").play();
}

function verifica(elem){
	var pegaId = elem.id.split("ok");
	var indice = pegaId[1];	

	var resposta = answers[indice];
	var auxResposta = resposta;

	var palpite=prompt("Resposta:");
	var palpiteMin = palpite.toLowerCase();
	var semAcento = palpiteMin.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	
	if (resposta.includes('|')){
		var separa = resposta.split(" | ");
		resposta = separa[0];
		auxResposta = separa[1]; 
	}

	
	if(semAcento == resposta || semAcento == auxResposta) {
		document.getElementById('b'+ indice).style.backgroundColor = 'green';
		var excluir = document.getElementById('ok'+indice);
 		excluir.parentNode.removeChild(excluir);
		atualizaPonto();
		return false;
	}
	

	else {
		alert("Tente novamente!!");
		return false;
	}

}

function atualizaPonto(){
	pontos = pontos + 1;
	if(pontos <10){
		document.getElementById("pontos").innerHTML = "0" + pontos + " / " + path.length;  
	}
	else{
		document.getElementById("pontos").innerHTML =  pontos + " / " + path.length;  		     
	}
	 
}
