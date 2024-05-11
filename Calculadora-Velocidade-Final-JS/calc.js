import prompt from 'prompt-sync'
let read = prompt()

let velocidadeObj1 = 0, velocidadeObj2 = 0, pesoObj1= 0, pesoObj2 = 0
let fator1, pesoSoma, fator2, fatorSoma, vlFinal


//process.stdout.write()
process.stdout.write('Peso do objeto 1: ')
pesoObj1 = Number(read())

process.stdout.write('Velocidade do objeto 1: ')
velocidadeObj1 = Number(read())

process.stdout.write('Peso do objeto 2: ')
pesoObj2 = Number(read())

process.stdout.write('Velocidade do objeto 2: ')
velocidadeObj2 = Number(read())


fator1 = pesoObj1 * velocidadeObj1
fator2 = pesoObj2 * velocidadeObj2

pesoSoma = pesoObj1 + pesoObj2

fatorSoma = fator1 + fator2

vlFinal = fatorSoma / pesoSoma


console.log(`A velocidade final é de ${vlFinal} metros por segundo`)

// Não leva em consideração a diferença de peso dos dois objetos, em uma colisão, o objeto mais pesado costuma manter o movimento em velocidade diminuida
// Enquanto o mais leve anda na direção oposta, se forem do mesmo peso, os dois se chocam e andam em direções opostas
