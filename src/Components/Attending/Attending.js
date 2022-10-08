import React from "react";

const Attending = () => {
  return (
    <div
      className="flex items-stretch bg-grey-lighter min-h-screen font-poppins"
      id="formulir"
    >
      <div className="flex justify-center items-center w-full">
        <div className="text-center">
          <h1 className=" text-7xl font-great py-6">Are You Attending ?</h1>
          <div className=" p-20 shadow-lg">
            <input
              placeholder="NAME"
              className="border py-2 px-1 w-full rounded-lg my-2"
            />
            <textarea
              placeholder="Message"
              className="border py-2 px-1 w-full my-2 rounded-lg"
            ></textarea>
            <button className="bg-red-500 text-white p-2 rounded-md w-full">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attending;
