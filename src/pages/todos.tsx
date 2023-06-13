import Todos from "@/components/Todos";
import React from "react";
import { TodoContext } from "@/context/TodoContext";

const TodosPage = () => {
  const { todos } = React.useContext(TodoContext);

  return <Todos todos={todos} />;
};

export default TodosPage;
