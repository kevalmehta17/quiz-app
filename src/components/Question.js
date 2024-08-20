import Options from "./Options";

export default function Question({ question, dispatch, answer }) {
  console.log(question);
  return (
    <div>
      <h4> {question.question} </h4>
      <div className="options">
        <Options
          question={question}
          dispatch={dispatch}
          answer={answer}
        ></Options>
      </div>
    </div>
  );
}
