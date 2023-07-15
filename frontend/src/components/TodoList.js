import React from "react";

import TodoCard from "./TodoCard";

const TodoList = ({ todos, handleCheckBoxChange, handleDelete, isLoading }) => {
  return (
    <div className="Container">
      <h2>TodoList</h2>
      {!isLoading ? (
        todos.map((todo) => {
          return (
            <TodoCard
              key={todo._id}
              id={todo._id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              dueDate={todo.dueDate}
              handleCheckBoxChange={handleCheckBoxChange}
              handleDelete={handleDelete}
            />
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default TodoList;
