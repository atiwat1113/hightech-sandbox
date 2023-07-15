import React, { useState, useEffect } from "react";
import apiClient from "./apiClient";

import "./App.css";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    setIsLoading(() => true);
    await apiClient
      .get("/tasks/")
      .then((res) => {
        setTodos(() => {
          return res?.data?.data ?? [];
        });
      })
      .catch((err) => {
        console.log(err);
      });

    setIsLoading(() => false);
  };

  const handleCheckBoxChange = async (id, checked) => {
    await apiClient
      .patch(`/tasks/${id}`, {
        isCompleted: checked,
      })
      .then(() => {
        fetchTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    await apiClient
      .post("/tasks", {
        title: e.target.title.value,
        dueDate: e.target.dueDate.value,
      })
      .then(() => {
        fetchTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async (id) => {
    await apiClient
      .delete(`/tasks/${id}`)
      .then(() => {
        fetchTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>HighTech TODO List</h1>
      </header>
      <main className="App-main">
        <NewTodo handleSubmit={handleSubmit} />
        <hr
          style={{
            width: "100%",
            margin: "1rem 0",
            color: "white",
          }}
        />
        <TodoList
          todos={todos}
          handleCheckBoxChange={handleCheckBoxChange}
          handleDelete={handleDelete}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}

export default App;
