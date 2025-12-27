function adicionarTarefa() {
    let input = document.getElementById("inputTarefa");
    let texto = input.value;

    if (texto === "") {
        alert("Digite alguma tarefa!");
        return;
    }

    let lista = document.getElementById("listaDeTarefas");
    let novoItem = document.createElement("li");
    
    // Usamos crases (`) para permitir várias linhas
    novoItem.innerHTML = `
        <span>${texto}</span>
        <div>
            <button class="botao-editar" onclick="editarTarefa(this)">Editar</button>
            <button class="botao-deletar" onclick="deletarTarefa(this)">X</button>
        </div>
    `;

    lista.appendChild(novoItem);
    input.value = "";
}

function deletarTarefa(elementoBotao) {
    // Sobe dois níveis: botão -> div -> li
    elementoBotao.parentElement.parentElement.remove();
}

function editarTarefa(elementoBotao) {
    let item = elementoBotao.parentElement.parentElement;
    let spanTexto = item.querySelector("span");
    let textoAtual = spanTexto.innerText;
    
    let novoTexto = prompt("Edite sua tarefa:", textoAtual);
    
    if (novoTexto !== null && novoTexto.trim() !== "") {
        spanTexto.innerText = novoTexto;
    }
}

function alternarModo() {
    const bodyElement = document.body;
    bodyElement.classList.toggle('dark-mode');

    const botao = document.getElementById("btnModoEscuro");
    if (bodyElement.classList.contains('dark-mode')) {
        botao.textContent = "Modo Claro";
    } else {
        botao.textContent = "Modo Escuro";
    }
}