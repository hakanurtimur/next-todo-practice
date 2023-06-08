import React, {useEffect, createContext, useContext} from "react";
import {collection} from "@firebase/firestore";

import db from "@/config/firebase";
import {onSnapshot, doc, setDoc} from "firebase/firestore";
import {AuthContext} from "@/context/AuthContext";


export const TodoContext = createContext<any>({});
const TodoContextProvider = ({children}: {children: React.ReactNode}) => {

    const [todos, setTodos] = React.useState<any>([]); // [
    const collectionRef = collection(db, 'todos');
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [title, setTitle] = React.useState<any>([]);
    const [description, setDescription] = React.useState<any>([]);
    const [error, setError] = React.useState<any>(null);
    const {user} = useContext(AuthContext);

    useEffect(() => {

            setIsLoading(true)


            const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
                const items: object[] = [];

                querySnapshot.forEach((doc) => {
                    items.push(doc.data());
                });
                setTodos(items);
                setIsLoading(false);


            }, (error) => {
                setError(error);
            });


            return () => unsubscribe();

        },
        []);

    async function addTodo(title: string, description: string) {
        const owner = user ? user.uid : 'unknown';
        const ownerEmail = user ? user.email : 'unknown';

        const newTodo = {
            title: title,
            description: description,
            isCompleted: false,
            id: Date.now(),
            owner,
            ownerEmail,
        };

        try {
            const todoRef = doc(collectionRef);
            await setDoc(todoRef, newTodo);
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <TodoContext.Provider value={{todos, isLoading, error, title, setTitle, description, setDescription, addTodo}}>
            {children}
        </TodoContext.Provider>
    );

}

export default TodoContextProvider;

