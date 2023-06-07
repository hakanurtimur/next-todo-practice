import React, {useRef} from 'react';


const NewTodo: React.FC<{onSend : (text: string, description: string) => void}> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLInputElement>(null);
    const [disabled, setDisabled] = React.useState(false);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = textInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        const enteredDescription = descriptionInputRef.current!.value;
        if(enteredDescription.trim().length === 0){
            return;
        }

        setDisabled(true)
        props.onSend(enteredText, enteredDescription);
        textInputRef.current!.value = '';
        setDisabled(false);
    };
    return (
        <form onSubmit={submitHandler} className='self-center flex flex-col items-center justify-center w-9/10 text-blue-950'>
            <label htmlFor="todo-text">Todo Text</label>
            <input  className='border-b-blue-950 border-2 rounded shadow pl-1'  type="text" id="todo-text" ref={textInputRef}/>
            <label htmlFor="todo-description">Todo Description</label>
            <input className='border-b-blue-950 border-2 rounded shadow pl-1' type="text" id="todo-description" ref={descriptionInputRef}/>
            <button disabled={disabled} type="submit" className='bg-blue-300 m-14 p-3 rounded shadow-blue-900 hover:bg-blue-200 disabled:opacity-50'>Add Todo</button>
        </form>
    )
}

export default NewTodo;