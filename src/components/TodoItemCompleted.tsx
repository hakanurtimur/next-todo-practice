import React, { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";

const TodoItemCompleted: React.FC<{
  title: string;
  id: string;
  isCompleted: boolean;
  description: string;
  item: object;
}> = (props) => {
  const [isShown, setIsShown] = React.useState(false);

  const { deleteTodo } = useContext(TodoContext);

  const deleteHandler = () => {
    deleteTodo(props.item);
  };

  const showDetailsHandler = () => {
    setIsShown((prevState) => !prevState);
  };

  return (
    <div className="flex flex-row items-center w-full">
      <div
        className={`flex justify-center items-center rounded-full border-1 border-primary-900 w-7 h-7 bg-blue-0`}
      ></div>
      <li
        className={`flex flex-col justify-between w-full border-2 border-primary-100 text-blue-950 p-2 m-2 rounded`}
      >
        <div className="flex flex-row justify-between gap-1">
          <p className="text-primary-900 text-1xl whitespace-normal break-words w-60 ">
            {props.title}
          </p>

          <div className="flex flex-row gap-2">
            <div>
              <button
                className="text-fifth-900 hover:text-fifth-500"
                onClick={deleteHandler}
              >
                &#x2715;
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="text-primary-900 hover:text-primary-500"
                onClick={showDetailsHandler}
              >
                {!isShown ? "▲" : "▼"}
              </button>
            </div>
          </div>
        </div>
        {isShown && (
          <p
            className={`text-primary-500 whitespace-normal break-words flex-grow-0 ${
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
