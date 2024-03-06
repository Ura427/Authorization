import React from "react";
import { useInputValidation } from "../hooks/useInputValidation";

interface InputProps {
  inputId: string;
  labelName: string;
  type?: "text" | "password" | "email"; // Specify allowed input types
  setUserData: React.Dispatch<
    React.SetStateAction<{
      Username: string;
      Email: string;
      Password: string;
      BirthDate: {
        day: string;
        month: string;
        year: string;
      };
      Gender: string;
    }>
  >;
}

const Input: React.FC<InputProps> = ({
  inputId,
  type = "text",
  labelName,
setUserData,
}) => {
  const { validationFunction } = useInputValidation(labelName);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [labelName]: e.target.value,
    }));
    if (validationFunction) {
      validationFunction(e.target!.value);
    }
  };
  return (
    // <div className="inputContainer">
    <div className="w-full">
      <label htmlFor={inputId}
      className="text-stone-800"
      >{labelName}</label>
      <input
        id={inputId}
        // className="userInput"
        className="py-1 px-2 w-full outline-none border-b-2 rounded-sm shadow-sd bg-stone-100 focus:border-stone-400"
        type={type}
        onChange={handleChange}
        autoComplete="on"
      ></input>
    </div>
  );
};

export default Input;
