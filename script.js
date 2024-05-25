/* Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números; */


alert("Faremos a soma, subtração, multiplicação, divisão e resto da divisão de 2 números")

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

let sum = Number(numberOne) + Number(numberTwo)
let subtraction = Number(numberOne) - Number(numberTwo)
let multiplication = Number(numberOne) * Number(numberTwo)
let division = Number(numberOne) / Number(numberTwo)
let remainder = Number(numberOne) % Number(numberTwo)

alert("Resultado da soma é: " + sum)
alert("Resultado da subtração é: " + subtraction)
alert("Resultado da multiplicação é: " + multiplication)
alert("Resultado da divisão é: " + division)
alert("Resultado do resto da divisão é: " + remainder)



