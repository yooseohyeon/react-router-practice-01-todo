import React from "react";
import { Link } from "react-router-dom";

export const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <li className={todo.done ? "todo-item done" : "todo-item"}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={todo.done ? "todo-title done" : "todo-title"}>
        {todo.title}
      </span>
      {/* TODO 8: 상세 페이지로 이동하는 Link를 만드세요 */}
      <Link to={`/todos/${todo.id}`} style={{ textDecoration: "none" }}>
        <span style={{ color: "#2196f3", fontSize: "14px" }}>상세</span>
      </Link>
    </li>
  );
};
