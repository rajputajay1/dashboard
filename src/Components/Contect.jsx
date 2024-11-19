import React from "react";
import { Locate, Mail, Phone } from "lucide-react";

const Contect = () => {
  return (
    <>
      <div className=" mt-10 md:w-[90%] w-full  max-md:px-4">
        <div className="text-center">
          <p className="text-[1.3rem] font-bold text-[#be4ae3]">Contact Us</p>
          <h2 className="md:text-3xl font-bold text-[1.3rem] text-[#0e2b54] py-3">
            Stay connected with us for
            <br />
            any reason
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 mt-6">
          <form className="space-y-4 ">
            <input
              className="block w-full px-4  rounded-lg  h-[50px] text-gray-400 text-[1rem] bg-white custom-shadow outline-none"
              placeholder="Your name"
              type="text"
            />
            <input
              className="block w-full px-4  rounded-lg  h-[50px] text-gray-400 text-[1rem] bg-white custom-shadow outline-none"
              placeholder="Your EMail"
              type="email"
            />
            <input
              className="block w-full px-4  rounded-lg  h-[50px] text-gray-400 text-[1rem] bg-white custom-shadow outline-none"
              placeholder="Subject"
            />
            <textarea
              className="block w-full px-4  rounded-lg  h-[100px] text-gray-400 text-[1rem] bg-white custom-shadow outline-none"
              placeholder="Start writing message here "
            />
            <button className=" px-6 h-[50px] font-bold text-[1.3rem] bg-purple-500 text-white rounded-lg hover:bg-purple-600">
              Get Started
            </button>
          </form>

          <div className="space-y-4">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[#fd6685] p-2">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm text-gray-500">+91 234 567 890</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[#53d6a0] p-2">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-500">hello@example.com</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[#fd9a3f] p-2">
                  <Locate className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-sm text-gray-500">
                    Lorem ipsum street, Mumbai India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contect;
