import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from "react-router";
 
const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData(); 
  return (
    <div className="my-24">
        <h1 className="text-3xl font-bold">We are available in 64 districts</h1>
        <div></div>
        {/* maps */}
        <div className="h-200 border mt-10">
             <MapContainer className="h-200" center={position} zoom={7} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {
        serviceCenters.map(center=><Marker position={[center.latitude, center.longitude]}>
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