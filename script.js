let tabuleiro = {									// variavel para armazenar o tabuleiro
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

let jogador = JOGADOR1;								// O jogador do turno
let flagVencedor = false;
let deuEmpate = false;								// Flag que indoca empate
let cont = 9;



function marcarTabuleiro(espaco){
	// Cria uma copia do objeto tabuleiro que terá a propriedade modificada
	tabuleiro = Object.assign({}, tabuleiro, {
		[event.target.id]: jogador					// redefine a propriedade do objeto no novo tabuleiro
	});
	console.log(tabuleiro);
	espaco.classList.add('marcador-' + jogador);	// Preenchendo a posicao no tabuleiro com "X" ou "O"
	cont--;
	console.log(cont);
}



function mudaTurno(){
	if(jogador === JOGADOR1)
		jogador = JOGADOR2;
	else
		jogador = JOGADOR1;
	
}




function checarVitoria(){
	
	if(!flagVencedor){
		sufixoVencedor = ['-acima', '', '-abaixo'].find(sufixo => {
			if(tabuleiro['esquerda' + sufixo] === jogador && 
				tabuleiro['centro' + sufixo] === jogador &&
				tabuleiro['direita' + sufixo] === jogador){
				
				flagVencedor = [
					'esquerda' + sufixo,
					'centro' + sufixo,
					'direita' + sufixo
				];
			}
		});

		['esquerda', 'centro', 'direita'].find(sufixo => {
			if(tabuleiro[sufixo + '-acima'] === jogador && 
				tabuleiro[sufixo] === jogador &&
				tabuleiro[sufixo + '-abaixo'] === jogador){

				flagVencedor = [
					sufixo + '-acima',
					sufixo,
					sufixo + '-abaixo'
				];
			}
		});

		if(tabuleiro['esquerda-acima'] === jogador && 
			tabuleiro['centro'] === jogador &&
			tabuleiro['direita-abaixo'] === jogador){

				flagVencedor = [
					'esquerda-acima',
					'centro',
					'direita-abaixo'
				];
			}

		if(tabuleiro['direita-acima'] === jogador && 
				tabuleiro['centro'] === jogador &&
				tabuleiro['esquerda-abaixo'] === jogador){
				flagVencedor = [
					'direita-acima',
					'centro',
					'esquerda-abaixo'
				];
		}

		//console.log(flag);
		return flagVencedor;
	}
}


// Funcao que verifica se houve empate
/*function checarPorEmpate(){
	teste = Object.keys(tabuleiro).every(posicao => {					// Retorna as propriedades do objeto tabuleiro
		console.log(tabuleiro[posicao] !== null);
	})
	console.log(teste);
}*/



// Funcao que contem a logica do jogo
function jogar(event){
	const espaco = event.target;

	//if(flagVencedor||deuEmpate) return;
	if(flagVencedor) return;
	
	// Checar se o espaço nao esta preenchido
	if(tabuleiro[espaco.id] !== null){
		return;
	}

	
	//marcarTabuleiro(espaco);
	if(!flagVencedor) marcarTabuleiro(espaco);
	

	if(checarVitoria()){							// Checa se houve vitoria
		vencedor = jogador;							// Sinaliza o jogador vencedor
		const mensagem = document.getElementById('mensagem');
		
		mensagem.textContent = "Vitoria ao jogador " + jogador;			// Exibe mensagem do vencedor
		
		flagVencedor.forEach(posicao =>{			// Realça a jogada
			const espaco = document.getElementById(posicao);
			espaco.style.backgroundColor = '#008800';
			espaco.style.color = '#ffffff';
		});	
	}
	else if(!cont){						// Checa se houve empate
		deuEmpate = true;							// Sinaliza a condicao de empate
		const mensagem = document.getElementById('mensagem');
		tabuleiro.forEach(posicao =>{			// Realça a jogada
			const espaco = document.getElementById(posicao);
			espaco.style.backgroundColor = '#880000';
			espaco.style.color = '#ffffff';
		});
		mensagem.textContent = 'Deu empate. Deu velha!!!';				// Exibe a mensagem de empate
	}
	
	
	mudaTurno();

}



// Obtendo todas as propriedades do objeto tabuleiro 
Object.keys(tabuleiro).forEach(posicao => {						// Para cada propriedade(posicao) do objeto tabuleiro
	const espaco = document.getElementById(posicao);			// Obtem elemento por ID
	espaco.addEventListener('click', jogar);					// Adiciona Event Listener de click
});










/*function marcarTabuleiro(espaco){
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





