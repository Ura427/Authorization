import React, { useState } from "react";
import "./Form.css";
import Input from "./Input";
import BirthdateCombo from "./BirthdateCombo";
import GenderRadios from "./GenderRadios.tsx";

import { db } from "../Firebase/firebaseConfig.ts";
import { collection, addDoc } from "firebase/firestore";
// import { useFetchData } from "../hooks/useFetchData.ts";

function Form() {
  const [userData, setUserData] = useState({
    Username: "",
    Email: "",
    Password: "",
    BirthDate: { day: "", month: "", year: "" },
    Gender: "",
  });

  console.log(userData)
  //   useFetchData();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        Username: userData.Username,
        Email: userData.Email,
        Password: userData.Password,
        Gender: userData.Gender,
        BirthDay: userData.BirthDate.day,
        BirthMonth: userData.BirthDate.month,
        BirthYear: userData.BirthDate.year,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding a document: ", e);
    }
  };

  return (
    // <form className="registrationForm">
    <form className="flex flex-col bg-white py-4 px-6 gap-2 items-center rounded-md">
      <Input
        inputId="usernameInput"
        labelName="Username"
        setUserData={setUserData}
      />
      <Input
        inputId="emailInput"
        labelName="Email"
        type="email"
        setUserData={setUserData}
      />
      <Input
        inputId="passwordInput"
        labelName="Password"
        type="password"
        setUserData={setUserData}
      />
      <Input
        inputId="passwordInput2"
        labelName="Repeat password"
        type="password"
        setUserData={setUserData}
      />

      <BirthdateCombo setUserData={setUserData} />

      <GenderRadios setUserData={setUserData} />

      {/* <button className="submitBtn">Submit</button> */}
      <button
        // className="py-1 px-2 bg-stone-500 text-stone-200 rounded-md hover:text-stone-50 hover:bg-stone-600"
        className="py-1 px-8 mt-4 bg-cyan-600 text-stone-200  font-bold rounded-md shadow-sm hover:text-stone-50 hover:bg-cyan-800"
        onClick={(e) => onSubmit(e)}
      >
        Sign Up
      </button>
    </form>
  );
}

export default Form;
