import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  // TODO 15: useLocation으로 현재 경로를, useNavigate로 이동 함수를 가져오세요
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>페이지를 찾을 수 없습니다</h2>
      {/* TODO 16: 사용자가 접속을 시도한 경로를 보여주세요 */}
      <p>
        요청 경로: <strong>{location.pathname}</strong>
      </p>
      <p>존재하지 않는 페이지입니다.</p>
      {/* TODO 17: 홈으로 돌아가는 버튼을 만드세요 */}
      <button className="btn btn-primary" style={{ marginTop: "16px" }}>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default NotFound;
