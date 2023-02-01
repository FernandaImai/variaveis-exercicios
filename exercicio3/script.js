let nomeCompleto = prompt('Digite seu nome completo')
let dataDeNascimento = prompt('Digite sua data de nascimento')
let endereco = prompt('Digite seu endereco')
let cpf = prompt('Digite seu CPF')
let escolaridade = ('Digite sua escolaridade')
let cnh  = confirm ('Possui CNH?')
let filhos = Number(prompt('Quantos filhos você tem?'))
let cargoAtual = prompt('Digite seu cargo atual')
let salario = Number(prompt('Digite seu salário atual'))
let comissao = Number(prompt('Você recebe comissão?Se sim, informe a porcentagem, se não, responda com zero'))
let admissao = prompt('Informe o ano de admissão:')

console.log(typeof nomeCompleto, typeof dataDeNascimento, typeof endereco,
     typeof cpf, typeof escolaridade, typeof cnh, typeof filhos, typeof cargoAtual, 
     typeof salario, typeof comissao, typeof admissao)

     console.log(
    `Nome Completo: ${nomeCompleto}
     Data de Nascimento: ${dataDeNascimento}
     Endereço: ${endereco}
     CPF: ${cpf}
     Escolaridade: ${escolaridade}
     CNH: ${cnh}
     Quantos filhos possui: ${filhos}
     Cargo Atual: ${cargoAtual}
     Salário: ${salario}
     Comissão: ${comissao}
     Data de admissão: ${admissao}
     `)
