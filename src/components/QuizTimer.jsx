import React, { useEffect, useState } from "react";

const QuizTimer = ({ timeOut, onTimeOut }) => {
  const [remeingTime, setRemeingTime] = useState(timeOut);

  useEffect(() => {
    setTimeout(onTimeOut, timeOut);
  }, [onTimeOut,timeOut]);

  useEffect(() => {
    setInterval(() => {
      setRemeingTime((prev) => {
        return prev - 100;
      });
    }, 100);
  }, []);

  return <progress value={remeingTime} max={timeOut}></progress>;
};

export default QuizTimer;
