function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div>
      <p>
        You scored <strong>{points} </strong>out of {maxPossiblePoints} (
        {Math.ceil(percentage)})
      </p>
    </div>
  );
}

export default FinishScreen;
