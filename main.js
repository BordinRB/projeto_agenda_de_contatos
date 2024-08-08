const form = document.getElementById('form-contatos');
const tabelaContato = document.getElementById('tabela-contatos');

form.addEventListener('submit', function(e){
    e.preventDefault();

const nome = document.getElementById('nome').value;
const sobrenome = document.getElementById('sobrenome').value;
const telefone = document.getElementById('telefone').value;

const linha = document.createElement('tr');
linha.innerHTML = `
    <td>${nome}</td>
    <td>${sobrenome}</td>
    <td>${telefone}</td>
`

tabelaContato.appendChild(linha);

form.reset();
});
