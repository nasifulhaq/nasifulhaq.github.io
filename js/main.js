// main.js - Task Manager logic

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const list = document.getElementById('task-list');

    function createTaskItem(taskText, completed = false) {
        const li = document.createElement('li');
        li.className = 'task-item' + (completed ? ' completed' : '');
        li.setAttribute('tabindex', '0');
        li.setAttribute('role', 'listitem');

        const span = document.createElement('span');
        span.textContent = taskText;

        const actions = document.createElement('div');
        actions.className = 'task-actions';

        const completeBtn = document.createElement('button');
        completeBtn.className = 'action';
        completeBtn.setAttribute('aria-label', completed ? 'Mark as incomplete' : 'Mark as completed');
        completeBtn.innerHTML = completed ? '↩️' : '✔️';
        completeBtn.onclick = function () {
            li.classList.toggle('completed');
            completeBtn.innerHTML = li.classList.contains('completed') ? '↩️' : '✔️';
            completeBtn.setAttribute('aria-label', li.classList.contains('completed') ? 'Mark as incomplete' : 'Mark as completed');
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'action';
        deleteBtn.setAttribute('aria-label', 'Delete task');
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.onclick = function () {
            li.remove();
        };

        actions.appendChild(completeBtn);
        actions.appendChild(deleteBtn);
        li.appendChild(span);
        li.appendChild(actions);
        return li;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText) {
            const taskItem = createTaskItem(taskText);
            list.appendChild(taskItem);
            input.value = '';
            input.focus();
        }
    });
});
