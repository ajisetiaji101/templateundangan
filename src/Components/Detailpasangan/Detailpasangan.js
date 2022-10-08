import React, { useEffect, useState } from "react";
import aji from "../../gambar/aji.png";
import afif from "../../gambar/afif.png";
import topbg from "../../gambar/top-bg.jpg";
import bottombg from "../../gambar/bottom-bg.jpg";

const Detailpasangan = () => {
  return (
    <div id="pasangan">
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
            <span className=" tracking-widest text-7xl font-great">
              Bride & Groom
            </span>
            <div className=" flex py-8">
              <div className=" shadow-lg py-8  rounded-lg mx-6 text-center">
                <img src={aji} className=" w-48 rounded-full mx-auto" />
                <h1 className=" text-3xl font-poppins pt-3">Aji Setiaji</h1>
                <div className="box-border text-center px-40">
                  <p className=" text-gray-500 text-xs py-2">
                    Oldest son of Mr. Budi Darma Putra and Mrs. Marniati
                  </p>
                  <p>
                    He is a Telecommunication engineering diploma who loves
                    technology and work.
                  </p>
                  <p>
                    {" "}
                    He now works as a programmer with a backend engineer focus
                  </p>
                </div>
              </div>
              <div className=" shadow-lg py-8  rounded-sm mx-6 text-center">
                <img src={afif} className=" w-48 rounded-full mx-auto" />
                <h1 className=" text-3xl font-poppins pt-3">
                  Nur Afifah Sholihah
                </h1>
                <div className="box-border text-center px-40">
                  <p className=" text-gray-500 text-xs py-2">
                    Oldest son of Mr. Das'an and Mrs. Rusmini
                  </p>
                  <p>
                    She is a diploma in nutrition who loves health sciences and
                    work.
                  </p>
                  <p>
                    She now works as a nutritionist to provide health services
                    to the community
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
