import fs from 'node:fs/promises';
const tasksFile = './tasks.json';

export const loadTasks = async () => {
  try {
    const data = await fs.readFile(tasksFile, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const saveTasks = async (tasks) => {
  await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
};

// Добавить задачу
export const addTask = async (text) => {
  const tasks = await loadTasks();
  const id = tasks.length + 1;
  const task = {
    id,
    text,
    status: 'в работе',
  };
  tasks.push(task);
  await saveTasks(tasks);
  console.log(`Задача добавлена с идентификатором ${id}`);
};

// Показать все задачи
export const listTasks = async () => {
  const tasks = await loadTasks();
  if (!tasks.length) return console.log('Список задач пуст.');
  console.log('Список задач:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.status}] ${task.text}`);
  });
};

// Показать одну задачу
export const getTask = async (id) => {
  const tasks = await loadTasks();
  const task = tasks.find((t) => t.id === Number(id));
  if (!task) return console.log(`Задача с идентификатором ${id} не найдена`);
  console.log(`Задача с идентификатором ${id}:`);
  console.log(`Название: ${task.text}`);
  console.log(`Статус: ${task.status}`);
};

// Обновить текст
export const updateTask = async (id, newText) => {
  const tasks = await loadTasks();
  const task = tasks.find((t) => t.id == id);
  if (!task) return console.log(`Задача с идентификатором ${id} не найдена`);
  task.text = newText;
  await saveTasks(tasks);
  console.log(`Задача с идентификатором ${id} обновлена`);
};

// Обновить
export const updateStatus = async (id, newStatus) => {
  const tasks = await loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) return console.log(`Задача с идентификатором ${id} не найдена`);
  task.status = newStatus;
  await saveTasks(tasks);
  console.log(`Статус задачи с идентификатором ${id} обновлен`);
};

// Удалить
export const deleteTask = async (id) => {
  let tasks = await loadTasks();
  const task = tasks.find((t) => t.id == id);
  if (!task) return console.log(`Задача с идентификатором ${id} не найдена`);
  tasks = tasks.filter((t) => t.id != id);
  await saveTasks(tasks);
  console.log(`Задача с идентификатором ${id} удалена`);
};
