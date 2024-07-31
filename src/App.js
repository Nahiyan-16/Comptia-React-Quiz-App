import React, { useState } from "react";
import SubjectCard from "./Components/SubjectCard";
import Quiz from "./Components/Quiz";
import subjects from "./data";
import "./style.css";

const App = () => {
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(null);

  const handleSelectSubject = (index) => {
    setSelectedSubjectIndex(index);
  };

  const handleReset = () => {
    setSelectedSubjectIndex(null);
  };

  return (
    <div className="container">
      {selectedSubjectIndex === null ? (
        <div className="grid">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              subject={subject}
              index={index}
              onSelect={handleSelectSubject}
            />
          ))}
        </div>
      ) : (
        <Quiz subjectIndex={selectedSubjectIndex} onReset={handleReset} />
      )}
    </div>
  );
};

export default App;
