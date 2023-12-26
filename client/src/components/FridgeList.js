"use client"

import { Card, Button } from "flowbite-react"
import FridgeCard from "./FridgeCard.js"
import React from "react"

// import {Button} from 'flowbite-react';

export default function FridgeList({ data }) {
  console.log("FridgeList data :")
  console.log(data)
  return (
    <div className="leaflet-container-list">
      <div>
        <h1 className="text-2xl font-bold text-center pb-2">
          {" "}
          Philidelphia Community Fridges
        </h1>
        {data.map((item, index) => (
          // item refers to object holding all keys and values
          // <FridgeCard data={item} />
          <Card className="max-w-sm m-6" imgSrc={item.fridgeImage} horizontal>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.fridgeName}
              {/* South Philly Community Fridge */}
            </h2>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <i
                className="fas fa-map-marker-alt pr-2"
                style={{ color: "#f17eb8" }}
              ></i>
              {item.fridgeLocation.address}
            </p>
            <Button
              href="#"
              size="sm"
              className="bg-pink-400 hover:bg-pink-500"
            >
              Directions
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
