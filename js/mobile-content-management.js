var contextoTitle = document.querySelector('#contexto-title');
var solucaoTitle = document.querySelector('#solucao-title').parentNode;
var trabalhoTitle = document.querySelector('#trabalho-title');

var contextoText = document.querySelector('#contexto-long-text');
var solucaoText = document.querySelector('#solucao-long-text');
var trabalhoText = document.querySelector('#trabalho-content');


console.log(contextoText);



contextoTitle.addEventListener("click", function(){mostraConteudo(contextoText)});

solucaoTitle.addEventListener("click", function(){mostraConteudo(solucaoText)});

trabalhoTitle.addEventListener("click", function(){mostraConteudo(trabalhoText)});

function mostraConteudo(targetContent){
    console.log('função chamada!')
    targetContent.classList.toggle('mobile-hidden');
    targetContent.classList.toggle('hidden');
}