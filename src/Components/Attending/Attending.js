import React from "react";
import { useParams } from "react-router-dom";

const Attending = () => {
  const { id } = useParams();
  return (
    <div
      // className="flex items-stretch bg-grey-lighter min-h-screen font-poppins"
      className="py-4"
      id="formulir"
    >
      <div className="flex justify-center items-center w-full font-josep">
        <div className="text-center">
          <h1 className=" md:text-7xl sm:text-xl font-great py-6 px-4">
            Bantu kami mempersiapkan jamuan yang hangat untuk anda semua dengan
            mengirimkan konfirmasi kehadiran melalui form berikut :
          </h1>
          <div className=" p-20 shadow-lg mx-8">
            <input
              placeholder="Nama"
              className="border py-2 pl-3 w-full rounded-lg my-2 placeholder:text-xs"
            />
            <textarea
              placeholder="Pesan"
              className="border py-2 pl-3 w-full my-2 placeholder:text-xs rounded-lg"
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
