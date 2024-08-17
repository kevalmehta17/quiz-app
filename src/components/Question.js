import Options from "./Options";

export default function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4> {question.question} </h4>
      <div className="options">
        <Options question={question}></Options>
      </div>
    </div>
  );
}
