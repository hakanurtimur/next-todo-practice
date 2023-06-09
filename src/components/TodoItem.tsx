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







    return <li className='flex flex-col justify-between w-8/12 border-2 border-b-blue-950 text-blue-950 p-3 m-3 rounded'>
        <div className='flex flex-row justify-between'>
            <button><h1>{props.title}</h1></button>
            <button onClick={completeHandler}>Completed</button>
            <button onClick={showDetailsHandler}>Details</button>
        </div>
        {isShown && <p>{props.description}</p>}
        </li>
        }

export default TodoItem;