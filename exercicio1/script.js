/*let nome = prompt('Qual é seu nome?')
console.log(nome)
console.log('Tipo da Variável nome', typeof nome)
let idade = Number(prompt('Qual é sua idade?'))
console.log('Tipo da variável idade', typeof idade)

//valor indefinido, pois não foi definido um valor
após usar o prompt como valor da váriavel, temos o tipo string para os dois casos, pois a resposta de um prompt será sempre uma string
console.log('Olá', nome, 'você tem', idade, 'anos')*/


let curso = 'Você está gostando do curso?'
let tempo = 'Está calor?'
let sentimento = 'Você está feliz?'



let respostaA = prompt(curso)
let respostaB = prompt(tempo)
let respostaC = prompt(sentimento)

console.log(respostaA, respostaB, respostaC)
console.log(` 
${curso} - ${respostaA} 
${tempo} - ${respostaB}
${sentimento} - ${respostaC}
`)