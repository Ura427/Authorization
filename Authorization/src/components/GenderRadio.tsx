import React from 'react'

interface GenderRadioProps {
    id: string,
    value: string,
    handleGenderChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function GenderRadio({id, value, handleGenderChange}: GenderRadioProps) {
  return (
    // <div className="w-1/3 py-1 px-2 flex flex-nowrap justify-between rounded-md bg-stone-100 ">
    //     <label htmlFor={id} className="mr-4">
    //       {value}
    //     </label>
    //     <input
    //       id={id}
    //       type="radio"
    //       name="gender"
    //       value={value}
    //       onChange={handleGenderChange}
    //     />
    //   </div>
    <div className="w-full py-1 px-2 flex flex-nowrap justify-between rounded-md bg-stone-100 ">
        <label htmlFor={id} className="mr-4">
          {value}
        </label>
        <input
          id={id}
          type="radio"
          name="gender"
          value={value}
          onChange={handleGenderChange}
        />
      </div>
  )
}

export default GenderRadio