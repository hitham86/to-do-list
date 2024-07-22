document.getElementById('add-task-btn').addEventListener('click', function() {
    addTask();
});

document.getElementById('task-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskItem.appendChild(taskContent);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '&times;';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
        taskItem.appendChild(deleteBtn);

        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });

        taskList.appendChild(taskItem);

        taskInput.value = '';
        taskInput.focus();
    }
}
