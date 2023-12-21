import FridgeCard from './FridgeCard.js'
import React from "react"
// import {Button} from 'flowbite-react';



export default function FridgeList({data}) {
    console.log("FridgeList data :")
    console.log(data)
    return (
        <div className="leaflet-container-list">    
            <div className='card-list '>
                {data.map((item, index) => (
                    // item refers to object holding all keys and values 
                    <FridgeCard data={item} />
                ))}
            </div> 
        </div>
    )
}

