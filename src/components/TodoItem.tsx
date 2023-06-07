import React from "react";
import {useRouter} from "next/router";


const TodoItem: React.FC<{ title: string, id: string, isCompleted: boolean, description: string }> = (props) => {

    const router = useRouter();
    const [isShown, setIsShown] = React.useState(false);

    const showDetailsHandler = () => {
        setIsShown(prevState => !prevState);
    }


    const clickHandler = async () => {
        const response = await fetch(`https://react-http-3a15e-default-rtdb.firebaseio.com/todos/${props.id}.json`, {
            method: 'PUT',
            body: JSON.stringify({title: props.title, isCompleted: true}),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        console.log(data)

        router.reload()


    }

    return <li className='flex flex-col justify-between w-8/12 border-2 border-b-blue-950 text-blue-950 p-3 m-3 rounded'>
        <div className='flex flex-row justify-between'>
            <button onClick={clickHandler}><h1>{props.title}</h1></button>
            <button onClick={showDetailsHandler}>Details</button>
        </div>
        {isShown && <p>{props.description}</p>}
        </li>
        }

export default TodoItem;