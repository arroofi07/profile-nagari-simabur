import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Bangun() {
  const position: any = [-0.46109808408422237, 100.51007160614827]; // Default coordinates
  const markerIcon = new L.Icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="border flex-col flex  rounded-lg shadow-lg overflow-hidden mb-4">

      <div className="w-full text-white ">
        <nav className="w-full bg-orange-700 flex justify-start items-center fixed top-0 h-[40px]  ">
          <Link to="/" className="w-[37%] flex justify-start items-start text-center pl-5  ">
            <p className="hover:text-black cursor-pointer text-[20px] ">
              <FaArrowAltCircleLeft />
            </p>
          </Link>
          <h1 className=" w-[50%]  font-serif font-semibold ">Peta Nagari</h1>
        </nav>
      </div>

      <div className="h-64 mt-[40px] ">
        <MapContainer center={position} zoom={13} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={markerIcon}></Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Bangun;
