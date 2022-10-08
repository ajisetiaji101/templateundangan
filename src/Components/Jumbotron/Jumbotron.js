import React, { useEffect, useState } from "react";
import Bungavine from "../../gambar/rose-vine.png";
import Hitungmundur from "../Hitungmundur/Hitungmundur";

const Jumbotron = () => {
  return (
    <div className="flex items-stretch bg-grey-lighter min-h-screen font-poppins">
      <div className="flex justify-center items-center w-full">
        <div className=" text-center">
          <div>
            <img src={Bungavine} className=" w-32 mx-auto" />
          </div>
          <span className=" tracking-widest">THE WEDDING OF</span>
          <h1 className="py-9 font-bold font-great text-9xl">Aji & Afifah</h1>
          <h1 className="tracking-widest">
            THE GREATEST MOMENT IN HISTORY OF OUR LIFE BEGIN IN:
          </h1>
          {/* <Hitungmundur /> */}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
