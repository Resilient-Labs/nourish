//display styling for leaflet
import "leaflet/dist/leaflet.css"

//building blocks for leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"

//display icon in interactive map
import L from "leaflet"
import icon from '../images/fridgeIcon_one.png';



// Create a custom icon
const fridgeIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32] 
})

export default function FridgeMap({ allFridges }) {

  let reformatData = []
  
  // Iterate through all fridges to reformat the position and get necessary data
  for (const item of allFridges.fridges) {
    let location = {}

    // Convert lat and long to numbers and push them into the position array
    const lat = item.location.lat
    const long = item.location.long
    location.position = [parseFloat(lat), parseFloat(long)]

    // Get only necessary fields for Map
    location.id = item.key
    location.name = item.name
    location.address = item.location.address

    // Add fridge data to list
    reformatData.push(location)
  }

  // Calculate the bounds to include all markers
  const bounds = reformatData.map(({ position }) => position)
  const mapCenter = [39.933026, -75.174741] // South Philly

  return (
    <div className="leaflet-container">

      <MapContainer
        center={mapCenter}
        zoom={12}
        style={{ height: "100vh" }}
        bounds={bounds}
      >
      
        {/*The interactive map with selected style*/}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
        />

        {/* This creates a marker on the map for all provided fridges  */}
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
