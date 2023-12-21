
import 'leaflet/dist/leaflet.css'
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup
} from 'react-leaflet'

export default function FridgeMap() {
    const position = [39.933026, -75.174741]
return (
    <div className="leaflet-container-outside">
            <div className="leaflet-container-list">    
                <p>hello</p>
            </div>
            <div className="leaflet-container">
                <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
        </div>
    </div>
    )
}