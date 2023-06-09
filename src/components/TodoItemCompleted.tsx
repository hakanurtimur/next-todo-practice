import React from "react";



const TodoItemCompleted: React.FC<{ title: string, id: string, isCompleted: boolean, description: string }> = (props) => {


    const [isShown, setIsShown] = React.useState(false);

    const showDetailsHandler = () => {
        setIsShown(prevState => !prevState);
    }




    return <li className='flex flex-col justify-between w-8/12 border-2 border-b-blue-950 text-blue-950 p-3 m-3 rounded'>
        <div className='flex flex-row justify-between'>
            <button><h1>{props.title}</h1></button>
            <button onClick={showDetailsHandler}>Details</button>
        </div>
        {isShown && <p>{props.description}</p>}
    </li>
}

export default TodoItemCompleted;