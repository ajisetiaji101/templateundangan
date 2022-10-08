import React from "react";
import cincin from "../../gambar/cincin.png";
import gmapsnikah from "../../gambar/gmapsnikah.png";
import pasangan from "../../gambar/pasangan.png";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div
      // className="flex items-stretch bg-grey-lighter min-h-screen font-poppins"
      className="pt-8"
      id="invite"
    >
      <div className="md:flex sm:flex-none justify-center items-center w-full font-josep">
        <div className="md:flex-1 sm:flex justify-center mb-20">
          <img src={pasangan} className="h-full" />
        </div>
        <div className=" text-center sm:w-full md:w-1/2">
          <p className="text-2xl">
            السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </p>
          <p className="text-xl font-belinda">
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </p>
          <p className="p-4 leading-loose">
            Dengan memohon Rahmat Allah SWT dan dengan segenap kerendahan hati,
            perkenankanlah kami mengundang Bapak/Ibu/Saudara/i untuk dapat
            menghadiri acara nikah kami yg dilaksanakan pada :
          </p>
          <div className=" shadow mx-8 rounded-md py-8">
            <img src={cincin} className="w-20 mx-auto" />
            <h1 className="py-2 text-lg font-bold">Akad & Resepsi</h1>
            <p>Minggu, 13 November 2022</p>
            <p className="py-4">08.00 WIB - Selesai</p>
            <h1 className="py-auto text-xs px-3">
              Jl. Tegal Binangun Lorong Karang Anyar No. 1232 RT. 33 RW. 7,
              Plaju Darat, Palembang, Sumatra Selatan, 30267
            </h1>
            <button className="px-4 py-2 mt-4 bg-indigo-600 rounded-md text-white">
              <a href="https://maps.google.com/?q=Lorong+Karang+Anyar+No.1232%2C+RT.38%2C+Plaju+Darat%2C+Kec.+Plaju%2C+Kota+Palembang%2C+Sumatera+Selatan+30267&ftid=0x2e3b9d091fae893b:0xe2d6cb69e3a53700&entry=gps">
                View Map
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
