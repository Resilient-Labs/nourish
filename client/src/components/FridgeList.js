"use client"
import { Card, Button } from 'flowbite-react';
import React from 'react'

export default function FridgeList({ allFridges }) {

    return (
        <div className="leaflet-container-list">
            <div>
                
                {/* Creates a card for every fridge to display relevant data */}
                {allFridges.fridges.map((item, index) => (
                    <Card className="max-w-sm m-10" imgSrc={item.fridgeIMG ? item.fridgeIMG : item.pantryIMG} horizontal>

                        <h2 className="text-2xl font-bold  text-gray-900 dark:text-white">
                            {item.name}
                        </h2>

                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <i className="fas fa-map-marker-alt pr-2" style={{ color: "#31c48d" }}>
                            </i>
                            {item.location.address}, { }
                            {item.location.cityState}, { } 
                            {item.location.zipCode}
                        </p>

                        <Button href={item.location.directionURL} size="sm" style={{ width: "100%" }} className="bg-green-500 hover:bg-green-600">
                            Directions  
                        </Button>

                        <Button href={`/fridgeprofile/${item._id}`} size="sm" style={{ width: "100%" }} className="bg-green-500 hover:bg-green-600">
                            Learn More
                        </Button>

                    </Card>
                ))}
            </div>
        </div>
    );
}