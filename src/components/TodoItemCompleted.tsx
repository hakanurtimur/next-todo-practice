import React, {useContext} from "react";
import {TodoContext} from "@/context/TodoContext";


const TodoItemCompleted: React.FC<{
    title: string,
    id: string,
    isCompleted: boolean,
    description: string
    item: object
}> = (props) => {


    const [isShown, setIsShown] = React.useState(false);

    const {deleteTodo} = useContext(TodoContext);

    const deleteHandler = () => {
        deleteTodo(props.item)
    }

    const showDetailsHandler = () => {
        setIsShown(prevState => !prevState);
    }


    return <li
        className='flex flex-shrink-0 flex-col justify-between w-8/12 border-2 border-b-blue-950 text-blue-950 p-3 m-3 rounded'>
        <div className='flex  flex-row justify-between gap-1'>
            <p className='text-blue-900 text-l whitespace-normal break-words w-60 '>{props.title}</p>
            <div className='flex flex-row gap-1'>
                <button onClick={deleteHandler}>✘</button>
                <button onClick={showDetailsHandler}>▼</button>
            </div>
        </div>
        {isShown && <p className='whitespace-normal break-words flex-grow-0'>{props.description}</p>}
    </li>
}

export default TodoItemCompleted;