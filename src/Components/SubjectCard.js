import React from "react";

const SubjectCard = ({ subject, index, onSelect }) => {
  return (
    <div className="card" onClick={() => onSelect(index)}>
      {subject.subject}
    </div>
  );
};

export default SubjectCard;
