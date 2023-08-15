import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';


export default function Map({ latitude, longitude }) {
  const [geoData, setGeoData] = useState({ lat: latitude, lng: longitude });

  const center = [geoData.lat, geoData.lng];
  const fillBlueOptions = { fillColor: '#c0a84e'  , color: '#c0a84e'  }

  return (
    <MapContainer center={center} zoom={13} className="z-0 h-72">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={center} radius={600} pathOptions={fillBlueOptions} />
    </MapContainer>
  );
}
