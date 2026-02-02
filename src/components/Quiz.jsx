import React, { useState } from "react";
import QUESTIONS from "../questions";

import quizComplite from "../assets/quiz-complete.png";
import QuizTimer from "./QuizTimer";
const Quiz = () => {
  const [userAnswere, setUserAnswere] = useState([]);
  const activeQuesionIndex = userAnswere.length;

  function handelSelectAnswere(selectedAnswere) {
    setUserAnswere((prev) => {
      return [...prev, selectedAnswere];
    });
  }

  const quizIsComplited = userAnswere.length === QUESTIONS.length;
  if (quizIsComplited) {
    return (
      <div id="summary">
        <img src={quizComplite} alt="" />
        <h2>Quiz Completed !</h2>
      </div>
    );
  }
  const shuffalAnswere = [...QUESTIONS[activeQuesionIndex].answers];
  shuffalAnswere.sort(() => Math.random() - 0.5);

  return (
    <>
      <div id="quiz">
        <div id="quesion">
          <QuizTimer
            timeOut={10000}
            onTimeOut={() => {
              handelSelectAnswere(null);
            }}
          ></QuizTimer>
          <h2>{QUESTIONS[activeQuesionIndex].text}</h2>
          <ul id="answeres">
            {shuffalAnswere.map((val) => {
              return (
                <li
                  key={val}
                  className="answer"
                  style={{ marginTop: "1rem", listStyle: "none" }}
                >
                  <button
                    onClick={() => {
                      handelSelectAnswere(val);
                    }}
                  >
                    {val}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Quiz;
