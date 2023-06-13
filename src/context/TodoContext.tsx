import React, { useEffect, createContext, useContext } from "react";

import db from "@/config/firebase";
import {
  collection,
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { AuthContext } from "@/context/AuthContext";
import { uuidv4 } from "@firebase/util";

export const TodoContext = createContext<any>({});
const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = React.useState<any>([]); // [
  const collectionRef = collection(db, "todos");
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [title, setTitle] = React.useState<any>([]);
  const [description, setDescription] = React.useState<any>([]);
  const [error, setError] = React.useState<any>(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = onSnapshot(
      collectionRef,
      (querySnapshot) => {
        const items: object[] = [];

        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setTodos(items);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
      }
    );

    return () => unsubscribe();
  }, []);

  async function addTodo(title: string, description: string) {
    const owner = user ? user.uid : "unknown";
    const ownerEmail = user ? user.email : "unknown";

    const newTodo = {
      title: title,
      description: description,
      isCompleted: false,
      id: uuidv4(),
      owner,
      ownerEmail,
    };

    try {
      const todoRef = doc(collectionRef, newTodo.id);
      await setDoc(todoRef, newTodo);
    } catch (error) {
      console.error(error);
    }
  }

  async function completeTodo(todo: any) {
    try {
      const todoRef = doc(collectionRef, todo.id);
      await updateDoc(todoRef, { isCompleted: true });
    } catch (error) {
      console.error(error);
    }
  }
  async function unCompleteTodo(todo: any) {
    try {
      const todoRef = doc(collectionRef, todo.id);
      await updateDoc(todoRef, { isCompleted: false });
    } catch (error) {
      console.error(error);
    }
  }


  async function dragForComplete(id: any) {
    try {
      const todoRef = doc(collectionRef, id);
      await updateDoc(todoRef, { isCompleted: true })
    } catch (error) {
      console.error(error);
    }
  }
  async function dragForUnComplete(id: any) {
    try {
      const todoRef = doc(collectionRef, id);
      await updateDoc(todoRef, { isCompleted: false })
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTodo(todo: any) {
    try {
      const todoRef = doc(collectionRef, todo.id);
      await deleteDoc(todoRef);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        isLoading,
        error,
        title,
        setTitle,
        description,
        setDescription,
        addTodo,
        completeTodo,
        deleteTodo,
        unCompleteTodo,
        dragForComplete,
        dragForUnComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
