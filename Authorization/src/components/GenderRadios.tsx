import React from "react";
import GenderRadio from "./GenderRadio";

interface GenderRadiosProps {
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

function GenderRadios({ setUserData }: GenderRadiosProps) {
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      Gender: event.target.value,
    }));
  };

  return (
    <div className="w-full ">
      <span className="mt-4">Gender</span>
       {/* // <div className="w-full flex gap-2">
    //   <GenderRadio id={"radioMan"} value={"Man"} handleGenderChange={handleGenderChange}/>
    //   <GenderRadio id={"radioWoman"} value={"Woman"} handleGenderChange={handleGenderChange}/>
    //   <GenderRadio id={"radioAnother"} value={"Another"} handleGenderChange={handleGenderChange}/>
    // </div> */}
    <div className="grid grid-cols-3 gap-4">
      <GenderRadio id={"radioMan"} value={"Man"} handleGenderChange={handleGenderChange}/>
      <GenderRadio id={"radioWoman"} value={"Woman"} handleGenderChange={handleGenderChange}/>
      <GenderRadio id={"radioAnother"} value={"Another"} handleGenderChange={handleGenderChange}/>
    </div>
    </div>
   
  );
}

export default GenderRadios;
