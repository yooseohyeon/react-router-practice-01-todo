export const Toast = ({ toast }) => {
  if (!toast.visible) return null;

  return (
    <div className={`toast ${toast.type}`}>
      <p>{toast.message}</p>
    </div>
  );
};
