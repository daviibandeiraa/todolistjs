const botaoTarefas = document.querySelector('.botao-tarefas')
const input = document.querySelector('.input-tarefas')
const listaCompleta = document.querySelector('.lista-tarefas')

let minhaListaDeItens = []

function adicionarTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()

}

function mostrarTarefas() {

    let NovaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {
        NovaLi = NovaLi + `
        <li class="tarefas ${item.concluida && "concluido"}">
          <img " src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
          <p>${item.tarefa}</p>
          <img src="./img/trash.png" alt="apagar-tarefa" onclick="deletarItem(${posicao})">
        </li>
    `
    })

    listaCompleta.innerHTML = NovaLi
    
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao) {
 minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

 mostrarTarefas()
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)
    console.log(posicao)

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')
  
    if (tarefasDoLocalStorage) {
      minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
  
    mostrarTarefas()
  }



botaoTarefas.addEventListener('click', adicionarTarefa)
