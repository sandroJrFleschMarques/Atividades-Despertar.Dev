// 1. **Criação de Tarefa:**
//     - Crie uma função chamada **`createTask(title, description)`** que recebe o titulo e descrição como parâmetro e permite adicionar uma nova tarefa à lista.
//     - A função deve verificar se o título da tarefa é fornecido. Se não for, deve exibir uma mensagem de erro indicando que o título é obrigatório.
//     - A nova tarefa deve ser um objeto com as propriedades: **`title`**, **`description`** e **`completed`** (inicializado como **`false`**).
const taskList = []
const createTask = (title, description, completed = false) => {
    if (!title) {
        console.log(`O titulo é obrigatório`)
    }
    else {
        taskList.push({ title, description, completed })
    }
}
// 2. **Listagem de Tarefas:**
//     - Crie uma função chamada **`listTasks()`** que exiba uma lista formatada de todas as tarefas cadastradas.
//     - Percorra o array de tarefas e mostre o índice, título, descrição e o status (concluída ou não) de cada tarefa.
const listTask = (tasks) => {
    tasks.forEach(task => {
        console.log(`${tasks.indexOf(task)}. Título:${task.title}, Descrição: ${task.description}, Status:${task.completed ? 'concluído' : 'não-concluído'}`)

    });
}
// 3. **Atualização de Status de Tarefa:**
//     - Crie uma função chamada **`updateTaskStatus(index, completed)`** que permita atualizar o status de conclusão de uma tarefa.
//     - Verifique se o índice informado existe e, em seguida, atualize a propriedade **`completed`** da tarefa correspondente para o valor fornecido.
const updateTaskStatus = (index, completed2) => {
    if (index >= 0 && index < taskList.length) {
        console.log('indice ok')
        taskList[index].completed = completed2
    } else {
        console.log('indice não encontrado');
    }
}
// 4. **Atualização de Tarefa:**
//     - Crie uma função chamada **`updateTask(index, newTitle, newDescription)`** que permita atualizar o título e a descrição de uma tarefa existente.
//     - Verifique se o índice fornecido é válido e se o novo título é fornecido. Se não for, exiba mensagens de erro apropriadas.
//     - Atualize o título e a descrição da tarefa selecionada com os valores fornecidos.
const updateTask = (index, newTitle, newDescription) => {
    if (index >= 0 && index < taskList.length) {
        taskList[index].title = newTitle
        taskList[index].description = newDescription
    } else {
        console.log('indice não encontrado');
    }
}
// 5. **Exclusão de Tarefa:**
//     - Crie uma função chamada **`deleteTask(index)`** que permita excluir uma tarefa da lista.
//     - Verifique se o índice fornecido é válido e, em seguida, remova a tarefa correspondente da lista.
const deleteTask = (index) => {
    if (index >= 0 && index < taskList.length) {
        taskList.splice(index, 1)
        console.log(index + ' deletado');
    } else {
        console.log('indice não encontrado');
    }
}
// 6. **Execução:**
//     - Crie algumas tarefas de exemplo utilizando a função **`createTask`**.
//     - Liste as tarefas utilizando a função **`listTasks`**.
//     - Atualize o status de uma tarefa e liste novamente.
//     - Atualize o título e descrição de uma tarefa e liste novamente.
//     - Exclua uma tarefa e liste novamente.
createTask('estudar', 'fazer exercícios de programação')
createTask('reunião', 'ir na reunião da growdev')
listTask(taskList)
updateTaskStatus(0, true)
listTask(taskList)
updateTask(0, 'mercado', 'fazer compras')
listTask(taskList)
deleteTask(1)
listTask(taskList)