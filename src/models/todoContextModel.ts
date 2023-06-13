import Todo from "./todo";
import { FirestoreError } from "firebase/firestore";

interface TodoContextModel {
  todos: Todo[];
  isLoading: boolean;
  error: FirestoreError | null;
  addTodo: (title: string, description: string) => Promise<void>;
  deleteTodo: (todo: Todo) => Promise<void>;
  completeTodo: (todo: Todo) => Promise<void>;
  unCompleteTodo: (todo: Todo) => Promise<void>;
  dragForComplete: (id: string) => Promise<void>;
  dragForUnComplete: (id: string) => Promise<void>;
}

export default TodoContextModel;
