import React, { useState } from "react";

interface BirthdateComboProps {
  userData: {
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
  };
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
  setInvalidData: React.Dispatch<React.SetStateAction<{
    Username: boolean;
    Email: boolean;
    Password: boolean;
    RepeatPassword: boolean;
    BirthDate: boolean;
}>>
}

function BirthdateCombo({ setUserData, userData, setInvalidData }: BirthdateComboProps) {
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const years = Array.from(
    { length: 120 },
    (_, index) => Number(new Date().getFullYear()) - index
  );

  const [errorMessage, setErrorMessage] = useState("");

  // const validateDate = ({
  //   day,
  //   month,
  //   year,
  // }: {
  //   day: string;
  //   month: string;
  //   year: string;
  // }) => {
  //   const stringDate = `${day}/${month}/${year}`;
  //   console.log(stringDate);
  //   console.log(new Date(stringDate));
    
  //   return !isNaN(new Date(stringDate).getTime());
  // };


  const validateDate = ({
    day,
    month,
    year,
  }: {
    day: string;
    month: string;
    year: string;
  }) => {
    // Construct the date string
    const dateString = `${year}-${month}-${day}`;
  
    // Attempt to create a Date object from the string
    const parsedDate = new Date(dateString);
  
    // Check if the parsedDate is a valid date
    // Also check if the parsed month is equal to the input month to handle cases like 31st February
    return (
      !isNaN(parsedDate.getTime()) &&
      parsedDate.getDate() === Number(day) &&
      parsedDate.getMonth() + 1 === monthToInt(month) &&
      parsedDate.getFullYear() === Number(year)
    );
  };
  
  // Helper function to convert month name to its numerical value
  const monthToInt = (month: string) => {
    switch (month.toLowerCase()) {
      case "january":
        return 1;
      case "february":
        return 2;
      case "march":
        return 3;
      case "april":
        return 4;
      case "may":
        return 5;
      case "june":
        return 6;
      case "july":
        return 7;
      case "august":
        return 8;
      case "september":
        return 9;
      case "october":
        return 10;
      case "november":
        return 11;
      case "december":
        return 12;
      default:
        return NaN;
    }
  };
  

  const handleDateChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    key: string
  ) => {
    const value = event.target.value;
    setUserData((prevUserData) => ({
      ...prevUserData,
      BirthDate: {
        ...prevUserData.BirthDate,
        [key]: value,
      },
    }));
    const isValidDate = validateDate({...userData.BirthDate, [key]: value});
    console.log(isValidDate);
    if (!isValidDate) {
      setErrorMessage("Inputted date isn't valid");
      setInvalidData((prev) => ({
        ...prev,
        BirthDate: true
      }))
      return;
    }
    setErrorMessage("");
    setInvalidData((prev) => ({
      ...prev,
      BirthDate: false
    }))
  };

  return (
    <div className="mt-4">
      <span>Date of birth</span>
      {/* // <div className="w-full flex mt-4 gap-3"> */}
      <div className="w-full grid grid-cols-3 gap-4">
        {/* <select name="day" className="w-1/3 py-1 px-2 rounded-md bg-stone-100" onChange={(e) => handleDateChange(e, 'day')}> */}
        <select
          name="day"
          className="w-full py-1 px-2 rounded-md bg-stone-100"
          onChange={(e) => handleDateChange(e, "day")}
        >
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        {/* <select name="month" className="w-1/3 py-1 px-2 rounded-md bg-stone-100" onChange={(e) => handleDateChange(e, 'month')}> */}
        <select
          name="month"
          className="w-full py-1 px-2 rounded-md bg-stone-100"
          onChange={(e) => handleDateChange(e, "month")}
        >
          <option value={"January"}>January</option>
          <option value={"February"}>February</option>
          <option value={"March"}>March</option>
          <option value={"April"}>April</option>
          <option value={"May"}>May</option>
          <option value={"June"}>June</option>
          <option value={"July"}>July</option>
          <option value={"August"}>August</option>
          <option value={"September"}>September</option>
          <option value={"October"}>October</option>
          <option value={"November"}>November</option>
          <option value={"December"}>December</option>
        </select>

        {/* <select name="years" className="w-1/3 py-1 px-2 rounded-md bg-stone-100" onChange={(e) => handleDateChange(e, 'year')}> */}
        <select
          name="years"
          className="w-full py-1 px-2 rounded-md bg-stone-100"
          onChange={(e) => handleDateChange(e, "year")}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <span className="text-red-500 text-xs">{errorMessage}</span>
    </div>
  );
}

export default BirthdateCombo;
