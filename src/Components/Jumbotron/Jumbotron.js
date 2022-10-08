import React, { useEffect, useState } from "react";
import Bungavine from "../../gambar/rose-vine.png";
import Hitungmundur from "../Hitungmundur/Hitungmundur";

const Jumbotron = () => {
  return (
    <div className="flex items-stretch bg-grey-lighter min-h-screen font-poppins">
      <div className="flex justify-center items-center w-full">
        <div className=" text-center">
          <div>
            <img src={Bungavine} className="md:w-32 sm:w-20 mx-auto" />
          </div>
          <span className=" tracking-widest sm:text-xs md:text-base">
            THE WEDDING OF
          </span>
          <h1 className="py-9 font-bold font-great md:text-9xl sm:text-6xl">
            Aji & Afifah
          </h1>
          <h1 className="tracking-widest md:text-base sm:text-xs">
            THE GREATEST MOMENT IN HISTORY OF OUR LIFE BEGIN IN:
          </h1>
          {/* <Hitungmundur /> */}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
