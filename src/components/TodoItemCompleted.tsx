import React, { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import TodoContextModel from "@/models/todoContextModel";
import Todo from "@/models/todo";

const TodoItemCompleted: React.FC<{
  title: string;
  id: string;
  isCompleted: boolean;
  description: string;
  item: Todo;
}> = (props) => {
  const [isShown, setIsShown] = React.useState(false);

  const { deleteTodo } = useContext(TodoContext) as TodoContextModel;
  const { unCompleteTodo } = useContext(TodoContext) as TodoContextModel;

  const deleteHandler = async () => {
    await deleteTodo(props.item);
  };

  const unCompleteHandler = async () => {
    await unCompleteTodo(props.item);
  };

  const showDetailsHandler = () => {
    setIsShown((prevState) => !prevState);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text/plain", props.id);
    console.log(event.dataTransfer.getData("text/plain"));
  };

  return (
    <div
      className="flex flex-row items-center w-full "
      onDragStart={handleDragStart}
      draggable={true}
    >
      <div
        className={`flex justify-center flex-shrink-0 items-center rounded-full border-1 border-primary-900 w-7  
        h-7  bg-primary-100 hover:animate-bounce hover:bg-fifth-900`}
      >
        <button
          className="w-full text-primary-900 hover:text-primary-500 text-1xl"
          onClick={unCompleteHandler}
        >
          &#x238B;
        </button>
      </div>
      <li
        className={`flex flex-col justify-between w-full border-2 border-primary-100 text-blue-950 p-2 m-2 rounded`}
      >
        <div className="flex flex-row justify-between gap-1">
          <p className="text-primary-900 text-1xl whitespace-normal break-words w-20 xs:w-60">
            {props.title}
          </p>

          <div className="flex flex-row gap-2">
            <button
              className="text-fifth-900 hover:text-fifth-500"
              onClick={deleteHandler}
            >
              &#x2715;
            </button>

            <button
              className="text-primary-900 hover:text-primary-500"
              onClick={showDetailsHandler}
            >
              {isShown ? "▲" : "▼"}
            </button>
          </div>
        </div>
        {isShown && (
          <p
            className={`text-primary-500 whitespace-normal break-words w-20 xs:w-60 ${
              isShown && "animate-menu-down"
            }`}
          >
            {props.description}
          </p>
        )}
      </li>
    </div>
  );
};

export default TodoItemCompleted;
