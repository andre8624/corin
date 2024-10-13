let nomeUsuario = 'Rafael, Giovani';
alert(nomeUsuario);  

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(6, 4)); 
console.log(soma(10, 4)); 

function multi(num1, num2) {
    return num1 * num2;
}

console.log(multi(5, 29)); 

function areaQuadrado(lado) {
    return lado ** 2; 
}

console.log(areaQuadrado(7)); 


let num1 = parseInt(prompt('Qual sua nota no primeiro trimestre?'));
let num2 = parseInt(prompt('Qual sua nota no segundo trimestre?'));
let num3 = parseInt(prompt('Qual sua nota no terceiro trimestre?'));

function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

console.log('A média é: ' + media(num1, num2, num3));

let estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo', 'Bahia', 'Sergipe', 'Alagoas', 'Pernambuco', 'Paraíba',
    'Rio Grande do Norte', 'Ceará', 'Piauí', 'Maranhão', 'Tocantins', 'Goiás', 'Distrito Federal', 'Mato Grosso', 'Mato Grosso do Sul',
    'Acre', 'Amapá', 'Pará', 'Amazonas', 'Roraima', 'Santa Catarina', 'Rio Grande do Sul', 'Paraná', 'Rondônia'];

for (let j = 0; j < estados.length; j++) {
    console.log(j); // Print index
    console.log(estados[j]); // Print state
}

let idade1 = parseInt(prompt('Qual a sua idade?')); 
let idade = idade1;

if (idade > 17) {
    console.log('Pode dirigir');
} else {
    console.log('Ilegal dirigir');
}


