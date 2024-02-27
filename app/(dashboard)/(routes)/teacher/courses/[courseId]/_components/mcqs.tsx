"use client";
import { useState } from "react";

export default function MCQs() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState(0);

  // @ts-expect-error
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleCreateMCQ = () => {
    // Perform validation and create MCQ logic here
    const newMCQ = {
      question,
      options,
      correctOption,
    };
    console.log(newMCQ);
    // You can send the new MCQ to your backend for storage or further processing
  };

  return (
    <div>
      <h1>Create your MCQS</h1>

      <div className="flex max-w-3xl flex-wrap">
        {options.map((option, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <div key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="flex">
        <h2>Correct Option: </h2>
        <div>
          <select name="correct" id="correct">
            <option value="0">Option 1</option>
            <option value="1">Option 2</option>
            <option value="2">Option 3</option>
            <option value="3">Option 4</option>
          </select>
        </div>
      </div>
    </div>
  );
}
