class Todo {
  id: string;
  title: string;
  isCompleted: boolean;
  description: string;
  owner: string;

  constructor(
    title: string,
    id: string,
    isCompleted: boolean,
    description: string,
    owner: string
  ) {
    this.id = id;
    this.title = title;
    this.isCompleted = isCompleted;
    this.description = description;
    this.owner = owner;
  }
}

export default Todo;
