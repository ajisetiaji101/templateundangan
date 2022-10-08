import React from "react";
import BungaDetail from "../../gambar/rosevindetail.png";
import gmapsnikah from "../../gambar/gmapsnikah.png";
import pasangan from "../../gambar/pasangan.png";

const Detail = () => {
  return (
    <div
      className="flex items-stretch bg-grey-lighter min-h-screen font-poppins"
      id="invite"
    >
      <div className="md:flex sm:flex-none justify-center items-center w-full">
        <div className="md:flex-1 sm:flex justify-center">
          <img src={pasangan} className="h-full" />
        </div>
        <div className=" text-center sm:w-full md:w-1/2">
          <div>
            <img src={BungaDetail} className=" w-32 mx-auto" />
          </div>
          <p className=" tracking-widest">We Invite You to Celebrate</p>
          <h1 className="py-9 font-bold font-great text-5xl">Aji & Afifah</h1>
          <p className=" tracking-widest">Which is celebration on</p>
          <p className=" tracking-widest text-gray-500 md:text-5xl sm:text-2xl py-8">
            NOV | 13 | 2022
          </p>
          <p className=" text-red-400">
            Akad starting at 08:00, in the morning
          </p>
          <p className=" text-red-400">
            Reception continue at 09:00, in the morning
          </p>
          <div className="flex justify-center md:py-3 sm:py-8">
            <img src={gmapsnikah} className=" w-28 mr-6" />
            <span className="w-1/2 flex items-center">
              <h1 className="text-justify py-auto leading-loose">
                Jl. Tegal Binangun Lorong Karang Anyar No. 1232 RT. 33 RW. 7,
                Plaju Darat, Palembang, Sumatra Selatan, 30267
              </h1>
            </span>
          </div>
          <p className=" text-gray-400">Together with our families,</p>
          <p className=" text-gray-400">
            {" "}
            Request the honor of your presence of our marriage
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
