import React from "react";
import GenderRadio from "./GenderRadio";

interface GenderRadiosProps {
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

function GenderRadios({ setUserData }: GenderRadiosProps) {
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      Gender: event.target.value,
    }));
  };

  return (
    <div className="w-full flex gap-2">
      <GenderRadio id={"radioMan"} value={"Man"} handleGenderChange={handleGenderChange}/>
      <GenderRadio id={"radioWoman"} value={"Woman"} handleGenderChange={handleGenderChange}/>
      <GenderRadio id={"radioAnother"} value={"Another"} handleGenderChange={handleGenderChange}/>
    </div>
  );
}

export default GenderRadios;
