import React from 'react';

interface BirthdateComboProps {
    setUserData:  React.Dispatch<React.SetStateAction<{
        Username: string;
        Email: string;
        Password: string;
        BirthDate: {
            day: string;
            month: string;
            year: string;
        };
        Gender: string;
    }>>;
}

function BirthdateCombo({ setUserData }: BirthdateComboProps) {
    const days = Array.from({ length: 31 }, (_, index) => index + 1);
    const years = Array.from(
        { length: 120 },
        (_, index) => Number(new Date().getFullYear()) - index
    );

    const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>, key: string) => {
        const value = event.target.value;
        setUserData(prevUserData => ({
            ...prevUserData,
            BirthDate: {
                ...prevUserData.BirthDate,
                [key]: value
            }
        }));
    };

    return (
        <div className="w-full flex mt-4 gap-3">
            <select name="day" className="w-1/3 py-1 px-2 rounded-md bg-stone-100" onChange={(e) => handleDateChange(e, 'day')}>
                {days.map((day) => (
                    <option key={day} value={day}>
                        {day}
                    </option>
                ))}
            </select>

            <select name="month" className="w-1/3 py-1 px-2 rounded-md bg-stone-100" onChange={(e) => handleDateChange(e, 'month')}>
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

            <select name="years" className="w-1/3 py-1 px-2 rounded-md bg-stone-100" onChange={(e) => handleDateChange(e, 'year')}>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default BirthdateCombo;
