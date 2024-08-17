import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {};

function reducer(state, action) {}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("Error is:-", err));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}
