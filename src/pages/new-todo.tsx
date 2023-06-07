import React from "react";
import NewTodo from "@/components/NewTodo";
import {useRouter} from "next/router";


const NewTodoPage = () => {
    const router = useRouter();
    const sendTodo = async (todoText: string, todoDescription: string) => {

        const response = await fetch('https://react-http-3a15e-default-rtdb.firebaseio.com/todos.json', {
            method: 'POST',
            body: JSON.stringify({title: todoText, isCompleted: false, description: todoDescription}),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        await router.push('/todos')
        console.log(data)
    }

    return (
        <NewTodo onSend={sendTodo}/>
    )
}

export default NewTodoPage;