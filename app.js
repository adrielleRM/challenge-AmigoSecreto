let amigos = [];

function adicionarAmigo() {
    // Tarefa 1: Captura o nome do input
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;

    // Tarefa 2: Valida se o campo não está vazio
    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
        return; // 'return' para a função aqui se o nome for inválido.
    }

    // Tarefa 3: Adiciona o nome na lista (array)
    amigos.push(nomeAmigo);
    
    // Tarefa 4: Limpa o campo do input
    inputAmigo.value = '';

    // --- Lógica para mostrar na tela (com o for loop) ---
    
    // Pega o elemento <ul> da tela
    let listaNaTela = document.getElementById('listaAmigos');
    // Limpa a lista antes de reescrevê-la, para não duplicar nomes
    listaNaTela.innerHTML = ''; 

    // O "trabalhador" (for) que vai criar os <li>
    for (let i = 0; i < amigos.length; i++) {
        // Para cada nome, ele adiciona um item <li> à lista da tela
        listaNaTela.innerHTML = listaNaTela.innerHTML + `<li>${amigos[i]}</li>`;
    }
}
function sortearAmigo() {
    // Tarefa 1: Validar se a lista não está vazia
    if (amigos.length == 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }

    // Tarefa 2: Gerar um índice aleatório
    // amigos.length nos dá o número de amigos na lista
    let numeroDeAmigos = amigos.length;
    // Math.random() * numeroDeAmigos nos dá um número quebrado (ex: 2.345)
    // Math.floor() arredonda para baixo, nos dando um inteiro (ex: 2)
    let indiceSorteado = Math.floor(Math.random() * numeroDeAmigos);

    // Tarefa 3: Obter o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Tarefa 4: Mostrar o resultado na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `A pessoa sorteada é: ${amigoSorteado}`;
    // Pega o elemento da lista de amigos e apaga o conteúdo dele.
    document.getElementById('listaAmigos').innerHTML = ''
}