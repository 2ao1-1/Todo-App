import { getUserData, saveUserData } from "./localStorage";

// get all todos
export const getAllTodoLists = (email: string): TodoList[] => {
  const userData = getUserData(email);
  return userData?.todoLists || [];
};

// create todolist
export const createTodoList = (email: string, title: string): TodoList => {
  const userData = getUserData(email);
  if (!userData) throw new Error("User not found");

  const newList: TodoList = {
    id: Date.now().toString(),
    title,
    tasks: [],
  };

  userData.todoLists.push(newList);
  saveUserData(userData);

  return newList;
};

// update todolist
export const updateTodoList = (
  email: string,
  listId: string,
  updates: Partial<TodoList>
): TodoList => {
  const userData = getUserData(email);
  if (!userData) throw new Error("User not found");

  const list = userData.todoLists.find((l) => l.id === listId);
  if (!list) throw new Error("Todo list not found");

  Object.assign(list, updates);
  saveUserData(userData);

  return list;
};

// delete todo list
export const deleteTodoList = (email: string, listId: string): void => {
  const userData = getUserData(email);
  if (!userData) throw new Error("User not found");

  userData.todoLists = userData.todoLists.filter((l) => l.id !== listId);
  saveUserData(userData);
};

// add task
const addTask = (email: string, listId: string, taskText: string): Task => {
  const userData = getUserData(email);
  if (!userData) throw new Error("User not found");

  const list = userData.todoLists.find((l) => l.id === listId);
  if (!list) throw new Error("Todo list not found");

  const newTask: Task = {
    id: Date.now().toString(),
    text: taskText,
    completed: false,
  };

  list.tasks.push(newTask);
  saveUserData(userData);

  return newTask;
};

// updateTask
export const updateTask = (
  email: string,
  listId: string,
  taskId: string,
  updates: Partial<Task>
): Task => {
  const userData = getUserData(email);
  if (!userData) throw new Error("User not found");

  const list = userData.todoLists.find((l) => l.id === listId);
  if (!list) throw new Error("Todo list not found");

  const task = list.tasks.find((t) => t.id === taskId);
  if (!task) throw new Error("Task not found");

  Object.assign(task, updates);
  saveUserData(userData);

  return task;
};

// delete  task
export const deleteTask = (
  email: string,
  listId: string,
  taskId: string
): void => {
  const userData = getUserData(email);
  if (!userData) throw new Error("User not found");

  const list = userData.todoLists.find((l) => l.id === listId);
  if (!list) throw new Error("Todo list not found");

  list.tasks = list.tasks.filter((t) => t.id !== taskId);
  saveUserData(userData);
};
