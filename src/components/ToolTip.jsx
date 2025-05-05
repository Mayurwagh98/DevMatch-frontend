const ToolTip = ({ children, text }) => {
  return (
    <div className="tooltip">
      <div className="tooltip-content">
        <div className="animate-bounce text-orange-400 -rotate-10 text-xl font-black">
          {text}
        </div>
      </div>
      {children}
    </div>
  );
};

export default ToolTip;
