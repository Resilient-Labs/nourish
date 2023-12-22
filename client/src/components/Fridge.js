import React from 'react';
import FridgeList from './FridgeList.js';
import FridgeMap from './FridgeMap.js';

export default function Fridge({ data }) {
    return (
        <div className="flex p-12">
            <div style={{ flex: 1, marginRight: '20px' }}>
                <FridgeList data={data} />
            </div>
            <div style={{ flex: 1 }}>
                <FridgeMap data={data} />
            </div>
        </div>
    );
}
