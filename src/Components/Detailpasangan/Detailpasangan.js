import React, { useEffect, useState } from "react";
import aji from "../../gambar/aji.png";
import afif from "../../gambar/afif.png";
import topbg from "../../gambar/top-bg.jpg";
import bottombg from "../../gambar/bottom-bg.jpg";

const Detailpasangan = () => {
  return (
    <div id="pasangan" className="sm:my-2 md:m-0">
      <div
        className="flex items-stretch bg-grey-lighter min-h-screen font-poppins"
        style={{
          backgroundImage: `url(${topbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPositionY: "-10rem",
        }}
      >
        <div className="flex justify-center items-center w-full">
          <div className=" text-center">
            <span className=" tracking-widest md:text-7xl font-great sm:text-2xl">
              Bride & Groom
            </span>
            <div className=" md:flex sm:flex-none py-8">
              <div className=" shadow-lg py-8  rounded-lg md:mx-6 sm:mx-1 text-center">
                <img
                  src={aji}
                  className=" md:w-48 sm:w-20 rounded-full mx-auto"
                />
                <h1 className=" md:text-3xl sm:text-sm font-poppins pt-3">
                  Aji Setiaji
                </h1>
                <div className="box-border text-center md:px-40 sm:px-8">
                  <p className=" text-gray-500 text-xs py-2">
                    Oldest son of Mr. Budi Darma Putra and Mrs. Marniati
                  </p>
                  <p className="text-xs">
                    He is a Telecommunication engineering diploma who loves
                    technology and work.He now works as a programmer with a
                    backend engineer focus
                  </p>
                </div>
              </div>
              <div className=" shadow-lg py-8  rounded-sm md:mx-6 sm:mx-1 text-center">
                <img
                  src={afif}
                  className="md:w-48 sm:w-20 rounded-full mx-auto"
                />
                <h1 className=" md:text-3xl sm:text-sm font-poppins pt-3">
                  Nur Afifah Sholihah
                </h1>
                <div className="box-border text-center md:px-40 sm:px-8">
                  <p className=" text-gray-500 text-xs py-2">
                    Oldest son of Mr. Das'an and Mrs. Rusmini
                  </p>
                  <p className="text-xs">
                    She is a diploma in nutrition who loves health sciences and
                    work. She now works as a nutritionist to provide health
                    services to the community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-grey-lighter font-poppins absolute"
        style={{
          backgroundImage: `url(${bottombg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "32rem",
        }}
      ></div>
    </div>
  );
};

export default Detailpasangan;
