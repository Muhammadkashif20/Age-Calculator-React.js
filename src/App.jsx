import React, { useState } from "react";

const AgeCalculatorUI = () => {
  // functionality 
  const [dob, setDob] = useState("")
  const [currentDate, setCurrentDate] = useState("")
  const [age, setAge] = useState("")
  const [month, setMonth] = useState("")
  const [day, setDay] = useState("")

  const calculateAge = () => {

    let currentDate = new Date();
    let birthDate = new Date(dob);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    let day = currentDate.getDate() - birthDate.getDate();

    if (month < 0) {
      age--;
      month += 12;
    }
    if (day < 0) {
      month--;
      day += 30;
    }
    setAge(age)
    setMonth(month)
    setDay(day)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] relative overflow-hidden px-4">

      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-600/30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-indigo-600/30 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Glass Card */}
      <div className="relative w-full max-w-md p-7 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_0_60px_rgba(99,102,241,0.2)]">

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-white text-center">
          Age Calculator
        </h1>
        <p className="text-gray-400 text-center text-sm mt-1 mb-6">
          Calculate your exact age beautifully
        </p>

        {/* Inputs */}
        <div className="space-y-5">

          <div>
            <label className="text-gray-400 text-sm">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-indigo-500 focus:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">Current Date</label>
            <input
              type="date"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
              className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition"
            />
          </div>

        </div>

        {/* Button */}
        <button
          onClick={calculateAge}
          className="cursor-pointer relative overflow-hidden w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium tracking-wide shadow-lg group"
        >
          <span className="relative z-10">Calculate Age</span>

          {/* Shine Effect */}
          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition"></span>
          <span className="absolute -left-full top-0 w-full h-full bg-white/10 skew-x-12 group-hover:left-full transition-all duration-700"></span>
        </button>

        {/* Result */}
        <div className="mt-7">

          <p className="text-gray-400 text-sm text-center mb-3">Your Age</p>

          <div className="grid grid-cols-3 gap-4">

            {/* Years */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-lg hover:scale-105 transition">
              <h2 className="text-2xl text-white font-semibold">
                {age || "00"}
              </h2>
              <p className="text-xs text-gray-400 mt-1">Years</p>
            </div>

            {/* Months */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-lg hover:scale-105 transition">
              <h2 className="text-2xl text-white font-semibold">
                {month || "00"}
              </h2>
              <p className="text-xs text-gray-400 mt-1">Months</p>
            </div>

            {/* Days */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-lg hover:scale-105 transition">
              <h2 className="text-2xl text-white font-semibold">
                {day || "00"}
              </h2>
              <p className="text-xs text-gray-400 mt-1">Days</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AgeCalculatorUI;