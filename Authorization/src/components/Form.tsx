import React from "react";
import "./Form.css";
import Input from "./Input";

function Form() {
  return (
    <form className="registrationForm">
      {/* <div className="inputContainer">
        <label htmlFor="usernameInput">Username</label>
        <input id="usernameInput" className="userInput" type="text"></input>
      </div> */}
      <Input inputId="usernameInput" labelName="Username" />
      <Input inputId="emailInput" labelName="Email" type="email"/>
      <Input inputId="passwordInput" labelName="Password" type="password"/>
      <Input inputId="passwordInput2" labelName="Repeat password" type="password"/>
      {/* <div className="inputContainer">
        <label htmlFor="emailInput">Email</label>
        <input id="emailInput" className="userInput" type="email"></input>
      </div> */}
      {/* <div className="inputContainer">
        <label htmlFor="passwordInput">Password</label>
        <input id="passwordInput" className="userInput" type="password"></input>
      </div>
      <div className="inputContainer">
        <label htmlFor="passwordInput2">Repeat password</label>
        <input id="passwordInput2" className="userInput" type="password"></input>
      </div> */}

      {/* //Birthday combo boxes
        //gender */}
      <button className="submitBtn">Submit</button>
    </form>
  );
}

export default Form;
