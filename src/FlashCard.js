import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCard() {
  // since this selectedId state is common for all the child component
  // to update the state by the child comp we have passed the state setter fxn as a prop i.e to enable child --> parent comm.
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="flashcard">
      {questions.map((question) => (
        <Question
          question={question}
          key={question.id}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
}

function Question({ question, selectedId, setSelectedId }) {
  console.log(question.id);

  function handleClick(id) {
    console.log(id);
    setSelectedId(question.id !== selectedId ? id : null);
  }
  return (
    <div
      className={selectedId === question.id ? "selected question" : "question"}
      onClick={() => handleClick(question.id)}
    >
      {selectedId === question.id ? question.answer : question.question}
    </div>
  );
}

export default FlashCard;
