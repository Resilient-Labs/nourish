import "leaflet/dist/leaflet.css" // Display styling for leaflet
import L from "leaflet" // Display icon in interactive map
import icon from "../images/fridgeIcon_one.png"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet" // Building blocks for leaflet

// Create custom icon
const fridgeIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
})

export default function FridgeMap({ allFridges }) {
  let reformatData = []
  // Iterate through each object in data array using for...of loop
  for (const item of allFridges.fridges) {
    let location = {}

    // Extract latitude and longitude values
    const lat = item.location.lat
    const long = item.location.long

    // Convert lat and long to numbers and push into position array
    location.position = [parseFloat(lat), parseFloat(long)]

    // Convert key to id and push into position array
    location.id = item.key

    // Convert name and push into position array
    location.name = item.name

    // Convert key to id and push into position array
    location.address = item.location.address

    // Push new object into reformatData array
    reformatData.push(location)
  }

  // Calculate bounds to include all markers
  const bounds = reformatData.map(({ position }) => position)
  const mapCenter = [39.933026, -75.174741] // South Philly

  return (
    <div className="leaflet-container">
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "100vh" }}
        bounds={bounds}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
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
