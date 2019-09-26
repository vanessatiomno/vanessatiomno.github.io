<<<<<<< HEAD
//leia mais do contexto
let contextoShortText = document.querySelector('#contexto-short-text');
let contextoLongText = document.querySelector('#contexto-long-text');
let btnContextoReadMode = document.querySelector('#contexto-read-more');
let contextoDots = document.querySelector('#contexto-dots');

console.log(btnContextoReadMode);

btnContextoReadMode.addEventListener('click', function(){
    contextoShortText.classList.add('hidden');
    contextoLongText.classList.remove('hidden');
    contextoDots.classList.add('hidden');
    this.classList.add('hidden');
})


//leia mais da solução

let solucaoShortText = document.querySelector('#solucao-short-text');
let solucaoLongText = document.querySelector('#solucao-long-text');
let btnSolucaoReadMode = document.querySelector('#solucao-read-more');
let solucaoDots = document.querySelector('#solucao-dots');

console.log(btnSolucaoReadMode);

btnSolucaoReadMode.addEventListener('click', function(){
    solucaoShortText.classList.add('hidden');
    solucaoLongText.classList.remove('hidden');
    solucaoDots.classList.add('hidden');
    this.classList.add('hidden');
=======
//leia mais do contexto
let contextoShortText = document.querySelector('#contexto-short-text');
let contextoLongText = document.querySelector('#contexto-long-text');
let btnContextoReadMode = document.querySelector('#contexto-read-more');
let contextoDots = document.querySelector('#contexto-dots');

console.log(btnContextoReadMode);

btnContextoReadMode.addEventListener('click', function(){
    contextoShortText.classList.add('hidden');
    contextoLongText.classList.remove('hidden');
    contextoDots.classList.add('hidden');
    this.classList.add('hidden');
})


//leia mais da solução

let solucaoShortText = document.querySelector('#solucao-short-text');
let solucaoLongText = document.querySelector('#solucao-long-text');
let btnSolucaoReadMode = document.querySelector('#solucao-read-more');
let solucaoDots = document.querySelector('#solucao-dots');

console.log(btnSolucaoReadMode);

btnSolucaoReadMode.addEventListener('click', function(){
    solucaoShortText.classList.add('hidden');
    solucaoLongText.classList.remove('hidden');
    solucaoDots.classList.add('hidden');
    this.classList.add('hidden');
>>>>>>> commiting changes to Cases
})