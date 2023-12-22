import FridgeList from './FridgeList.js'
import FridgeMap from './FridgeMap.js'

export default function Fridge({ data }) {
    console.log("data")
    console.log(data)
    return (
        <div className="leaflet-container-outside"> 
            < FridgeList data={data} />
            < FridgeMap data={data} />
        </div>
    )
}