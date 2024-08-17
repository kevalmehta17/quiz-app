function Options({ question }) {
  return (
    <div>
      {question.options.map((option) => (
        <button className="btn btn-option" key={option}>
          {" "}
          {option}{" "}
        </button>
      ))}
    </div>
  );
}

export default Options;
