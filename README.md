
## 📁 Структура проекта

```bash
TO-DO/
├── cli.js              # Основной скрипт, команды CLI
├── service/
│   └──task.service.js  # Основная логика
├── util/
│   └── argsParse.js    # Разбор аргументов
└── tasks.json          # Файл с задачами (создаётся автоматически)
```

## Примеры работы c командами CLI

```bash
node cli.js add "Позвонить маме"
node cli.js add "Купить слона"
node cli.js add "Написать todo"

node cli.js list

node cli.js update 2 "Выучить Node.js"

node cli.js status 1 "Выполнена"

node cli.js get 3

node cli.js delete 2

node cli.js test
