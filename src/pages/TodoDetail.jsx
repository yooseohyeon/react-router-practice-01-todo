import { useParams, useNavigate } from "react-router-dom";

const TodoDetail = ({ todos, deleteTodo }) => {
  const { id } = useParams();
  // TODO 9: useNavigate를 사용하세요
  const navigate = useNavigate();

  // TODO 10: todos 배열에서 id에 해당하는 todo를 찾으세요 (주의: id의 타입)
  const todo = todos.find((t) => t.id === +id);

  // TODO 11: 삭제 후 목록 페이지로 이동하는 핸들러를 만드세요
  const handleDelete = async (id) => {
    await deleteTodo(id);
    navigate("/todos");
  };

  if (!todo) {
    return <p className="empty">할 일을 찾을 수 없습니다.</p>;
  }

  return (
    <div>
      <h2>{todo.title}</h2>
      <div className="detail-box">
        <p>
          <strong>상태:</strong> {todo.done ? "완료" : "진행중"}
        </p>
        <p>
          <strong>설명:</strong> {todo.description}
        </p>
      </div>

      <div className="btn-group">
        {/* TODO 12: 각 버튼에 적절한 navigate 동작을 연결하세요 */}
        <button className="btn btn-primary" onClick={() => navigate("/todos")}>
          목록으로
        </button>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          뒤로가기
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(todo.id)}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoDetail;
