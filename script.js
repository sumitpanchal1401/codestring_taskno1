function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Enter a task Here.');
        return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function () {
        li.remove();
    };

    // Append remove button to list item
    li.appendChild(removeBtn);

    // Append list item to task list
    document.getElementById('taskList').appendChild(li);

    // Clear input field
    input.value = '';
}
