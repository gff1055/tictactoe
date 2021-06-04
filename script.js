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

// Funcao que contem a logica do jogo
function jogar(event){			
	
	// Cria uma copia do objeto tabuleiro que terá a propriedade modificada
	tabuleiro = Object.assign({}, tabuleiro, {
		[event.target.id]: jogador						// redefine a propriedade do objeto no novo tabuleiro
	});

	event.target.classList.add('marcador-' + jogador);	// Preenchendo a posicao no tabuleiro com "X" ou "O"
}

Object.keys(tabuleiro).forEach(posicao => {
	const espaco = document.getElementById(posicao);			// Obtendo elemento por ID
	espaco.addEventListener('click', jogar);							// Adicionando Event Listener de click
});



/*function mudaTurno(atual){
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
}*/


/**
 * FUNCAO	: checarVitoria
 * OBJETIVO	: checa o tabuleiro para verificar se o jogador atual venceu ou nao
 * RETORNO	: retorna se o jogador atual ganhou
 */
/*function checarVitoria(){

	// verifica as linhas horizontais do tabuleiro
	['-acima','','-baixo'].forEach(sufixo => {

		// Se a linha do tabuleiro tiver todos os valores iguais é retornado TRUE
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
});*/





