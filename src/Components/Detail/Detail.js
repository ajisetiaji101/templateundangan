import React from "react";
import BungaDetail from "../../gambar/rosevindetail.png";
import gmapsnikah from "../../gambar/gmapsnikah.png";

const Detail = () => {
  return (
    <div className="flex items-stretch bg-grey-lighter min-h-screen font-poppins">
      <div className="flex justify-center items-center w-full">
        <div className=" text-center">
          <div>
            <img src={BungaDetail} className=" w-32 mx-auto" />
          </div>
          <p className=" tracking-widest">We Invite You to Celebrate</p>
          <h1 className="py-9 font-bold font-great text-5xl">Aji & Afifah</h1>
          <p className=" tracking-widest">Which is celebration on</p>
          <p className=" tracking-widest text-gray-500 text-5xl py-8">
            NOV | 13 | 2022
          </p>
          <p className=" text-red-400">
            Akad starting at 08:00, in the morning
          </p>
          <p className=" text-red-400">
            Reception continue at 18:00, in the afternoon
          </p>
          <div className="flex">
            <img src={gmapsnikah} className=" w-28 mr-2" />
            <h1 className="">
              Jl. Tegal Binangun Lorong Karang Anyar No. 1232 RT. 33 RW. 7,
              Plaju Darat, Palembang, Sumatra Selatan, 30267
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
