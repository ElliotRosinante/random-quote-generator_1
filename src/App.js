import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [advice, setAdvice] = useState("");

  //the first time we get a quote on render
  useEffect(() => {
    getAdvice();
  }, []);
  function getAdvice() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        console.log(advice);
        setAdvice(advice);
        //response.data.slip.advice
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <div className="card">
        <h2 className="heading">{advice}</h2>
        {/*on clicking the button we get a new quote */}
        <button className="button" onClick={getAdvice}>
          <span>GIVE ME ADVICE</span>
        </button>
      </div>
    </div>
  );
}
