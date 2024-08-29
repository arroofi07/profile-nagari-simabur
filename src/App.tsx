import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NagariSimabur from './pages/NagariSimabur';
import Aparatur from './pages/Aparatur';
import Statistik from './pages/Statistik';
import Bangun from './pages/Bangun';
import LapakNagari from './pages/Lapak';
import Identitas from './pages/Identitas';
import Ai from './pages/Ai';
import logo from './assets/Lambang_Kabupaten_Tanah_Datar.png'

const MyComponent: React.FC = () => {
  const [showWelcomeImage, setShowWelcomeImage] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    // Menampilkan gambar setiap kali halaman berpindah
    setShowWelcomeImage(true);

    // Sembunyikan gambar setelah 2 detik
    const timer = setTimeout(() => {
      setShowWelcomeImage(false);
    }, 1000);

    // Bersihkan timer saat komponen dilepas
    return () => clearTimeout(timer);
  }, [location.pathname]); // Menjalankan efek setiap kali lokasi berubah

  return (
    <div>
      {/* Image Welcome Section */}

      {showWelcomeImage && (
        <div
          id="box-logo"
          style={{ boxShadow: '0 0 10px white' }}
          className="bg-opacity-80 bg-orange-700 text-white font-normal pt-[-50px] w-full h-screen flex flex-col justify-center items-center text-center"
        >
          <img
            id="imageToHide"
            className="pb-[20px]"
            src={logo}
            width="100"
            height="100"
            alt="Lambang Kabupaten Tanah Datar"
          />
          <h1 className="pb-2 font-semibold text-[25px]">NAGARI SIMABUR</h1>
          <h2 className="text-[13px] font-mono  ">PARIANGAN, TANAH DATAR</h2>
          {/* loadinng */}
          <div className='flex space-x-2 mt-6 justify-center items-center dark:invert'>
            <span className='sr-only'>Loading...</span>
            <div className='h-5 w-5 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-5 w-5 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-5 w-5 bg-yellow-400 rounded-full animate-bounce'></div>
          </div>
        </div>
      )}



      <Routes>
        <Route path="/" element={<NagariSimabur
        />} />
        <Route path="/aparatur" element={<Aparatur />} />
        <Route path="/statistik" element={<Statistik />} />
        <Route path="/bangun" element={<Bangun />} />
        <Route path="/lapak" element={<LapakNagari />} />
        <Route path="/identitas" element={<Identitas />} />
        <Route path="/ai" element={<Ai />} />
      </Routes>
    </div>
  );
};

export default MyComponent;
