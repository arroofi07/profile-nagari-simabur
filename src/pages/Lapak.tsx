import { FaArrowAltCircleLeft, FaWhatsapp } from "react-icons/fa";
import dakakOri from "../assets/dakak-ori.jpg";
import dakakPutih from "../assets/dakak-putih.jpg";
import dakakUngu from "../assets/dakak-ungu.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { Link } from "react-router-dom";

function LapakNagari() {


  const list = [
    {
      img: dakakOri,
      title: 'Dakak-Dakak Murni',
      harga: '10.000',
      kategori: 'jajanan khas simabur',
      Iwhatsapp: <FaWhatsapp />,
      waTo: 'https://wa.me/send?phone=6285346343695&text=Welcome',
      Iemail: <MdEmail />,
      mailto: 'mailto:mutiazikra69@gmail.com',
      iLoc: <FaLocationDot />,
      koordinat: 'https://www.google.com/maps/search/?api=1&query=-0.4622252946657233, 100.51248065850965'
    },
    {
      img: dakakPutih,
      title: 'Dakak-Dakak Murni',
      harga: '10.000',
      kategori: 'jajanan khas simabur',
      Iwhatsapp: <FaWhatsapp />,
      waTo: 'https://wa.me/send?phone=6285346343695&text=Welcome',
      Iemail: <MdEmail />,
      mailto: 'mailto:mutiazikra69@gmail.com',
      iLoc: <FaLocationDot />,
      koordinat: 'https://www.google.com/maps/search/?api=1&query=-0.4622252946657233, 100.51248065850965'
    },
    {
      img: dakakUngu,
      title: 'Dakak-Dakak Murni',
      harga: '10.000',
      kategori: 'jajanan khas simabur',
      Iwhatsapp: <FaWhatsapp />,
      waTo: 'https://wa.me/send?phone=6285346343695&text=Welcome',
      Iemail: <MdEmail />,
      mailto: 'mailto:mutiazikra69@gmail.com',
      iLoc: <FaLocationDot />,
      koordinat: 'https://www.google.com/maps/search/?api=1&query=-0.4622252946657233, 100.51248065850965'
    },

  ]

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center ">



      <div className="w-full text-white ">
        <nav className="w-full bg-orange-700 flex justify-start items-center fixed top-0 h-[40px]  ">
          <Link to="/" className="w-[37%] flex justify-start items-start text-center pl-5  ">
            <p className="hover:text-black cursor-pointer text-[20px] ">
              <FaArrowAltCircleLeft />
            </p>
          </Link>
          <h1 className=" w-[50%]  font-serif font-semibold "></h1>
        </nav>
      </div>


      {/* contents */}
      <div className=" w-full p-4 mt-[60px] " >
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-orange-700 text-white rounded-full flex items-center justify-center">
              {/* Icon placeholder */}
              <FaShop />
            </div>
            <h1 className="text-orange-700 text-3xl font-bold ml-3">LAPAK NAGARI</h1>
          </div>
        </div>
        {/* Product Cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 */}
          {list.map((value, key) => (
            <div style={{ boxShadow: ' 0 0 10px orange' }} key={key} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={value.img}
                alt="Dakak-dakak Fortuna"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-white font-bold mb-2">{value.title}</h2>
                <p className="text-orange-700 font-semibold mb-2"> Rp.{value.harga}</p>
                <p className="text-gray-400 text-sm">{value.kategori}</p>
              </div>
              <div className="flex justify-between bg-gray-900 p-2">
                <a href={value.koordinat} className="text-orange-500">{value.iLoc}</a>
                <a href={value.waTo} className="text-orange-700">{value.Iwhatsapp}</a>
                <a href={value.mailto} className="text-blue-500"> {value.Iemail} </a>
              </div>
            </div>

          ))}


        </div>
      </div>
    </div>
  );
}

export default LapakNagari;
