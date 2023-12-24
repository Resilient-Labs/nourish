import React from 'react';
import FridgeList from './FridgeList.js';
import FridgeMap from './FridgeMap.js';

export default function Fridge({ data }) {
    return (
        <div className="flex p-12 py-24">
            <div style={{ flex: 1, marginRight: '20px' }}>
              <p>Fridge list here</p>
                <FridgeList data={data} />
            </div>
            <div style={{ flex: 1 }}>
              <p>Fridge map here</p>
                <FridgeMap />
            </div>
        </div>
    );
}
