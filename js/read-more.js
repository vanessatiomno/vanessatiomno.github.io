//leia mais do contexto
let contextoShortText = document.querySelector('#contexto-short-text');
let contextoLongText = document.querySelector('#contexto-long-text');
let btnContextoReadMode = document.querySelector('#contexto-read-more');
let contextoDots = document.querySelector('#contexto-dots');
let lerMenosContexto = document.querySelector('#contexto-menos');

btnContextoReadMode.addEventListener('click', function(){
    contextoShortText.classList.add('hidden');
    contextoLongText.classList.remove('hidden');
    contextoDots.classList.add('hidden');
    this.classList.add('hidden');
    lerMenosContexto.classList.remove('hidden');
});

lerMenosContexto.addEventListener('click', function(){
    contextoShortText.classList.remove('hidden');
    contextoLongText.classList.add('hidden');
    contextoDots.classList.remove('hidden');
    btnContextoReadMode.classList.remove('hidden');
    this.classList.add('hidden');
});


//leia mais da solução

let solucaoShortText = document.querySelector('#solucao-short-text');
let solucaoLongText = document.querySelector('#solucao-long-text');
let btnSolucaoReadMode = document.querySelector('#solucao-read-more');
let solucaoDots = document.querySelector('#solucao-dots');
let lerMenosSolucao = document.querySelector('#solucao-menos');

btnSolucaoReadMode.addEventListener('click', function(){
    solucaoShortText.classList.add('hidden');
    solucaoLongText.classList.remove('hidden');
    solucaoDots.classList.add('hidden');
    this.classList.add('hidden');
    lerMenosSolucao.classList.remove('hidden');
});

lerMenosSolucao.addEventListener('click', function(){
    solucaoShortText.classList.remove('hidden');
    solucaoLongText.classList.add('hidden');
    solucaoDots.classList.remove('hidden');
    btnSolucaoReadMode.classList.remove('hidden');
    this.classList.add('hidden');
})