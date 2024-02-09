 feature/testing02
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
let tasks = [
    { id: 1, title: "Task 1", description: "Do something" },
    { id: 2, title: "Task 2", description: "Do something else" },
];

// TOMAR TODAS LAS TAREAS ASIGNADAS

let tasks = [
    { id: 1, title: 'Task 1', description: 'Do something' },
    { id: 2, title: 'Task 2', description: 'Do something else' },
];


 main
function getAll() {
    return tasks;
}

 release/version1
// TOMA UNA TAREA

 feature/testing02
// TOMAR UNA TAREA

 main
 main
function getById(taskId) {
    return tasks.find((t) => t.id === taskId);
}

 feature/testing02
// CREAR

 main
function createTask(newTask) {
    newTask.id = tasks.length + 1;
    tasks.push(newTask);
}

 release/version1
// ACTUALIZACION
=======
 feature/testing02
// ACTUALIZATION

 main
 main
function updateTask(taskId, updatedTask) {
    const index = tasks.findIndex((t) => t.id === taskId);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
        return tasks[index];
    } else {
        return null;
    }
}

 feature/testing02
// ELIMINACION 

 main
function deleteTask(taskId) {
    tasks = tasks.filter((t) => t.id !== taskId);
}

module.exports = {
    getAll,
    getById,
    createTask,
    updateTask,
 feature/testing02
    deleteTask,

    deleteTask
 main
};