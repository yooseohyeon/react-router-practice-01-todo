import { useState } from "react";

const NewTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // TODO 13: useNavigate를 사용하세요

  // TODO 14: addTodo 호출 후 목록 페이지로 이동하세요
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>새 할 일 추가</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="할 일 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="설명 (선택사항)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          추가하기
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
