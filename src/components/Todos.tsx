import React, { useContext } from "react";
import Todo from "@/models/todo";
import TodoItem from "@/components/TodoItem";
import { AuthContext } from "@/context/AuthContext";
import TodoItemCompleted from "@/components/TodoItemCompleted";
import { TodoContext } from "@/context/TodoContext";
import AuthContextModel from "@/models/authContextModel";
import TodoContextModel from "@/models/todoContextModel";

const Todos: React.FC<{ todos: Todo[] }> = (props) => {
  const { user } = useContext(AuthContext) as AuthContextModel;

  const { dragForComplete, dragForUnComplete } = useContext(
    TodoContext
  ) as TodoContextModel;

  const handleDragOver = (event: React.DragEvent<HTMLUListElement>) => {
    event.preventDefault();
  };
  const handleDropForComplete = async (
    event: React.DragEvent<HTMLUListElement>
  ) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    await dragForComplete(id);
  };
  const handleDropForUnComplete = async (
    event: React.DragEvent<HTMLUListElement>
  ) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    await dragForUnComplete(id);
  };

  return (
    <div className="mt-3 lg:flex lg:flex-row lg:items-start w-full justify-between items-center flex flex-col px-5">
      <ul
        onDrop={handleDropForUnComplete}
        onDragOver={handleDragOver}
        className="flex-1 flex flex-col lg:mx-10  flex-shrink-0 border-b-2 border-primary-50 pb-10  w-8/12 items-center h-full mb-10"
      >
        <h1 className="text-primary-900 text-2xl">Target Todos</h1>

        {props.todos.map((todo) => {
          if (!todo.isCompleted && user && todo.owner === user.uid) {
            return (
              <TodoItem
                item={todo}
                key={todo.id}
                title={todo.title}
                id={todo.id}
                isCompleted={todo.isCompleted}
                description={todo.description}
              />
            );
          }
        })}
      </ul>

      <ul
        onDrop={handleDropForComplete}
        onDragOver={handleDragOver}
        className="flex-1 flex flex-col  border-b-2 border-primary-50 pb-10  w-8/12 items-center h-full mb-10"
      >
        <h1 className="text-primary-900 text-2xl">Completed Todos </h1>

        {props.todos.map((todo) => {
          if (todo.isCompleted && user && todo.owner === user.uid) {
            return (
              <TodoItemCompleted
                item={todo}
                key={todo.id}
                title={todo.title}
                id={todo.id}
                isCompleted={todo.isCompleted}
                description={todo.description}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Todos;
