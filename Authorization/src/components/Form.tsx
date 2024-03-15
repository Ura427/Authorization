import React, { useState } from "react";
import "./Form.css";
import Input from "./Input";
import BirthdateCombo from "./BirthdateCombo";
import GenderRadios from "./GenderRadios.tsx";

// import { db } from "../Firebase/firebaseConfig.ts";
// import { collection, addDoc } from "firebase/firestore";
// import { useFetchData } from "../hooks/useFetchData.ts";

import axios from "axios";
import RepeatPasswordInput from "./RepeatPasswordInput.tsx";

function Form() {
  // const [invalidInput, setInvalidInput] = useState(true);
  const [invalidData, setInvalidData] = useState({
    Username: true,
    Email: true,
    Password: true,
    RepeatPassword: true,
    BirthDate: true,
  });

  const validateAllInputtedData = () => {
    for (const key in invalidData) {
      if (invalidData[key as keyof typeof invalidData]) {
        return true;
      }
    }
    return false;
  };
  const invalidInput = validateAllInputtedData();

  const [userData, setUserData] = useState({
    Username: "",
    Email: "",
    Password: "",
    RepeatPassword: "",
    BirthDate: { day: "01", month: "January", year: "2024" },
    Gender: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    Username: "",
    Email: "",
    Password: "",
    RepeatPassword: "",
    BirthDate: "",
    Gender: "",
  });

  // const [dataIsValid, setDataIsValid] = useState(false)
  // const dataIsValid = false;

  console.log("Invalids: ", invalidData);
  console.log("Invalid INPUT: ", invalidInput);
  // console.log("Errors: ", errorMessages);
  //   useFetchData();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // try {
    //   const docRef = await addDoc(collection(db, "users"), {
    //     Username: userData.Username,
    //     Email: userData.Email,
    //     Password: userData.Password,
    //     Gender: userData.Gender,
    //     BirthDay: userData.BirthDate.day,
    //     BirthMonth: userData.BirthDate.month,
    //     BirthYear: userData.BirthDate.year,
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding a document: ", e);
    // }

    axios
      .post("http://localhost:8080/auth/registration", {
        username: userData.Username,
        email: userData.Email,
        password: userData.Password,
        birthDate: userData.BirthDate,
        gender: userData.Gender,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error while creating user: ", error);
      });
  };

  return (
    // <form className="registrationForm">
    // <form className="flex flex-col bg-white py-4 px-6 gap-2 items-center rounded-md min-w-96">
    <form className="flex flex-col bg-white py-4 px-6 gap-2 items-center rounded-md w-96">
      <h2 className="text-3xl font-bold text-stone-800">Sign Up</h2>
      <Input
        inputId="usernameInput"
        labelName="Username"
        errorMessage={errorMessages.Username}
        setUserData={setUserData}
        setErrorMessages={setErrorMessages}
        setInvalidData={setInvalidData}
      />
      <Input
        inputId="emailInput"
        labelName="Email"
        type="email"
        errorMessage={errorMessages.Email}
        setUserData={setUserData}
        setErrorMessages={setErrorMessages}
        setInvalidData={setInvalidData}
      />
      <Input
        inputId="passwordInput"
        labelName="Password"
        type="password"
        errorMessage={errorMessages.Password}
        setUserData={setUserData}
        setErrorMessages={setErrorMessages}
        setInvalidData={setInvalidData}
      />
      <RepeatPasswordInput
        inputId="passwordInput2"
        labelName="Repeat password"
        password={userData.Password}
        setUserData={setUserData}
        setInvalidData={setInvalidData}
        setErrorMessages={setErrorMessages}
      />
      {/* <Input
        inputId="passwordInput2"
        labelName="Repeat password"
        type="password"
        setUserData={setUserData}
      /> */}

      <BirthdateCombo
        setUserData={setUserData}
        userData={userData}
        setInvalidData={setInvalidData}
      />

      <GenderRadios setUserData={setUserData} />

      {/* <button className="submitBtn">Submit</button> */}
      <button
        disabled={invalidInput}
        className="py-1 px-8 mt-8 bg-cyan-600 text-stone-200  font-bold rounded-md shadow-sm active:hover:text-stone-50 hover:bg-cyan-800 disabled:bg-gray-400"
        onClick={(e) => onSubmit(e)}
      >
        Sign Up
      </button>
    </form>
  );
}

export default Form;
