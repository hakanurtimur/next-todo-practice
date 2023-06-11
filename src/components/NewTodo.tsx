import React, { useRef } from "react";
import { TodoContext } from "@/context/TodoContext";
import { useRouter } from "next/router";

const NewTodo = () => {
  const router = useRouter();
  const { addTodo } = React.useContext(TodoContext);
  const textInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const [disabled, setDisabled] = React.useState(false);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    const enteredDescription = descriptionInputRef.current!.value;
    if (enteredDescription.trim().length === 0) {
      return;
    }

    setDisabled(true);
    addTodo(enteredText, enteredDescription);
    textInputRef.current!.value = "";
    setDisabled(false);
    router.push("/todos");
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-between items-center text-blue-950 p-3 w-full m-auto"
      >
        <label className="w-8/12 m-1" htmlFor="todo-text">
          Todos Text
        </label>
        <input
          className="bg-blue-200 m-2 p-3 rounded w-8/12 shadow-blue-900
        hover:bg-blue-100 active:bg-blue-5 disabled:opacity-50"
          type="text"
          id="todo-text"
          ref={textInputRef}
        />
        <label className="w-8/12 m-1" htmlFor="todo-description">
          Todos Description
        </label>
        <input
          className="bg-blue-200 m-2 p-3 rounded w-8/12 shadow-blue-900
        hover:bg-blue-100 active:bg-blue-5 disabled:opacity-50"
          type="text"
          id="todo-description"
          ref={descriptionInputRef}
        />
        <button
          disabled={disabled}
          type="submit"
          className="w-8/12 bg-blue-300 m-2 p-3 rounded shadow-blue-900
        hover:bg-blue-200 disabled:opacity-50 border-2 border-b-blue-950"
        >
          Add Todos
        </button>
      </form>
    </>
  );
};

export default NewTodo;
