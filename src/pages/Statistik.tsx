import { useState } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";

function Statistik() {
  const [selectedItem, setSelectedItem] = useState<any>("");



  // data
  const data = [
    { no: 1, usage: 'Pemukiman', area: 398, percentage: 42.5 },
    { no: 2, usage: 'Sawah', area: 249, percentage: 26.3 },
    { no: 3, usage: 'Perikanan', area: 7, percentage: 0.7 },
    { no: 4, usage: 'Kebun Campuran/Sejenis', area: 291, percentage: 30.8 },
  ];

  const totalArea = data.reduce((acc, item) => acc + item.area, 0);
  const totalPercentage = data.reduce((acc, item) => acc + item.percentage, 0);



  const statistikData = [
    {
      label: 'Data Wilayah', icon: '🌍', style: 'top-[-20px] z-50 left-1/2 transform -translate-x-1/2',
      detail:
        <div className='' >
          <h1 className='font-semibold text-[25px] text-orange-500 ' >Batas Wilayah</h1>
          <p className='text-start' >
            Utara:	nagari Sawah Tangah
            <br />
            Timur:	nagari Tabek
            <br />
            Selatan:	nagari Batu Basa
            <br />
            Barat:	nagari Pariangan
          </p>
          <br />
          <br />
          <h1 className='font-semibold text-[25px] text-orange-500 ' >Jumlah Penduduk</h1>
          <p className='flex flex-col justify-start items-start textx' >
            <h3>        No.	Jorong	Jumlah</h3>
            <h3>
              1	Simabur	1850</h3>
            <h3> 2	Tanjung Limau	604</h3>
            <h3>  3	Koto Tuo	426</h3>
            <h3>
              Jumlah	2880</h3>
          </p>
          <br />
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-700 border text-white border-orange-700">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-orange-700 text-center">No.</th>
                  <th className="px-4 py-2 border border-orange-700 text-center">Penggunaan Lahan</th>
                  <th className="px-4 py-2 border border-orange-700 text-center">Luas (Ha)</th>
                  <th className="px-4 py-2 border border-orange-700 text-center">Persentase (%)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.no}>
                    <td className="px-4 py-2 border border-orange-700 text-center">{item.no}</td>
                    <td className="px-4 py-2 border border-orange-700">{item.usage}</td>
                    <td className="px-4 py-2 border border-orange-700 text-center">{item.area}</td>
                    <td className="px-4 py-2 border border-orange-700 text-center">{item.percentage}</td>
                  </tr>
                ))}
                <tr>
                  <td className="px-4 py-2 border border-orange-700 font-bold text-center" >Jumlah</td>
                  <td className="px-4 py-2 border border-orange-700 font-bold text-center">{totalArea}</td>
                  <td className="px-4 py-2 border border-orange-700 font-bold text-center">{totalPercentage}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>,
    },
    {
      label: 'Data Perkawinan', icon: '💖', style: 'top-1/4 right-0 transform z-50 translate-x-1/2',
      detail:
        <div className='text-start flex flex-col justify-start items-start ' >
          <h1 className=' text-[25px] text-orange-500 font-semibold ' >Rasio Penduduk Per Gender</h1>
          <p>
            Jorong Simabur : L= 821,  P= 979
          </p>
          <p>
            Jorong Tanjung Limau : L= 272,  P= 332
          </p>
          <p>
            Jorong Koto Tuo : L= 219,  P= 207
          </p>
        </div>
    },
    { label: 'Data Agama', icon: '☪️', style: 'top-3/4 right-0 transform z-50 translate-x-1/2', detail: 'Detail tentang Data Agama...' },
    { label: 'Data Pemilih', icon: '🗳️', style: '-bottom-[70px] left-1/2 transform z-50 -translate-x-1/2', detail: 'Detail tentang Data Pemilih...' },
    { label: 'Data Pendidikan', icon: '🎓', style: 'top-3/4 left-0 transform z-50 -translate-x-1/2', detail: 'Detail tentang Data Pendidikan...' },
    { label: 'Data Pekerjaan', icon: '💼', style: 'top-1/4 left-0 transform z-50 -translate-x-1/2', detail: 'Detail tentang Data Pekerjaan...' },
  ];





  return (
    <div>
      <div className="text-white w-full flex justify-center flex-col items-center text-center z-50 pt-10">
        <div className="w-full text-white ">
          <nav className="w-full bg-orange-700 flex justify-start items-center fixed top-0 h-[40px]">
            <a href="/" className="w-[25%] flex justify-start items-start text-center pl-5">
              <p className="hover:text-black cursor-pointer text-[20px]">
                <FaArrowAltCircleLeft />
              </p>
            </a>
            <h1 className=" w-[50%] font-serif font-semibold">Statistik Nagari</h1>
          </nav>
        </div>



      </div>


      <div className=' w-full h-auto -z-20   ' >
        <div className="bg-gray-800   text-white p-6 rounded-md text-center relative w-[95%] mx-auto mt-4">
          <div className="bg-orange-700 text-white p-2 rounded-md mb-12 font-bold">
            Nagari Simabur
          </div>


          {/*  */}
          <div className="relative w-[85%] z-50 h-64 mx-auto">
            {statistikData.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item.detail)} // Atur item yang dipilih saat diklik
                className={`absolute flex flex-col items-center cursor-pointer ${item.style}`}
              >
                <div className="bg-black border-[2px] border-orange-700 p-3 rounded-full">
                  <div className="bg-white p-2 rounded-full text-2xl">{item.icon}</div>
                </div>
                <div className="text-xs mt-1">{item.label}</div>
              </div>
            ))}

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-black rounded-full p-8 relative mt-12">
                <div className="text-center">
                  <div className="text-white text-3xl font-bold">2880</div>
                  <div className="text-orange-700 font-bold text-lg">POPULASI</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-around mt-24 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold">1312</div>
              <div className="text-sm">LAKI-LAKI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1511</div>
              <div className="text-sm">PEREMPUAN</div>
            </div>
          </div>

          {/* Tampilkan detail item yang dipilih */}
          {selectedItem && (
            <div style={{ boxShadow: '0 0 10px orange' }} className="mt-8 p-4 bg-gray-700 text-white w-full rounded-md border-[2px] border-orange-700 ">
              <h2 className="text-xl font-bold mb-2">{selectedItem.label}</h2>
              <p>{selectedItem}</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Statistik;
