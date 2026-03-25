# 과제: Todo List with React Router

## 실행 방법

터미널 2개를 열어주세요:

```bash
# 터미널 1: React 개발 서버
npm run dev

# 터미널 2: json-server (API 서버, http://localhost:4000)
npm run server
```

---

## 라우팅 구조

```
/              → Home (대시보드)          ✅ 완성됨
/todos         → TodosLayout > TodoList  ← 과제
/todos/new     → TodosLayout > NewTodo   ← 과제
/todos/:id     → TodosLayout > TodoDetail← 과제
존재하지않는경로 → NotFound (404)          ← 과제
```

---

## 이미 완성된 것

- `App.jsx` — 라우팅 구조, `useState`로 todos 선언, `useEffect`로 초기 fetch
- `Home.jsx` — todos를 props로 받아 통계 표시 (참고용)
- `TodosLayout.jsx` — 중첩 라우팅의 `Outlet` 사용 예시 (참고용)
- `db.json` — json-server 초기 데이터
- 스타일 전부

---

## json-server API

| 메서드 | URL | body 예시 |
|--------|-----|-----------|
| GET | `/todos` | — |
| GET | `/todos/3` | — |
| POST | `/todos` | `{ "title": "...", "done": false }` |
| PATCH | `/todos/3` | `{ "done": true }` |
| DELETE | `/todos/3` | — |

> 모든 요청의 base URL은 `http://localhost:4000` 입니다.
> POST, PATCH 요청에는 `Content-Type: application/json` 헤더가 필요합니다.

---

## 해야 할 일

### `App.jsx` — TODO 1~4

| TODO | 할 일 |
|------|-------|
| 1 | `addTodo` — POST로 새 할 일을 저장하고, 응답 데이터를 state에 추가 |
| 2 | `toggleTodo` — 해당 todo의 done 값을 반전시켜 PATCH하고, state도 업데이트 |
| 3 | `deleteTodo` — DELETE로 삭제하고, state에서도 제거 |
| 4 | 존재하지 않는 경로를 처리하는 Route 추가 |

### `TodoList.jsx` — TODO 5~8

| TODO | 할 일 | 사용할 것 |
|------|-------|-----------|
| 5 | URL의 `?keyword=` 값으로 검색 기능 구현 | `useSearchParams` |
| 6 | keyword에 따라 todos 필터링 | `filter`, `includes` |
| 7 | 검색어 입력 시 URL 파라미터 업데이트 | `setSearchParams` |
| 8 | "상세" 텍스트를 클릭하면 `/todos/:id`로 이동 | `Link` |

### `TodoDetail.jsx` — TODO 9~12

| TODO | 할 일 | 사용할 것 |
|------|-------|-----------|
| 9 | 페이지 이동 기능 추가 | `useNavigate` |
| 10 | todos 배열에서 URL의 id에 해당하는 todo 찾기 | `useParams`, `find` |
| 11 | 삭제 버튼: 삭제 후 목록으로 이동 | `deleteTodo`, `navigate` |
| 12 | "목록으로"는 `/todos`로, "뒤로가기"는 이전 페이지로 | `navigate` |

> 주의: `useParams()`로 가져온 값은 항상 **문자열**입니다.

### `NewTodo.jsx` — TODO 13~14

| TODO | 할 일 | 사용할 것 |
|------|-------|-----------|
| 13 | 페이지 이동 기능 추가 | `useNavigate` |
| 14 | 폼 제출 시 addTodo 호출 후 목록으로 이동 | `addTodo`, `navigate` |

### `NotFound.jsx` — TODO 15~17

| TODO | 할 일 | 사용할 것 |
|------|-------|-----------|
| 15 | 현재 경로 정보 + 이동 기능 가져오기 | `useLocation`, `useNavigate` |
| 16 | 사용자가 접속 시도한 잘못된 경로를 화면에 표시 | `location.pathname` |
| 17 | 버튼 클릭 시 홈으로 이동 | `navigate` |

---

## 체크리스트

- [ ] 할 일 추가 → json-server에 저장되고 화면에 나타남
- [ ] 체크박스 클릭 → 완료 상태 토글
- [ ] 삭제 → json-server에서 삭제되고 화면에서 사라짐
- [ ] 검색 → URL이 `?keyword=...`로 바뀌고 필터링됨
- [ ] "상세" 클릭 → `/todos/:id`로 이동, 해당 할 일 정보 표시
- [ ] "목록으로" / "뒤로가기" 버튼 동작
- [ ] 존재하지 않는 URL → 404 페이지 + 잘못된 경로 표시
- [ ] "홈으로 돌아가기" 버튼 동작
