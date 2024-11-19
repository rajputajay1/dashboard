import { Locate, Mail, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="my-16  md:w-[90%] w-full max-md:px-4 ">
      <div className="grid md:grid-cols-4 gap-5">
        <div>
          <a className="lg:text-[2rem] text-[1.3rem] text-[#0e2b54] font-bold" href="#">
            MAC
          </a>
          <div>
            <p className=" text-sm text-gray-600 font-medium ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>

            <div className="flex justify-between h-[50px] items-center mt-4 bg-[#f3f8fb] rounded-lg">
              <input
                type="text"
                className="text-[1rem] w-full font-semibold h-[50px] bg-[#f3f8fb] rounded-lg px-2 outline-none"
                placeholder="Submit email"
              />
              <Mail color="gray" size={20} className="pr-2" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold lg:text-[1.3rem] text-[1rem] text-[#0e2b54]">About</h3>
          <nav className=" flex flex-col mt-4 font-medium  text-sm text-gray-600 ">
            <a href="#">About Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Support</a>
          </nav>
        </div>
        <div>
          <h3 className="font-bold lg:text-[1.3rem] text-[1rem] text-[#0e2b54]">Service</h3>
          <nav className="mt-4 flex flex-col font-medium  text-sm text-gray-600 ">
            <a href="#">Problem Pilot</a>
            <a href="#">Entrepreneurial Edge</a>
            <a href="#">Strategy Trial</a>
            <a href="#">Portfolio</a>
          </nav>
        </div>
        <div>
          <h3 className="font-bold lg:text-[1.3rem] text-[1rem] text-[#0e2b54] text-nowrap ">
            Get In Touch
          </h3>
          <div className="  text-sm text-gray-600 font-medium gap-3 flex flex-col mt-4 ">
            <p className="flex items-center gap-2">
              {" "}
              <span>
                <Locate className="h-4 w-4 text-gray-400" />
              </span>
              123 Lorem ipsum
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <span>
                <Mail className="h-4 w-4 text-gray-400" />
              </span>
              email@email.com
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <span>
                <Phone className="h-4 w-4 text-gray-400" />
              </span>
              +1 234 567890
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
