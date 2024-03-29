# Todo list mobx

## О проекте

Todo list - это реализация списка дел с фильтрами заметок, с возможностью редактирования и удаления. Все заметки хранятся локально. 

## Сделано с использованием 

- TypeScript
- React & React Hooks
- MobX
- SCSS(BEM)

## Getting started

### Скачивание репозитория

`git clone https://github.com/tuddev/todo-list-mobx-sass.git`

### Установка зависимостей

`npm i`

### Запуск проекта 

`npm run start`

## Детали реализации

Этот проект - обычное SPA, состоящее из одной страницы - компонент `<App/>`. 
Заметки хранятся в `LocalStorage` в поле `notes`.

Данные внутри приложения хранятся в MobX сторах, которые находятся в React Context API:
- StorageStore (StorageContext) - отвечает за извлечение данных из `LocalStorage`;
- NotesStore (NotesContext) - отвечает за работу с заметками, например, создание, удаление, редактирование и т.д.;
- ViewNotesStore (ViewNotesContext) - отвечает за видимые заметки и их фильтры.

Решила разделить работу с данными на разные сторы, чтобы каждый из них отвечал только за одни функции и данные (работу с хранилищем, работу с хранящимися заметками и работу фильтров).

## Что можно улучшить

- добавить алерты на основные действия с заметками;
