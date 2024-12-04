import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Question from "./Question";
import "./Quiz.css";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    if (questions && questions[currQues]) {
      setOptions(
        handleShuffle([
          questions[currQues].correct_answer,
          ...questions[currQues].incorrect_answers,
        ])
      );
    }
  }, [currQues, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="quiz">
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      </div>
    );
  }

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      <div className="quizInfo">
        <span>{questions[currQues]?.category || "Category not available"}</span>
        <span>Score: {score}</span>
      </div>

      <Question
        currQues={currQues}
        setCurrQues={setCurrQues}
        questions={questions}
        options={options}
        correct={questions[currQues]?.correct_answer}
        score={score}
        setScore={setScore}
        setQuestions={setQuestions}
      />
    </div>
  );
};

export default Quiz;
