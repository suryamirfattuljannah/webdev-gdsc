let editingTaskId = null;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tf-input').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const inputField = document.getElementById('tf-input');
    const input = inputField.value.trim();
    if (!input) return;

    if (editingTaskId) {
        const task = document.getElementById(editingTaskId);
        task.childNodes[0].nodeValue = input + ' '; // Update text without replacing buttons
        editingTaskId = null;
        document.querySelector('.button').textContent = 'Add Task';
    } else {
        const task = document.createElement('li');
        task.textContent = input + ' ';
        task.id = new Date().valueOf().toString();
        task.classList.add('list-item');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => editTask(task.id));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => deleteTask(task.id));

        task.appendChild(editButton);
        task.appendChild(deleteButton);
        document.getElementById('task-container').appendChild(task);
    }

    inputField.value = '';
}

function deleteTask(id) {
    document.getElementById(id)?.remove();
}

function editTask(id) {
    const task = document.getElementById(id);
    document.getElementById('tf-input').value = task.childNodes[0].nodeValue.trim();
    document.querySelector('.button').textContent = 'Save Task';
    editingTaskId = id;
}