const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Gosta de livros?",
            },
            {
                texto: "Não gosta de livros?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Qual sua forma favorita de ler?",
            },
            {
                texto: "Já tentou ler algum livro?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Qual seu gênero literário favorito?",
            },
            {
                texto: "Já leu na escola para algum trabalho?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Qual seu(sua) autor(a) favotito?",
            },
            {
                texto: "Quer tentar criar uma rotina de leitura?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Qual seu livro favorito desse autor(a)?",
            },
            {
                texto: "Você pode começar pegando livros emprestados em bibliotecas.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Qual gênero literario você menos gosta?",
            },
            {
                texto: "Crie uma lista de possíveis livros que você gostou do gênero.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Foram essas as perguntas. Obrigada!",
            },
            {
                texto: "Caso precise de ajuda estaremos a sua disposição!",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();