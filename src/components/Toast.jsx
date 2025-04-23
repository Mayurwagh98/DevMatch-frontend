const Toast = ({ text }) => {
  return (
    <div className="toast toast-top toast-center">
      <div className="alert alert-success">
        <span>{text}</span>
      </div>
    </div>
  );
};
export default Toast;
