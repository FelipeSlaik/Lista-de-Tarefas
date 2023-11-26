const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-task');
//const cria variável constante
//let cria variável que pode ser modificada 

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })  // adicionara a nova task (tarefa)

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {

        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
        
        <img  src="/img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
        
        <p>${item.tarefa}</p>
        
        <img src="/img/trash.png" alt="apagar-tarefa" onclick="deletarItem(${posicao})">
    </li>`
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista de tarefas', JSON.stringify(minhaListaDeItens))
    //JSON.stringify transforma em string
}

//sera chamada a função ao clickar no button
function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()

    //irá confirmar as task 
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()
    //IRÁ DELETAR  A TASK
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista de tarefas')

    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    //JSON.parse transforma string em objetos


    mostrarTarefas()
}
    recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa); //ficara de olho no button e chamara a função

//PEGAMOS O VALOR DO INPUT