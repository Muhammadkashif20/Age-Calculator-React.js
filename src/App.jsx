import React, { useState } from "react";

const AgeCalculatorUI = () => {
  // functionality 
  const [dob, setDob] = useState("")
  const [currentDate, setCurrentDate] = useState("")
  const [age, setAge] = useState("")
  const [month, setMonth] = useState("")
  const [day, setDay] = useState("")
  const calculateAge = () => {
    console.log("dob", dob)
    console.log("currentDate", currentDate)

    let date = new Date(currentDate) - new Date(dob);
    let convertToAge = Math.floor(date / (1000 * 60 * 60 * 24 * 365))
    let convertToMonth = Math.floor(date / (1000 * 60 * 60 * 24 * 30))
    let convertToDay = Math.floor(date / (1000 * 60 * 60 * 24))

      setAge(convertToAge)
      setMonth(convertToMonth)
      setDay(convertToDay)
      
        console.log("age", convertToAge)
        console.log("month", convertToMonth)  
        console.log("day", convertToDay)

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#020617] to-black px-4">

      {/* Glass Card */}
      <div className="w-full max-w-md p-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-white text-center mb-2">
          Age Calculator
        </h1>
        <p className="text-gray-400 text-center text-sm mb-6">
          Find your exact age instantly
        </p>

        {/* Inputs */}
        <div className="space-y-5">

          <div>
            <label className="text-gray-400 text-sm">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}

              className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">Current Date</label>
            <input
              type="date"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
              className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

        </div>

        {/* Button */}
        <button onClick={calculateAge} className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium tracking-wide shadow-lg hover:scale-[1.03] active:scale-95 transition">
          Calculate
        </button>

        {/* Result */}
        <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-white/10 text-center">

          <p className="text-gray-400 text-sm mb-2">Your Age</p>

          <div className="flex justify-center gap-4 text-white font-semibold text-lg">

            <div>
              <h2 className="text-2xl">{age}</h2>
              <p className="text-xs text-gray-400">Years</p>
            </div>

            <div>
              <h2 className="text-2xl">{month}</h2>
              <p className="text-xs text-gray-400">Months</p>
            </div>

            <div>
              <h2 className="text-2xl">{day}</h2>
              <p className="text-xs text-gray-400">Days</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AgeCalculatorUI;