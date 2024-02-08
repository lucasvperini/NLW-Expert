const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação",
      "Um framework de desenvolvimento web",
      "Um banco de dados",
      "Um sistema operacional",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a sintaxe básica do JavaScript?",
    respostas: [
      "function myFunction() { }",
      "if (condition) { }",
      "for (let i = 0; i < 10; i++) { }",
      "let x = 5;",
    ],
    correta: 3,
  },
  {
    pergunta: "O que é uma variável em JavaScript?",
    respostas: [
      "Um valor constante",
      "Um tipo de dado",
      "Um nome dado a um valor",
      "Uma função",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a função do operador '==' em JavaScript?",
    respostas: [
      "Comparar valores e tipos",
      "Atribuir um valor a uma variável",
      "Verificar se um valor é maior que outro",
      "Concatenar strings",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um tipo de dado",
      "Um valor constante",
      "Um bloco de código reutilizável",
      "Uma variável",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a função do operador '&&' em JavaScript?",
    respostas: [
      "Realizar uma operação de adição",
      "Realizar uma operação de subtração",
      "Realizar uma operação de multiplicação",
      "Realizar uma operação de lógica booleana",
    ],
    correta: 3,
  },
  {
    pergunta: "O que é um array em JavaScript?",
    respostas: [
      "Um tipo de dado",
      "Um valor constante",
      "Um bloco de código reutilizável",
      "Uma variável",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do operador '++' em JavaScript?",
    respostas: [
      "Incrementar um valor em 1",
      "Decrementar um valor em 1",
      "Multiplicar um valor por 2",
      "Dividir um valor por 2",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é uma estrutura condicional em JavaScript?",
    respostas: [
      "Um tipo de dado",
      "Um valor constante",
      "Um bloco de código reutilizável",
      "Uma estrutura de controle de fluxo",
    ],
    correta: 3,
  },
  {
    pergunta: "Qual é a função do operador '!=' em JavaScript?",
    respostas: [
      "Comparar valores e tipos",
      "Atribuir um valor a uma variável",
      "Verificar se um valor é maior que outro",
      "Verificar se dois valores são diferentes",
    ],
    correta: 3,
  },
];

// Seleciona o elemento que irá receber as perguntas
const template = document.querySelector("template");
const corretas = new Set();
const totalPerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + " de " + totalPerguntas;

// Adiciona as perguntas
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  // Adiciona as respostas
  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      corretas.delete(item);

      if (estaCorreta) {
        corretas.add(item);
      }

      mostrarTotal.textContent = corretas.size + " de " + totalPerguntas;
    };

    quizItem.querySelector("dl").append(dt);
  }

  quizItem.querySelector("dl dt").remove();
  quiz.append(quizItem);
}
