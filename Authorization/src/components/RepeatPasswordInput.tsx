import React, { useState } from "react";

interface RepeatPasswordInputProps {
  inputId: string;
  labelName: string;
  password: string;
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
  setInvalidData: React.Dispatch<
    React.SetStateAction<{
      Username: boolean;
      Email: boolean;
      Password: boolean;
      RepeatPassword: boolean;
      BirthDate: boolean;
    }>
  >;
}

function RepeatPasswordInput({
  inputId,
  labelName,
  password,
  setUserData,
  //   setErrorMessages,
  setInvalidData,
}: RepeatPasswordInputProps) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const propertyName = labelName
      .split(" ")
      .map((word) => word[0].toLocaleUpperCase() + word.slice(1))
      .join("");
    const currValue = e.target.value;
    setUserData((prev) => ({
      ...prev,
      [propertyName]: currValue,
    }));

    if (currValue !== password) {
      console.log("Passwords don't match");
      setErrorMessage("Passwords don't match");
      setInvalidData((prev) => ({
        ...prev,
        RepeatPassword: true,
      }));
    } else {
      setErrorMessage("");
      setInvalidData((prev) => ({
        ...prev,
        RepeatPassword: false,
      }));
    }
  };

  return (
    <div className="w-full ">
      <label htmlFor={inputId} className="text-stone-800">
        {labelName}
      </label>
      <input
        id={inputId}
        // className="userInput"
        className="py-1 px-2 w-full outline-none border-b-2 rounded-sm shadow-sd bg-stone-100 focus:border-stone-400"
        type="password"
        onChange={handleChange}
        autoComplete="on"
      ></input>
      <span className="text-red-500 text-xs">{errorMessage}</span>
    </div>
  );
}

export default RepeatPasswordInput;
