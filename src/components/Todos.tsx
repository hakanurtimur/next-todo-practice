import React from 'react';
import Todo from '@/models/todo';
import TodoItem from '@/components/TodoItem';
import {useContext} from "react";
import {AuthContext} from "@/context/AuthContext";
import TodoItemCompleted from "@/components/TodoItemCompleted";


const Todos: React.FC<{ todos: Todo[] }> = (props) => {


    const {user} = useContext(AuthContext);
    return (
        <div className='mt-3 lg:flex lg:flex-row w-full justify-between md:flex md:flex-col sm:flex-col'>
            <ul className='flex-1 flex flex-col  items-center border-amber-100 h-full w-full '>
                <h1 className='text-blue-900 text-2xl'>Target Todos</h1>

                {props.todos.map((todo) => {
                    if (!todo.isCompleted && todo.owner === user.uid) {
                        return <TodoItem item={todo} key={todo.id} title={todo.title} id={todo.id}
                                         isCompleted={todo.isCompleted}
                                         description={todo.description}/>
                    } else {

                    }
                })}
            </ul>
            <ul className='flex-1 flex flex-col  items-center border-amber-100 h-full w-full'>
                <h1 className='text-blue-900 text-2xl'>Completed Todos </h1>

                {props.todos.map((todo) => {
                    if (todo.isCompleted && todo.owner === user.uid) {
                        return <TodoItemCompleted item={todo} key={todo.id} title={todo.title} id={todo.id}
                                                  isCompleted={todo.isCompleted} description={todo.description}/>
                    }
                })}
            </ul>
        </div>
    )
}

export default Todos;