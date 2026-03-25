const TodoList = ({ todos, toggleTodo }) => {
  // TODO 5: useSearchParams로 URL 검색 파라미터를 관리하세요
  // TODO 6: keyword에 따라 todos를 필터링하세요
  const filteredTodos = todos;

  // TODO 7: 검색어 변경 시 URL의 searchParams를 업데이트하세요
  const handleSearch = (e) => {
    const value = e.target.value;
  };

  return (
    <div>
      <h2>할 일 목록</h2>

      <input
        type="text"
        className="search-input"
        placeholder="할 일 검색..."
        onChange={handleSearch}
      />

      {filteredTodos.length === 0 ? (
        <p className="empty">검색 결과가 없습니다.</p>
      ) : (
        filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className={todo.done ? "todo-item done" : "todo-item"}
          >
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
            <span style={{ color: "#2196f3", fontSize: "14px" }}>상세</span>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
