import { FaArrowAltCircleLeft } from "react-icons/fa"
import wali from '../assets/pak-ari.jpeg'
import sekdes from '../assets/pak-niko.jpg'
import { Link } from "react-router-dom"

function Aparatur() {

  const list = [
    {
      img: wali,
      nama: 'Ari Abriyanto',
      posisi: 'Wali Nagari'
    },
    {
      img: sekdes,
      nama: 'Niko Saputra',
      posisi: 'Sekretaris Nagari'
    },
  ]

  return (
    <div className='text-white flex flex-col justify-center items-center text-center ' >


      <div className="w-full text-white ">
        <nav className="w-full bg-orange-700 flex justify-start items-center fixed top-0 h-[40px]  ">
          <Link to="/" className="w-[25%] flex justify-start items-start text-center pl-5  ">
            <p className="hover:text-black cursor-pointer text-[20px] ">
              <FaArrowAltCircleLeft />
            </p>
          </Link>
          <h1 className=" w-[50%]  font-serif font-semibold ">Aparatur Nagari</h1>
        </nav>
      </div>



      {/* content */}
      <div className=" w-full flex flex-col pt-6 justify-center items-center text-center mb-10 text-white  ">

        {list.map((value, key) => (
          <ul key={key} className=" border-[1.5px] rounded-[10px] mt-10  border-orange-700 w-[85%] bg-orange-700 bg-opacity-30 ">

            <li className="font-serif">
              <img src={value.img} className="rounded-[10px]  w-full " alt="" />
              <p className=" capitalize font-semibold "> {value.nama} </p>
              <p className="text-[13px] font-extralight capitalize "> {value.posisi} </p>
            </li>

          </ul>
        ))}
      </div>



    </div>
  )
}

export default Aparatur
