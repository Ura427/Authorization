import React from "react";
import { useInputValidation } from "../hooks/useInputValidation";

interface InputProps {
  inputId: string;
  labelName: string;
  type?: "text" | "password" | "email";
  errorMessage: string;
  setErrorMessages: React.Dispatch<
    React.SetStateAction<{
      Username: string;
      Email: string;
      Password: string;
      RepeatPassword: string;
      BirthDate: string;
      Gender: string;
    }>
  >;
  setInvalidData: React.Dispatch<React.SetStateAction<{
    Username: boolean;
    Email: boolean;
    Password: boolean;
    RepeatPassword: boolean;
    BirthDate: boolean;
}>>
  setUserData: React.Dispatch<
    React.SetStateAction<{
      Username: string;
      Email: string;
      Password: string;
      RepeatPassword: string;
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
  errorMessage,
  setErrorMessages,
  setUserData,
  setInvalidData,
}) => {
  const { validationFunction } = useInputValidation({
    identifier: labelName,
    setInvalidData,
    setErrorMessages,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const propertyName = labelName
      .split(" ")
      .map((word) => word[0].toLocaleUpperCase() + word.slice(1))
      .join("");
    setUserData((prev) => ({
      ...prev,
      [propertyName]: e.target.value,
    }));
    if (validationFunction) {
      validationFunction(e.target!.value);
    }
  };
  return (
    // <div className="inputContainer">
    <div className="w-full ">
      <label htmlFor={inputId} className="text-stone-800">
        {labelName}
      </label>
      <input
        id={inputId}
        // className="userInput"
        className="py-1 px-2 w-full outline-none border-b-2 rounded-sm shadow-sd bg-stone-100 focus:border-stone-400"
        type={type}
        onChange={handleChange}
        autoComplete="on"
      ></input>
      <span className="text-red-500 text-xs m-0 p-0">{errorMessage}</span>
    </div>
  );
};

export default Input;
