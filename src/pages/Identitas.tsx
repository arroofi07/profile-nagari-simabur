import { FaArrowAltCircleLeft } from "react-icons/fa"

function Identitas() {

  const infoData = [
    { label: 'Nama Nagari', value: 'Simabur', isBold: true },
    { label: 'Kode Nagari', value: '1304092004' },
    { label: 'Kecamatan', value: 'Pariangan' },
    { label: 'Kode Kecamatan', value: '130409' },
    { label: 'Kabupaten', value: 'Tanah Datar' },
    { label: 'Kode Kabupaten', value: '1304' },
    { label: 'Provinsi', value: 'Sumatera Barat' },
    { label: 'Kode Provinsi', value: '13' },
    { label: 'Kode Pos', value: '27264' },
  ];
  return (
    <div className=" text-white " >
      <div className="w-full text-white ">
        <nav className="w-full bg-orange-700 flex justify-start items-center fixed top-0 h-[40px]  ">
          <a href="/" className="w-[33%] flex justify-start items-start text-center pl-5  ">
            <p className="hover:text-black cursor-pointer text-[20px] ">
              <FaArrowAltCircleLeft />
            </p>
          </a>
          <h1 className=" w-[50%]  font-serif font-semibold ">Identitas Nagari</h1>
        </nav>
      </div>


      {/* content */}
      <div className=" w-full flex justify-center text-[14px] flex-col text-start items-start pl-3 font-sans text-gray-200  mt-12  ">

        {infoData.map((item, index) => (
          <div key={index} className="flex">
            <span className="w-40">{item.label}</span>
            <span className="flex-1">: <span className={item.isBold ? 'font-bold text-yellow-400' : ''}>{item.value}</span></span>
          </div>
        ))}

      </div>



    </div>
  )
}

export default Identitas
