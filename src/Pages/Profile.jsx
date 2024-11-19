import React from "react";
import { ChevronDown } from "lucide-react";

const Profile = () => {
  const fields = [
    { label: "First Name", placeholder: "Enter first name" },
    { label: "Last Name", placeholder: "Enter last name" },
    { label: "Mobile Number", placeholder: "Enter mobile number" },
    { label: "Email", placeholder: "Enter email" },
  ];

  const education = [
    { label: "Current Job", placeholder: "Enter current job" },
    { label: "Company Name", placeholder: "Enter company name" },
    { label: "LinkedIn Profile", placeholder: "Enter LinkedIn profile URL" },
    {
      label: "Skills & Expertise",
      placeholder: "Enter your skills and expertise",
    },
  ];

  const professional = [
    { label: "Current Job", placeholder: "Enter current job" },
    { label: "Company Name", placeholder: "Enter company name" },
    { label: "Job Role", placeholder: "Enter job role" },
    { label: "LinkedIn Profile", placeholder: "Enter LinkedIn profile URL" },
    { label: "Skills", placeholder: "Enter your skills" },
    { label: "Expertise", placeholder: "Enter your expertise" },
  ];

  return (
    <>
      <div className=" my-2   md:w-[90%]  ">
        <h1 className="text-[1.3rem] font-bold text-[#0e2b54] max-md:px-4">
          Edit Your Profile
        </h1>

        {/* Profile Form */}
        <div className="rounded-lg border bg-[#eff2f9] px-4 relative mt-3">
          <div className="flex items-center justify-between absolute top-[-20px]  left-4 right-4 ">
            <div className="h-20 w-20 rounded-full bg-blue-500 flex justify-center items-center" />
            <img
              src="./pro.png"
              alt="ajay"
              height={150}
              width={120}
              className="ml-10  "
            />
          </div>

          <form className="mt-20">
            <div className="grid sm:grid-cols-2 gap-4">
              {fields.map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor="currentJob"
                    className="block text-[#0e2b54] font-semibold text-[1.2rem] px-4"
                  >
                    {field.label}
                  </label>
                  <input
                    id="currentJob"
                    className="mt-1 shadow-lg block w-full p-2 border rounded-full h-[50px] outline-none text-gray-400 text-[1rem] px-4"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>

            <div className="mt-3">
              <label
                htmlFor="address"
                className="block text-[#0e2b54] font-semibold text-[1.2rem] px-4"
              >
                Address
              </label>
              <textarea
                id="address"
                className="mt-1 block shadow-lg w-full h-20 px-4 py-2 border rounded-lg outline-none text-[1rem] text-gray-400"
                placeholder="Enter your address"
              />
            </div>

            <h1 className="text-[1.3rem] font-bold text-[#0e2b54] my-4 px-4">
              Education Details
            </h1>
            <div className="grid sm:grid-cols-2 gap-4">
              {education.map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor="currentJob"
                    className="block text-[#0e2b54] font-semibold text-[1.2rem] px-4"
                  >
                    {field.label}
                  </label>
                  <input
                    id="currentJob"
                    className="mt-1 shadow-lg block w-full p-2 border rounded-full h-[50px] outline-none text-gray-400 text-[1rem] px-4"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>

            <div className="mt-3">
              <label
                htmlFor="address"
                className="block text-[#0e2b54] font-semibold text-[1.2rem] px-4"
              >
                Address
              </label>
              <textarea
                id="address"
                className="mt-1 block shadow-lg w-full h-20 px-4 py-2 border rounded-lg outline-none text-[1rem] text-gray-400"
                placeholder="Enter your address"
              />
            </div>

            <h1 className="text-[1.3rem] font-bold text-[#0e2b54] my-4 px-4">
              Professional Details
            </h1>
            <div className="grid sm:grid-cols-2 gap-4">
              {professional.map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor="currentJob"
                    className="block text-[#0e2b54] font-semibold text-[1.2rem] px-4"
                  >
                    {field.label}
                  </label>
                  <input
                    id="currentJob"
                    className="mt-1 shadow-lg block w-full p-2 border rounded-full h-[50px] outline-none text-gray-400 text-[1rem] px-4"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center mt-10 mb-5">
              <button className="px-8 py-2 h-[50px] bg-[#facd32] font-bold text-[1.3rem] text-white rounded-lg">
                Update
              </button>
              <button className="px-8 py-2 h-[50px] border bg-[#88affe] text-[1.3rem] font-bold rounded-lg text-white">
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Contact Section */}
      </div>
    </>
  );
};

export default Profile;
