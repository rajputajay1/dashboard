import React from "react";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="relative  md:w-[90%] mt- max-md:px-4">
      <input
        type="text"
        placeholder="Search Games..."
        className="relative text-gray-400 font-semibold text-[1rem] w-full rounded-full h-[45px] outline-none md:text-center max-md:px-4 custom-shadow"
      />
      <div className="w-8 h-8 rounded-full bg-[#ff9f24] absolute top-1/2 md:right-3 right-6 transform -translate-y-1/2 flex justify-center items-center">
        <Search size={17} strokeWidth={2} color="white" />
      </div>
    </div>
  );
};

export default Header;
