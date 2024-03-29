import React, { useState } from "react";
import LoginInput from "./LoginInput.tsx";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import {Authorize} from "../store/Slices/AuthSlice"

function Form() {
  const navigate = useNavigate();
  const [invalidData, setInvalidData] = useState({
    Email: true,
    Password: true,
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
    Email: "",
    Password: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    Email: "",
    Password: "",
  });

  const dispatch = useDispatch();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/login", {
        email: userData.Email,
        password: userData.Password,
      })
      .then((response) => {
        const token = response.data.token;
        const decodedData = jwtDecode(token);
        console.log(decodedData);
        console.log(response);
        dispatch( Authorize(decodedData))
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error while authorizing user: ", error);
        alert("Error while authorizing user: " + error);
      });
  };

  const RedirectToRegistrationHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/registration");
  };

  return (
    <form className="flex flex-col bg-white py-4 px-6 gap-2 items-center rounded-md w-96">
      <h2 className="text-3xl font-bold text-stone-800">Login</h2>

      <LoginInput
        inputId="emailInput"
        labelName="Email"
        type="email"
        errorMessage={errorMessages.Email}
        setUserData={setUserData}
        setErrorMessages={setErrorMessages}
        setInvalidData={setInvalidData}
      />
      <LoginInput
        inputId="passwordInput"
        labelName="Password"
        type="password"
        errorMessage={errorMessages.Password}
        setUserData={setUserData}
        setErrorMessages={setErrorMessages}
        setInvalidData={setInvalidData}
      />

      <button
        disabled={invalidInput}
        className="py-1 px-8 mt-8 w-full bg-cyan-600 text-stone-200  font-bold rounded-md shadow-sm active:hover:text-stone-50 hover:bg-cyan-800 disabled:bg-gray-400"
        onClick={(e) => onSubmit(e)}
      >
        Login
      </button>
      <button
        disabled={false}
        className="py-1 px-8 mt-8 bg-stone-100 text-cyan-500  font-bold rounded-md shadow-sm hover:text-stone-50 hover:bg-cyan-500 disabled:bg-gray-400"
        onClick={(e) => RedirectToRegistrationHandler(e)}
      >
        Create an account
      </button>
    </form>
  );
}

export default Form;
