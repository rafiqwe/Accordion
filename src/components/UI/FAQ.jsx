export const FAQ = ({ item, onToggle, isActive }) => {
  const { question, answer } = item;
  return (
    <>
      <li>
        <div className="accordion-grid">
          <p>{question}</p>
          <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
            {isActive ? "Close" : "Show"}
          </button>
        </div>
        <p>{isActive && answer}</p>
      </li>
    </>
  );
};
