
class Todo {
  id: string;
  title: string;
  isCompleted: boolean;
  description: string;


  constructor(title: string, id: string, isCompleted: boolean, description: string) {
    this.id = id;
    this.title = title;
    this.isCompleted = isCompleted;
    this.description = description;

  }
}

export default Todo;