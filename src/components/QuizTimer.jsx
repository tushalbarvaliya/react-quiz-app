import React, { useEffect, useState } from "react";

const QuizTimer = ({ timeOut, onTimeOut }) => {
  const [remeingTime, setRemeingTime] = useState(timeOut);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut, timeOut]);

  useEffect(() => {
    setInterval(() => {
      const interval = setRemeingTime((prev) => {
        return prev - 100;
      });
      return () => {
        clearInterval(interval);
      };
    }, 200);
  }, []);

  return <progress value={remeingTime} max={timeOut}></progress>;
};

export default QuizTimer;
