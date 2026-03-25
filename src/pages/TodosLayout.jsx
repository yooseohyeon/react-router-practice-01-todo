// ============================================
// 이 파일은 이미 완성되어 있습니다.
// 중첩 라우팅(Nested Routes)에서 부모 레이아웃 역할을 합니다.
//
// App.jsx의 라우트 구조:
//   <Route path="/todos" element={<TodosLayout />}>
//     <Route index element={<TodoList />} />
//     <Route path="new" element={<NewTodo />} />
//     <Route path=":id" element={<TodoDetail />} />
//   </Route>
//
// <Outlet /> 위치에 하위 라우트의 컴포넌트가 렌더링됩니다.
// ============================================

import { Link, Outlet } from "react-router-dom";

const TodosLayout = () => {
  return (
    <div>
      <div className="sub-nav">
        <Link to="/todos" className="nav-link">
          전체 목록
        </Link>
        <Link to="/todos/new" className="nav-link">
          새 할 일 추가
        </Link>
      </div>

      {/* 하위 라우트 컴포넌트가 여기에 렌더링됩니다 */}
      <Outlet />
    </div>
  );
};

export default TodosLayout;
