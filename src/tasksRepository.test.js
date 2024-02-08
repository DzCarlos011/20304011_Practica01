
const tasksRepository = require("./tasksRepository");

describe("pruebas", () => {

    // prueba unitaria
    test("Get all tasks", () => {
        // Arrange
        let tasks = [];

        // Act 
        tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(2);
        expect(tasks.length === 2).toBe(true);
        expect(Array.isArray(tasks)).toBe(true);
    });

    // Prueba para crear una tarea
    test("Create a task", () => {
        // Arrange
        const task = { id: 1, name: "Task 1" };

        // Act
        tasksRepository.create(task);
        const tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(3);
        expect(tasks.includes(task)).toBe(true);
    });

    // Prueba para actualizar una tarea
    test("Update a task", () => {
        // Arrange
        const taskId = 1;
        const updatedTask = { name: "Updated Task 1" };

        // Act
        tasksRepository.update(taskId, updatedTask);
        const tasks = tasksRepository.getAll();

        // Assert
        const task = tasks.find(task => task.id === taskId);
        expect(task.name).toBe("Updated Task 1");
    });

    // Prueba para eliminar una tarea
    test("Remove a task", () => {
        // Arrange
        const taskId = 1;

        // Act
        tasksRepository.remove(taskId);
        const tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(2);
        expect(tasks.some(task => task.id === taskId)).toBe(false);
    });

});
