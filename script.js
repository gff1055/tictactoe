let tabuleiro = {			// variavel para armazenar o tabuleiro
	'esquerda-acima': null,
	'centro-acima': null,
	'direita-acima': null,
	'esquerda': null,
	'centro': null,
	'direita': null,
	'esquerda-abaixo': null,
	'centro-abaixo': null,
	'direita-abaixo': null,
};


const JOGADOR1 = 'X';
const JOGADOR2 = 'O';

let jogador = JOGADOR1;	// O jogador do turno



function mudaTurno(atual){
	if(atual === JOGADOR1)
		return JOGADOR2;
	else
		return	JOGADOR1;
	
}

function marcarTabuleiro(espaco){
	tabuleiro = Object.assign({}, tabuleiro, {							// Faz a copia do tabuleiro para efetuar a jogada
		[espaco.id]: jogador										// A jogada é efetuada na copia feita
	});
	espaco.classList.add('marcador-'+jogador);					// Adiciona o marcador (X ou O) no tabuleiro
}


function checarVitoria(){

	['-acima','','-baixo'].forEach(sufixo => {
		if(tabuleiro['esquerda${sufixo}'] === jogador &&
			tabuleiro['centro${sufixo}'] === jogador &&
			tabuleiro['direita${sufixo}'] === jogador){
				return true;
		}
	});

	['-acima','','-baixo'].forEach(sufixo => {
		if(tabuleiro['esquerda${sufixo}'] === jogador &&
			tabuleiro['centro${sufixo}'] === jogador &&
			tabuleiro['direita${sufixo}'] === jogador){
				return true;
		}
	});

	return false;

}


// Feuncao reponsavel por efetuar a jogada
function jogar(event){
	const espaco = event.target;

	// checar se o espaco nao esta preenchido
	if(tabuleiro[espaco.id] !== null){
		console.log("AAAAAA");
		return;
	}

	marcarTabuleiro(espaco);						// Marca a jogada no tabuleiro
	checarVitoria();
	jogador = mudaTurno(jogador);					// Muda o turno do jogador
}

Object.keys(tabuleiro).forEach(posicao => {			//
	const espaco = document.getElementById(posicao);
	espaco.addEventListener('click', jogar);
});





