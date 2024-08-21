function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  // here firstly the answer props is used for the css bcz there no use-case of it bcz everything that needed to check the RightAnswer is done with the help of the Index so here ans is used for giving the option Style and you can check it on .css file

  return (
    <div>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${
            index === answer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }
              ${
                hasAnswered && index === question.correctOption ? "correct" : ""
              } `} //here it maps in option and if the adding correct style to right option whether u choose the wrong answer
          //other method below ->
          // className={`btn btn-option ${index === answer ? "answer" : ""} ${
          //   hasAnswered
          //     ? index === question.correctOption
          //       ? "correct"
          //       : "wrong"
          //     : ""
          // } `} //here the map method also applied to index so for every option it adding the css style
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          //here the index is '0' '1' '2' '3' that is diff from state.index in App.js
        >
          {" "}
          {option}{" "}
        </button>
      ))}
    </div>
  );
}

export default Options;
