// ============================================
// 이 파일은 이미 완성되어 있습니다.
// App에서 todos를 props로 받아 통계를 보여주는 예시입니다.
//
// 핵심: App의 useState로 선언한 todos가
// Home, TodoList, TodoDetail 등 여러 페이지에서 공유됩니다.
// ============================================

const Home = ({ todos }) => {
  const totalCount = todos.length;
  const activeCount = todos.filter((t) => !t.done).length;
  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div>
      <h2>대시보드</h2>
      <div className="dashboard">
        <div className="stat-card total">
          <p className="stat-number">{totalCount}</p>
          <p className="stat-label">전체</p>
        </div>
        <div className="stat-card active">
          <p className="stat-number">{activeCount}</p>
          <p className="stat-label">진행중</p>
        </div>
        <div className="stat-card done">
          <p className="stat-number">{doneCount}</p>
          <p className="stat-label">완료</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
