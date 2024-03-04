import React from "react";

interface InputProps {
  inputId: string;
  labelName: string;
  type?: "text" | "password" | "email"; // Specify allowed input types
}

const Input: React.FC<InputProps> = ({ inputId, type = "text", labelName }) => {
  return (
    <div className="inputContainer">
      <label htmlFor={inputId}>{labelName}</label>
      <input id={inputId} className="userInput" type={type}></input>
    </div>
  );
};

export default Input;
