import React, { useState, useEffect } from "react";

const Notes = ({ selectedDate }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!selectedDate) return;
    const saved = localStorage.getItem(selectedDate);
    setText(saved || "");
  }, [selectedDate]);

  const handleChange = (e) => {
    setText(e.target.value);
    localStorage.setItem(selectedDate, e.target.value);
  };

  return (
    <div className="notes">
      <h3>Notes</h3>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Add a note for this day..."
      />
    </div>
  );
};

export default Notes;