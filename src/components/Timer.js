import { useEffect } from "react";

function Timer({ dispatch, secondRemaining }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div className="timer"> {secondRemaining} </div>;
}

export default Timer;
