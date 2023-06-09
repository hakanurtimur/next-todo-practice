import React from 'react';
import Todo from '@/models/todo';
import TodoItem from '@/components/TodoItem';
import {useContext} from "react";
import {AuthContext} from "@/context/AuthContext";
import TodoItemCompleted from "@/components/TodoItemCompleted";

const Todos: React.FC<{ todos: Todo[] }> = (props) => {

    const {user} = useContext(AuthContext);
    return (
        <>
            <ul className='flex flex-col  items-center border-amber-100 h-full w-9/10'>
                {props.todos.map((todo) => {
                    if (!todo.isCompleted && todo.owner === user.uid) {
                        return <TodoItem item = {todo} key={todo.id} title={todo.title} id={todo.id} isCompleted={todo.isCompleted}
                                         description={todo.description}/>
                    }
                })}
            </ul>
            <ul className='flex flex-col  items-center border-amber-100 h-full w-9/10'>
                {props.todos.map((todo) => {
                    if (todo.isCompleted && todo.owner === user.uid) {
                        return <TodoItemCompleted key={todo.id} title={todo.title} id={todo.id}
                                                  isCompleted={todo.isCompleted} description={todo.description}/>
                    }
                })}
            </ul>
        </>
    )
}

export default Todos;