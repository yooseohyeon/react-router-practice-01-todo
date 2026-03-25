import { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import TodosLayout from "./pages/TodosLayout";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";
import NewTodo from "./pages/NewTodo";
import NotFound from "./pages/NotFound";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  // TODO 1: addTodo 함수 (POST 요청 → setTodos)
  const addTodo = async (newTodo) => {};

  // TODO 2: toggleTodo 함수 (PATCH 요청 → setTodos)
  const toggleTodo = async (id) => {};

  // TODO 3: deleteTodo 함수 (DELETE 요청 → setTodos)
  const deleteTodo = async (id) => {};

  return (
    <div className="app">
      <header className="header">
        <h1>Todo List</h1>
      </header>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          end
        >
          홈
        </NavLink>
        <NavLink
          to="/todos"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          할 일 목록
        </NavLink>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home todos={todos} />} />
          <Route path="/todos" element={<TodosLayout />}>
            <Route
              index
              element={<TodoList todos={todos} toggleTodo={toggleTodo} />}
            />
            <Route path="new" element={<NewTodo addTodo={addTodo} />} />
            <Route
              path=":id"
              element={<TodoDetail todos={todos} deleteTodo={deleteTodo} />}
            />
          </Route>
          {/* TODO 4: 404 처리 라우트 */}
        </Routes>
      </main>
    </div>
  );
};

export default App;
