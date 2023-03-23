
let num: number = 0
class ToDo {

  date: number;
  works: Array<string>
  constructor(date: number, works: Array<string>) {
    this.date = date;
    this.works = works;
  }
  addTodoWork(): Array<object> {
    let todo = {
      date: this.date,
      works: this.works
    }
    todos.push(todo);
    return todos;
  }
}
class ToDoList {
  constructor() {
  }
  checkDayDouplecate(todos: object[]): any {
    let dayTodo = todos.map((todo: any, index: any, []) => {
      return todo.date
    })
    let isCheckDouble = dayTodo.every((day, index) => {
      return index === dayTodo.indexOf(day)
    })
    if (isCheckDouble) {
      return (todos);
    } else {
      return ('double');
    }
  }
}
const todos: Array<object> = []
let todo1 = new ToDo(11, ['Work 1', 'Work 2'])
let todo2 = new ToDo(16, ['Work 1', 'Work 2'])
let todo3 = new ToDo(14, ['Work 1', 'Work 2'])
todo1.addTodoWork()
todo2.addTodoWork()
todo3.addTodoWork()
// console.log(todos);

let todoList = new ToDoList();
console.log(
  todoList.checkDayDouplecate(todos));
