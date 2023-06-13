import React, { createContext, useContext, useEffect } from "react";

import db from "@/config/firebase";
import {
  collection,
  deleteDoc,
  doc,
  FirestoreError,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { AuthContext } from "@/context/AuthContext";
import { uuidv4 } from "@firebase/util";
import AuthContextModel from "@/models/authContextModel";
import Todo from "@/models/todo";
import TodoContextModel from "@/models/todoContextModel";

export const TodoContext = createContext<TodoContextModel | null>(null);
const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = React.useState<Todo[]>([]); // [
  const collectionRef = collection(db, "todos");
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<FirestoreError | null>(null);
  const { user } = useContext(AuthContext) as AuthContextModel;

  -useEffect(() => {
    setIsLoading(true);

    const unsubscribe = onSnapshot(
      collectionRef,
      (querySnapshot) => {
        const items: object[] = [];

        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setTodos(items as Todo[]);
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

  async function completeTodo(todo: Todo) {
    try {
      const todoRef = doc(collectionRef, todo.id);
      await updateDoc(todoRef, { isCompleted: true });
    } catch (error) {
      console.error(error);
    }
  }
  async function unCompleteTodo(todo: Todo) {
    try {
      const todoRef = doc(collectionRef, todo.id);
      await updateDoc(todoRef, { isCompleted: false });
    } catch (error) {
      console.error(error);
    }
  }

  async function dragForComplete(id: string) {
    try {
      const todoRef = doc(collectionRef, id);
      await updateDoc(todoRef, { isCompleted: true });
    } catch (error) {
      console.error(error);
    }
  }
  async function dragForUnComplete(id: string) {
    try {
      const todoRef = doc(collectionRef, id);
      await updateDoc(todoRef, { isCompleted: false });
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTodo(todo: Todo) {
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
