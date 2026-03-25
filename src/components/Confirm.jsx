export const Confirm = ({ confirm, onConfirm, onCancel }) => {
  if (!confirm.visible) return null;

  return (
    <div className="confirm-backdrop">
      <div className="confirm">
        <p>{confirm.message}</p>
        <div className="btn-group">
          <button onClick={onConfirm}>확인</button>
          <button onClick={onCancel}>취소</button>
        </div>
      </div>
    </div>
  );
};
