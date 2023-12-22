import React, {useState, useEffect} from 'react'

import { useParams } from 'react-router-dom'


export default function FridgeProfile() {
        const [myFridge, setFridge] = useState({});
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);
        const { userId } = useParams();
        useEffect(() => {
            const fetchFridge = async () => {
                try {
                const response = await fetch(`http://localhost:8000/fridgeProfile/${userId}`)
                console.log(response)
                const data = await response.json();
                setFridge(data);
                } catch (error) {
                setError(error);
                } finally {
                setIsLoading(false);
                }
            };
            fetchFridge();
        }, []);
        // ... inside the ReportCard component
        if (isLoading) {
            return <p>Loading student data...</p>;
        }
        if (error) {
            return <p>Error fetching data: {error.message}</p>;
        }
        return (
        <div className="fridgePage--parent">
            <div className="fridgePage--left">
                <div className="fridgePage--status">
                    <h1>{myFridge.fridge.name}</h1>
                    <p>Status of Fridge <span>Circle denoting color</span></p>
                </div>
                <div className="fridgePage--about">
                    <h2>Address</h2>
                    <p>{myFridge.fridge.location.address}</p>
                    <h2>About this fridge</h2>
                    <p>Lorem impsum</p>
                    <h3>Dietary</h3>
                    <ol>
                        <li>Pull from database array</li>
                    </ol>
                </div>
            </div>
            <div className="fridgePage--right">
                <img/>
                <p>Fridge</p>
            </div>
        </div>
    )
}
