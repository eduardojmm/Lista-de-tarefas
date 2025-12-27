const inputTarefa = document.getElementById('inputTarefa');
const listaDeTarefas = document.getElementById('listaDeTarefas');
const btnModoEscuro = document.getElementById('btnModoEscuro');
const btnAdicionar = document.getElementById('btnAdicionar');

let tarefas = [];

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
    const raw = localStorage.getItem('tarefas');
    tarefas = raw ? JSON.parse(raw) : [];
    renderizarTarefas();
}

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.dataset.id = tarefa.id;

    const span = document.createElement('span');
    span.textContent = tarefa.texto;
    if (tarefa.feita) span.classList.add('concluida');

    const div = document.createElement('div');

    const btnToggle = document.createElement('button');
    btnToggle.type = 'button';
    btnToggle.className = 'botao-toggle';
    btnToggle.textContent = tarefa.feita ? 'Desfazer' : 'Concluir';

    const btnEditar = document.createElement('button');
    btnEditar.type = 'button';
    btnEditar.className = 'botao-editar';
    btnEditar.textContent = 'Editar';

    const btnDeletar = document.createElement('button');
    btnDeletar.type = 'button';
    btnDeletar.className = 'botao-deletar';
    btnDeletar.textContent = 'X';

    div.appendChild(btnToggle);
    div.appendChild(btnEditar);
    div.appendChild(btnDeletar);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}

function renderizarTarefas() {
    listaDeTarefas.innerHTML = '';
    const frag = document.createDocumentFragment();
    tarefas.forEach(t => frag.appendChild(criarElementoTarefa(t)));
    listaDeTarefas.appendChild(frag);
}

function adicionarTarefa() {
    const texto = inputTarefa.value.trim();
    if (!texto) {
        alert('Digite alguma tarefa!');
        inputTarefa.focus();
        return;
    }

    const tarefa = { id: Date.now().toString(), texto, feita: false };
    tarefas.push(tarefa);
    salvarTarefas();
    renderizarTarefas();
    inputTarefa.value = '';
    inputTarefa.focus();
}

listaDeTarefas.addEventListener('click', function (e) {
    const li = e.target.closest('li');
    if (!li) return;
    const id = li.dataset.id;

    if (e.target.classList.contains('botao-deletar')) {
        tarefas = tarefas.filter(t => t.id !== id);
        salvarTarefas();
        renderizarTarefas();
        return;
    }

    if (e.target.classList.contains('botao-toggle')) {
        const t = tarefas.find(x => x.id === id);
        if (t) t.feita = !t.feita;
        salvarTarefas();
        renderizarTarefas();
        return;
    }

    if (e.target.classList.contains('botao-editar')) {
        const t = tarefas.find(x => x.id === id);
        if (!t) return;
        const span = li.querySelector('span');
        if (!span) return;

        const inputEdit = document.createElement('input');
        inputEdit.type = 'text';
        inputEdit.value = t.texto;
        inputEdit.className = 'edit-input';

        span.replaceWith(inputEdit);
        inputEdit.focus();
        inputEdit.select();

        let committed = false;

        function finishAndRender(save) {
            if (committed) return;
            committed = true;
            const val = inputEdit.value.trim();
            if (save && val) {
                t.texto = val;
                salvarTarefas();
            }
            renderizarTarefas();
        }

        inputEdit.addEventListener('keydown', function (ev) {
            if (ev.key === 'Enter') finishAndRender(true);
            if (ev.key === 'Escape') finishAndRender(false);
        });

        inputEdit.addEventListener('blur', function () {
            finishAndRender(true);
        });

        return;
    }
});

function alternarModo() {
    document.body.classList.toggle('dark-mode');
    btnModoEscuro.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
    localStorage.setItem('modoEscuro', document.body.classList.contains('dark-mode') ? '1' : '0');
}

function carregarModo() {
    if (localStorage.getItem('modoEscuro') === '1') document.body.classList.add('dark-mode');
    btnModoEscuro.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
}

document.addEventListener('DOMContentLoaded', function () {
    carregarModo();
    carregarTarefas();
    btnAdicionar.addEventListener('click', adicionarTarefa);
    btnModoEscuro.addEventListener('click', alternarModo);
    inputTarefa.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') adicionarTarefa();
    });
});