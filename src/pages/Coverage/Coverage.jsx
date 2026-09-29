import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from "react-router";
import { useRef } from "react";
 
const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData(); 
    const mafRef = useRef(null)
    const handleSearch = (e)=>{
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c =>c.district.toLowerCase().includes(location.toLowerCase()));
        if(district){
          const coord = [district.latitude, district.longitude];
          mafRef.current.flyTo(coord, 14)
        }

    }

  return (
    <div className="my-24">
        <h1 className="text-3xl font-bold">We are available in 64 districts</h1>
        {/* form */}
        <div>
            <form onSubmit={handleSearch}>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input name="location" type="search" className="grow" placeholder="Search Location" />
  <button type="submit" className="btn bg-amber-300 rounded-full btn-xs p-2">Search</button>
</label>
            </form>
        </div>
        {/* maps */}
        <div className="h-200 border mt-10">
             <MapContainer className="h-200" center={position} zoom={7} scrollWheelZoom={false} ref={mafRef} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {
        serviceCenters.map((center, idx)=><Marker
         key={idx}
          position={[center.latitude,
             center.longitude]}
             
        >
      <Popup>
       <strong className="font-bold text-black text-lg">{center.district}</strong> <br /><strong className="font-bold text-black text-sm">Service Area :</strong>  <strong className="text-gray-500"> {center.covered_area.join(', ')}</strong>
      </Popup>
    </Marker>)
    }
    
  </MapContainer>
        </div>
    </div>
  )
}

export default Coverage