const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

const createTaskItem = (text) => {
  const listItem = document.createElement('li');
  listItem.className = 'task-item';

  const leftBlock = document.createElement('div');
  leftBlock.className = 'task-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskText = document.createElement('span');
  taskText.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '🗑';
  deleteButton.className = 'delete-btn';

  checkbox.addEventListener('change', () => {
    taskText.classList.toggle('task-done');
  });

  deleteButton.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });

  leftBlock.appendChild(checkbox);
  leftBlock.appendChild(taskText);

  listItem.appendChild(leftBlock);
  listItem.appendChild(deleteButton);

  return listItem;
};

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const taskItem = createTaskItem(taskText);
  taskList.appendChild(taskItem);

  taskInput.value = '';
});