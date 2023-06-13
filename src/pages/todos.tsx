import Todos from "@/components/Todos";
import React from "react";
import { TodoContext } from "@/context/TodoContext";
import TodoContextModel from "@/models/todoContextModel";

const TodosPage = () => {
  const { todos } = React.useContext(TodoContext) as TodoContextModel;

  return <Todos todos={todos} />;
};

export default TodosPage;
