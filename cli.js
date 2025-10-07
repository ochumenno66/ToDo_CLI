#!/usr/bin/env node

import { argsParse } from "./util/argsParse.js";
import {
  addTask,
  listTasks,
  getTask,
  updateTask,
  updateStatus,
  deleteTask,
} from "./service/task.service.js";

const args = argsParse(process.argv);
const [command, ...rest] = process.argv.slice(2);

const app = async () => {
  switch (command) {
    case "add":
      await addTask(rest.join(" "));
      break;
    case "list":
      await listTasks();
      break;
    case "get":
      await getTask(rest[0]);
      break;
    case "update":
      await updateTask(rest[0], rest.slice(1).join(" "));
      break;
    case "status":
      await updateStatus(rest[0], rest.slice(1).join(" "));
      break;
    case "delete":
      await deleteTask(rest[0]);
      break;
    case "help":
      console.log(`
  To-Do CLI — команды:
  add <task>               | Добавить задачу
  list                     | Показать все задачи
  get <id>                 | Показать информацию о задаче
  update <id> <newTask>    | Обновить задачу
  status <id> <newStatus>  | Обновить статус задачи
  delete <id>              | Удалить задачу
`);
      break;
    default:
      console.log("Неверная команда.");
  }
};

app();

/*
To-Do CLI
Напишите CLI-приложение для управления задачами (To-Do List).
Приложение должно позволять пользователю создавать, просматривать,
обновлять и удалять задачи.

Требования:
Приложение должно быть запускаемым из командной строки и принимать
команды от пользователя.

Приложение должно поддерживать следующие команды:
add <task>: добавить новую задачу.
list: вывести список всех задач.
get <id>: вывести информацию о задаче с указанным идентификатором.
update <id> <newTask>: обновить задачу с указанным идентификатором.
status <id> <newStatus>: обновить статус задачи с указанным
идентификатором.
delete <id>: удалить задачу с указанным идентификатором.
Задачи должны сохраняться в файле, чтобы они могли быть доступными
между разными запусками приложения.

Приложение должно использовать модульную структуру для разделения
функциональности, например, модули для работы с задачами, обработки
команд и взаимодействия с файловой системой.
*/
