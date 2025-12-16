function adicionarTarefa() {
    // 1. Pegar o valor que o usuário digitou
    let input = document.getElementById("inputTarefa");
    let texto = input.value;

    // Validação simples: não deixar adicionar vazio
    if (texto === "") {
        alert("Digite alguma tarefa!");
        return;
    }

    // 2. Criar o elemento da lista (li)
    let lista = document.getElementById("listaDeTarefas");
    let novoItem = document.createElement("li");
    
    // 3. Colocar o texto dentro do item e um botão de deletar
    novoItem.innerHTML = `${texto} <button class="botao-deletar" onclick="deletarTarefa(this)">X</button>`;

    // 4. Adicionar o item na lista (na tela)
    lista.appendChild(novoItem);

    // 5. Limpar o input para a próxima tarefa
    input.value = "";
}

function deletarTarefa(elementoBotao) {
    // Remove o pai do botão (que é o item da lista <li>)
    elementoBotao.parentElement.remove();
}
function alternarModo() {
    // 1. Seleciona o elemento body (o 'envelope' de tudo)
    const bodyElement = document.body;
    
    // 2. O método .toggle() faz toda a mágica:
    //    - Se a classe 'dark-mode' EXISTIR, ele REMOVE.
    //    - Se a classe 'dark-mode' NÃO EXISTIR, ele ADICIONA.
    bodyElement.classList.toggle('dark-mode');

    // 3. Opcional: Mudar o texto do botão
    const botao = document.getElementById("btnModoEscuro");
    if (bodyElement.classList.contains('dark-mode')) {
        botao.textContent = "Modo Claro";
    } else {
        botao.textContent = "Modo Escuro";
    }
}