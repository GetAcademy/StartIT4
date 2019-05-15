function addTask() {
    tasks.push({
        description: taskDescriptionInput.value,
        isDone: false
    });
    taskDescriptionInput.value = '';
    show();
}