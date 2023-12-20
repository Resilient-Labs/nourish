import FridgeList from './FridgeList.js'
import FridgeMap from './FridgeMap.js'

export default function Fridge({ data }) {
    console.log("data")
    console.log(data)
    return (
        <div>
            < FridgeList data={data} />
            < FridgeMap />
        </div>
    )
}