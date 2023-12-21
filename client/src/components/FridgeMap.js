//display styling for leaflet
import 'leaflet/dist/leaflet.css'

//display icon in interactive map
import L from 'leaflet'

//building blocks for leaflet
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup
} from 'react-leaflet'



//****************************************DRAFT 3  */
// added bound prop
//The MapContainer component now includes a bounds prop, which is set to the calculated bounds array.
//The center prop of the MapContainer is still set to South Philly.


// Create a custom icon
const fridgeIcon = new L.Icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/food-icons-rounded/110/Refrigerator-512.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const fridgeLocations = [
    {
        id: 1,
        position: [39.933026, -75.174741],
        name: 'South Philadelphia Community Fridge',
        address: '1229 S 6th St, Philadelphia, PA 19147',
    },
    // Add more fridge locations as needed
];

export default function FridgeMap() {
    // Calculate the bounds to include all markers
    const bounds = fridgeLocations.map(({ position }) => position);
    const mapCenter = [39.933026, -75.174741]; // South Philly

    return (
        <div className="leaflet-container">
            <MapContainer center={mapCenter} zoom={15} style={{ height: '100vh' }} bounds={bounds}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {fridgeLocations.map(({ id, position, name, address }) => (
                    <Marker key={id} position={position} icon={fridgeIcon}>
                        <Popup>
                            Name: {name} <br /> Location: {address}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}