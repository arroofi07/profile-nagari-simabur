import {
  FaCamera,
  FaChartPie,
  FaFolder,
  FaInfoCircle,
  FaMap,
  FaRobot,
} from "react-icons/fa";
// import { FaThList } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiSpeakerphone, HiIdentification } from "react-icons/hi";

import "../index.css";
import Logo from "../assets/Lambang_Kabupaten_Tanah_Datar.png";
import { FaUserAlt } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { FaMosque } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const NagariSimabur = () => {

  const navigate: any = useNavigate()


  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleDateString('id-ID', options);
      const formattedTime = date.toLocaleTimeString('id-ID');
      setCurrentDateTime(`${formattedDate}, ${formattedTime}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const list = [
    {
      text: "Aparatur Nagari",
      url: "/aparatur",
      icon: <FaUserAlt />,
    },
    {
      text: "Statistik Nagari",
      url: "/statistik",
      icon: <FaChartPie />,
    },
    {
      text: "Identitas Nagari ",
      url: "/identitas",
      icon: <HiIdentification />,
    },
  ];

  const list2 = [
    {
      text: "Peta Nagari",
      url: "/bangun",
      icon: <FaMap />,
    },
    {
      text: "Lapak Nagari",
      url: "/lapak",
      icon: <FaShopify />,
    },
    {
      text: "Lokasi Nagari",
      url: "https://www.google.com/maps/search/?api=1&query=-0.46111921936405903,100.51003134363806",
      icon: <FaLocationDot />,
    },


  ];

  const list3 = [
    {
      text: "Ruang Lapor",
      url: "/",
      icon: <HiSpeakerphone />,
    },
    {
      text: "Galeri Nagari",
      url: "/",
      icon: <FaCamera />,
    },
    {
      text: "Arsip Nagari",
      url: "/",
      icon: <FaFolder />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center w-full  h-auto">


      {/* Main Content */}
      <div
        id="all-content"
        className="w-full text-white h-auto flex flex-col fixed top-0 z-50 justify-center items-center"
      >
        {/* Navbar */}
        <nav
          style={{ boxShadow: "0 0 10px white" }}
          className="w-full z-50 flex text-center justify-start p-3 items-center h-[50px] bg-orange-700 border-b-[1px]"
        >
          <ul className="w-[50%] h-10"  >
            <li
              className="text-[20px] rounded-[2px] hover:bg-black hover:text-white cursor-pointer text-black p-1 h-10 w-10 -ml-2 items-center flex justify-center"
            >
              <img src={Logo} alt="" className="animate-pulse" />
            </li>
          </ul>
          <ul onClick={() => navigate('/ai')} className="w-[50%] h-10 flex justify-end text-[24px] hover:text-white text-black items-center"> <FaRobot /> </ul>
        </nav>
      </div >

      <div className="relative w-full text-white font-serif top-9 -z-50">
        <div
          id="box-img-home"
          className="font-serif w-full h-[250px] flex flex-col pt-6 justify-center items-center text-center"
        >
          <div className="overlay"></div>
          <img
            src={Logo}
            className="relative mb-3 w-[100px] h-[100px]"
            alt="Logo"
          />
          <h1 className="text-lg font-semibold">WEBSITE RESMI</h1>
          <h1 className="text-xl font-semibold">NAGARI SIMABUR</h1>
          <h4 className="text-sm">Pariangan, Tanah Datar</h4>
        </div>
      </div>

      {/* info section */}
      <div className="w-full flex justify-center items-center mt-8">
        <ul className="h-auto bg-orange-700 w-[95%] flex justify-end items-end  mt-3 rounded-[5px] mb-3">
          <h1 className="bg-black m-1 w-[80px] rounded-[3px] text-white text-[13px] space-x-2 flex justify-start items-center text-center font-serif font-semibold pr-1  ">
            <FaInfoCircle /> <p>info</p>
          </h1>
          <div className="relative overflow-hidden whitespace-nowrap">
            <div className="animate-marquee inline-block text-white text-[13px] font-semibold ">
              Nagari Simabur, Kecamatan Pariangan, Kabupaten Tanah Datar,
              Provinsi Sumatera Barat
            </div>
          </div>
        </ul>
      </div>

      <div className="w-full relative top-1 flex justify-center items-center font-serif">
        <div
          id="box-list-nav"
          className="max-w-[500px] bg-orange-700 text-white w-full rounded-[10px] border-[1px] border-orange-700 p-3 flex flex-col space-y-3 justify-center items-center"
        >
          {/*  */}
          {/* list 1 */}
          <ul className=" flex justify-center items-center space-x-3">
            {list.map((value, key) => (
              <Link
                key={key}
                to={value.url}
                className="bg-orange-700 active:animate-ping hover:bg-black hover:text-orange-700 cursor-pointer bg-opacity-35 p-1 border-[1px] border-orange-700 text-[20px] rounded-[3px] w-[100px] h-[60px] flex flex-col justify-center items-center"
              >
                {value.icon}
                <p className="text-[12px] font-serif"> {value.text} </p>
              </Link>
            ))}
          </ul>

          {/* list 2 */}
          <ul className=" flex justify-center items-center space-x-3">
            {list2.map((value, key) => (
              <Link
                key={key}
                to={value.url}
                className="bg-orange-700 active:animate-ping hover:bg-black hover:text-orange-700 cursor-pointer bg-opacity-35 p-1 border-[1px] border-orange-700 text-[20px] rounded-[3px] w-[100px] h-[60px] flex flex-col justify-center items-center"
              >
                {value.icon}
                <p className="text-[12px] font-serif"> {value.text} </p>
              </Link>
            ))}
          </ul>

          {/* list 3 */}
          <ul className=" flex justify-center items-center space-x-3">
            {list3.map((value, key) => (
              <Link
                key={key}
                to={value.url}
                className="bg-orange-700 active:animate-ping hover:bg-black hover:text-orange-700 cursor-pointer bg-opacity-35 p-1 border-[1px] border-orange-700 text-[20px] rounded-[3px] w-[100px] h-[60px] flex flex-col justify-center items-center"
              >
                {value.icon}
                <p className="text-[12px] font-serif"> {value.text} </p>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full flex flex-col items-center mb-[70px] mt-7 text-white">
        <div className="overlay2"></div>
        <h1
          id="lok-nagari"
          style={{ boxShadow: "0 0 10px white" }}
          className="w-[95%] h-[100px] -z-20 rounded-lg border-orange-700 border-[2px] font-serif font-semibold p-3"
        >
          <p className="text-[20px]">Lokasi Kantor Nagari</p>
        </h1>
        <div
          id="box-map"
          className=" border-orange-700 border-t-0 border-[2px] flex justify-center items-center text-center mt-[-50px] p-4 rounded-lg shadow-lg w-[95%] h-[270px]"
        >
          <a
            id="icon-loc"
            href="https://www.google.com/maps/search/?api=1&query=-0.46109808408422237,100.51007160614827"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center text-center"
          >
            <p className="text-[100px] text-orange-600 animate-bounce location-icon">
              <FaLocationDot />
            </p>
            <h3
              style={{ textShadow: ' 0 0 10px orange' }}
              className=" font-semibold font-serif ">Click To See Maps</h3>
          </a>
        </div>
      </div>




      {/* jadwal sholat */}
      <div style={{ boxShadow: '0 0 10px orange' }} className="bg-gray-800 border-[1px] border-orange-700 text-white p-4 rounded-lg shadow-lg w-[95%]">
        {/* Header */}
        <div className="flex items-center mb-4">
          <div className="bg-orange-700 p-2 rounded-full">
            {/* Placeholder for the mosque icon */}
            <FaMosque />
          </div>
          <div className="ml-3">
            <h1 className="text-lg font-bold">JADWAL IMSAK, SHALAT & BERBUKA</h1>
            <p className="text-orange-700 text-sm">Wilayah Kab. Tanah Datar</p>
          </div>
        </div>

        {/* Date */}
        <p className="text-gray-400 text-sm mb-4"> {currentDateTime} </p>

        {/* Prayer Times */}
        <div className="grid grid-cols-2 gap-2 font-serif ">
          <div className="bg-gray-900 hover:bg-orange-700 p-2 rounded-md text-center border border-orange-700">
            Imsak
          </div>
          <div className="bg-gray-900 hover:bg-orange-700 p-2 rounded-md text-center border border-orange-700">
            <p>Subuh</p>
            <p>04.58</p>
          </div>
          <div className="bg-gray-900 hover:bg-orange-700 p-2 rounded-md text-center border border-orange-700">
            <p>Dzuhur</p>
            <p>12.19</p>
          </div>
          <div className="bg-gray-900 hover:bg-orange-700 p-2 rounded-md text-center border border-orange-700">
            <p>Ashar</p>
            <p>15.34</p>
          </div>
          <div className="bg-gray-900 hover:bg-orange-700 p-2 rounded-md text-center border border-orange-700">
            <p>Magrib & Berbuka</p>
            <p>18.22</p>
          </div>
          <div className="bg-gray-900 hover:bg-orange-700 p-2 rounded-md text-center border border-orange-700">
            <p>Isya</p>
            <p>19.32</p>
          </div>
        </div>
      </div>


      export default JadwalImsak;


    </div >
  );
};

export default NagariSimabur;
