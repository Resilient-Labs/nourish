//display styling for leaflet
import "leaflet/dist/leaflet.css"

//display icon in interactive map
import L from "leaflet"
import icon from '../images/fridgeIcon_one.png';

//building blocks for leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"

// Create a custom icon
const fridgeIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32] 
})

export default function FridgeMap({ allFridges }) {
  let reformatData = []
  // Iterate through each object in the data array using a for...of loop
  for (const item of allFridges.fridges) {
    let location = {}

    // Extract latitude and longitude values
    const lat = item.location.lat
    const long = item.location.long

    // Convert lat and long to numbers and push them into the position array
    location.position = [parseFloat(lat), parseFloat(long)]

    // Convert key to id and push it into the position array
    location.id = item.key

    // Convert name and push it into the position array
    location.name = item.name

    // Convert key to id and push it into the position array
    location.address = item.location.address

    // Push the new object into the reformatData array
    reformatData.push(location)
  }

  // Calculate the bounds to include all markers
  const bounds = reformatData.map(({ position }) => position)
  const mapCenter = [39.933026, -75.174741] // South Philly

  return (
    <div className="leaflet-container">
      {/* The MapContainer component now includes a bounds prop, which is set to the calculated bounds array. */}
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "100vh" }}
        bounds={bounds}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
        />
        {reformatData.map(({ id, position, name, address }) => (
          <Marker key={id} position={position} icon={fridgeIcon}>
            <Popup>
              Name: {name} <br /> Location: {address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
