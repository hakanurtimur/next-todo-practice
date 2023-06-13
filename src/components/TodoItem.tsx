import React, { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";

const TodoItem: React.FC<{
  item: object;
  title: string;
  id: string;
  isCompleted: boolean;
  description: string;
}> = (props) => {
  const [isShown, setIsShown] = React.useState(false);

  const { completeTodo, deleteTodo } = useContext(TodoContext);

  const showDetailsHandler = () => {
    setIsShown((prevState) => !prevState);
  };

  const completeHandler = () => {
    completeTodo(props.item);
  };

  const deleteHandler = () => {
    deleteTodo(props.item);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text/plain", props.id);
    console.log(event.dataTransfer.getData("text/plain"));
  };

  return (
    <div
      className="flex flex-row items-center w-full"
      onDragStart={handleDragStart}
      draggable={true}
    >
      <div
        className={`flex justify-center flex-shrink-0 items-center rounded-full border-1 border-primary-900 w-7  h-7  bg-primary-100 
      hover:animate-bounce hover:bg-secondary-900`}
      >
        <button
          className="w-full text-primary-900 hover:text-primary-500 text-1xl"
          onClick={completeHandler}
        >
          &#x2713;
        </button>
      </div>
      <li
        className={`flex flex-col justify-between w-full border-2 border-primary-100 text-blue-950 p-2 m-2 rounded`}
      >
        <div className="flex flex-row justify-between gap-1">
          <p className="text-primary-900  text-1xl whitespace-normal break-words w-20 xs:w-60">
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
            className={`text-primary-500 w-20 xs:w-60 whitespace-normal break-words flex-grow-1 ${
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

export default TodoItem;
