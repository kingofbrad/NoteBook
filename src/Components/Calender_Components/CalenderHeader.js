import React from "react";
import logo from "../../Assets/Calender_Assets/logo.png";

const CalenderHeader = () => {
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calender" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calender</h1>
      <button className="border rounded py-2 px-4 mr-5">Today</button>
      <button>
        <span>&#60;</span>
      </button>
      <button>
        <span>&#62;</span>
      </button>
    </header>
  );
};

export default CalenderHeader;
