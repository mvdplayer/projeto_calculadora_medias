const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="/aprovado.png" alt="emoji festejando" />';
const imgReprovacao = '<img src="/reprovado.png" alt="emoji triste" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota miníma:"));
let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionarLInha();
    atualizaLinha();
    atualizaMediaFinal(); 
    calculaMediaFinal();
});

function adicionarLInha () {
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const nomeAtividade = document.getElementById("nota-atividade")

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserido`);
    }else {
        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(nomeAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${nomeAtividade.value >= notaMinima ? imgAprovado : imgReprovacao}</td>`;
        linha += '</tr>';
    
        linhas += linha; 
    }

    inputNomeAtividade.value = '';
    nomeAtividade.value = '';
}

function atualizaLinha () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
            somaNotas += notas[i];
        }
    
    return  somaNotas / notas.length;
}