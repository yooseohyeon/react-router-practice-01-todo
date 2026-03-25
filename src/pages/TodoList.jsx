import { useSearchParams } from "react-router-dom";
import { TodoItem } from "../components/TodoItem";

const TodoList = ({ todos, toggleTodo }) => {
  // TODO 5: useSearchParams로 URL 검색 파라미터를 관리하세요
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  // TODO 6: keyword에 따라 todos를 필터링하세요
  const filteredTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(keyword.toLowerCase()) ||
      todo.description.toLowerCase().includes(keyword.toLowerCase()),
  );

  // TODO 7: 검색어 변경 시 URL의 searchParams를 업데이트하세요
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParams({ keyword: value });
  };

  return (
    <div>
      <h2>할 일 목록</h2>

      <input
        type="text"
        id="todo-search"
        name="keyword"
        className="search-input"
        placeholder="할 일 검색..."
        onChange={handleSearch}
      />

      {filteredTodos.length === 0 ? (
        <p className="empty">검색 결과가 없습니다.</p>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
