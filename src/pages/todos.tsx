import Todos from "@/components/Todos";
import Todo from '@/models/todo';
import React, {useEffect, useState} from "react";

const TodosPage = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const fetchTodos = async () => {
        const response = await fetch('https://react-http-3a15e-default-rtdb.firebaseio.com/todos.json');
        const data = await response.json();
        const todos: Todo[] = [];
        for (const key in data) {
            todos.push({
                id: key, title: data[key].title, isCompleted: data[key].isCompleted, description: data[key].description
            })
        }

        setTodoList(todos)


    }
    useEffect(() => {
        fetchTodos();
    }, [])

    return <Todos todos={todoList}/>
}


export default TodosPage;