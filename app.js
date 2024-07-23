let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Famale", {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela ("h1", "The game of SECRET NUMBER");
    exibirTextoNaTela ("p", "Hi, JESSICA Leigh!! Choose The Secret Number between 1 e 10 ");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

   if (chute == numeroSecreto) {
         exibirTextoNaTela ("h1","You're right. You discovered the secret number!");
         let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
         let mensagemTentativas = `You're right. You won a glass of wine with my naked body! ${tentativas} ${palavraTentativa}!`;
         exibirTextoNaTela("p", mensagemTentativas);
         document.getElementById ("reiniciar").removeAttribute ("disabled");
   } else {
    if (chute > numeroSecreto) {
        exibirTextoNaTela("p", "The Secret Number is Smaller");
    } else {
        exibirTextoNaTela ("p","The Secret Number is Bigger" );
    }
    tentativas++;
    limparCampo();
   }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.leigth;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes (numeroEscolhido)) {
        return gerarNumeroAleatorio (); 
    } else {
        listaDeNumerosSorteados.push (numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = " ";
}  

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1; 
    exibirMensagemInicial();
    doccument.getElementById("reiniciar").setAttribute("disabled", true)
}

