import React, { useContext, useRef } from "react";
import { TodoContext } from "@/context/TodoContext";
import { useRouter } from "next/router";
import TodoContextModel from "@/models/todoContextModel";

const NewTodo = () => {
  const router = useRouter();
  const { addTodo } = useContext(TodoContext) as TodoContextModel;
  const textInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const [disabled, setDisabled] = React.useState(false);
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!textInputRef.current || !descriptionInputRef.current) return;
    const enteredText = textInputRef.current?.value;
    if (enteredText && enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    const enteredDescription = descriptionInputRef.current?.value as string;
    if (enteredDescription && enteredDescription.trim().length === 0) {
      return;
    }

    setDisabled(true);
    await addTodo(enteredText, enteredDescription);
    if (textInputRef.current) {
      textInputRef.current.value = "";
    }
    setDisabled(false);
    await router.push("/todos");
  };
  return (
    <div>
      <h1 className="text-center text-primary-900 text-2xl">Add Todos</h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-between items-center text-primary-900 p-3 w-full m-auto"
      >
        <label className="w-8/12 m-1" htmlFor="todo-text">
          Todos Text
        </label>
        <input
          className="bg-primary-200 w-8/12 m-2 p-3 rounded
        hover:bg-primary-100"
          type="text"
          id="todo-text"
          ref={textInputRef}
        />
        <label className="w-8/12 m-1" htmlFor="todo-description">
          Todos Description
        </label>
        <input
          className="bg-primary-200 w-8/12 m-2 p-3 rounded
        hover:bg-primary-100"
          type="text"
          id="todo-description"
          ref={descriptionInputRef}
        />
        <button
          disabled={disabled}
          type="submit"
          className="w-8/12 bg-secondary-500 m-2 p-3 rounded  hover:bg-secondary-700 disabled:opacity-
        50"
        >
          Add Todos
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
