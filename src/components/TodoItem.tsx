import React, {useContext} from "react";
import {TodoContext} from "@/context/TodoContext";




const TodoItem: React.FC<{ item: object, title: string, id: string, isCompleted: boolean, description: string }> = (props) => {


    const [isShown, setIsShown] = React.useState(false);

    const {completeTodo} = useContext(TodoContext);

    const showDetailsHandler = () => {
        setIsShown(prevState => !prevState);
    }

    const completeHandler = () => {
        completeTodo(props.item)
    }







    return <li className='flex flex-col justify-between w-8/12 border-2 border-b-blue-950 text-blue-950 p-2 m-2 rounded'>
        <div className='flex flex-row justify-between gap-1'>
            <p className='text-blue-900 text-1xl whitespace-normal break-words w-60 '>{props.title}</p>
            <div className='flex flex-row gap-1'>
            <button onClick={completeHandler}>✔</button>
            <button>✘</button>
            <button onClick={showDetailsHandler}>▼</button>
            </div>
        </div>
        {isShown && <p className='whitespace-normal break-words flex-grow-0 flex-shrink-0'>{props.description}</p>}
        </li>
        }

export default TodoItem;