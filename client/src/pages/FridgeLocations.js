import React, {useState, useEffect} from 'react'

export default function FridgeLocations() {
    const [getAllFridges, setGetAllFridges] = useState({ fridges: []});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedZipCode, setSelectedZipCode] = useState(null)
    useEffect(() => {
    const fetchAllFridges = async () => {
        try {
        const response = await fetch(`http://localhost:8000/fridge/getAllFridges`) // req to BE
        const data = await response.json()
        setGetAllFridges(data);
        } catch (error) {
        setError(error);
        } finally {
        setIsLoading(false);
        }
    };
    fetchAllFridges();
    }, []);
    //event listener for user clicking zip code
    const handleZipCodeChange = (event) => {
        setSelectedZipCode(event.target.value)
    }
    // filter fridges displayed based on selected zip
    const filteredFridges = getAllFridges.fridges.filter(
    (fridge) => !selectedZipCode || fridge.location.zipCode === selectedZipCode
    )
    //acts like a catch error
    if (isLoading) {
    return <p>Loading fridge list data...</p>;
    }
    if (error) {
    return <p>Error fetching data: {error.message}</p>;
    }
    return (
        <div>
        <div className="fridgeLanding--page">
            <h1>Fridges and Pantries of Philadelphia</h1>
            <p>Explore the list below or use the zip code filter to locate a nearby fridge!</p>
        <div className="fridgeLanding--zipFilter">
            <label htmlFor="zipCode">Filter by Zip Code:</label>
            <select id="zipCode" onChange={handleZipCodeChange}>
                <option value="">All</option>
                {Array.from(new Set(getAllFridges.fridges.map(fridge => fridge.location.zipCode))) //dynamically get zips from mdb
                .sort((a, b) => a - b) // sort drop down menu items for easy nav
                .map((zip, index) => (
                    <option key={index} value={zip}>{zip}</option>
                ))}
            </select>
        </div>
        <div className="flex-container">
            {filteredFridges &&
            filteredFridges
                .sort((a, b) => a.location.zipCode - b.location.zipCode)
                .sort((a, b) => a.name - b.name)
                .map((item, index) => (
                <div key={index}>
                    <div className="fridgeLanding--container">
                        <h2 className="fridgeLanding--header">{item.name}</h2>
                            <div className="fridgeLanding--text">
                            <h3>{item.location.address} {item.location.zipCode}</h3>
                            <img src={item.fridgeIMG ? item.fridgeIMG : item.pantryIMG} alt={`${item.name} Fridge`} />
                            <p className="fridgeLanding--descrip">{item.description.length > 156 ? `${item.description.slice(0, 156)}...` : item.description}</p>
                            <a className="fridgeLanding--button" href={`/fridgeprofile/${item._id}`}>Learn more</a>
                            </div>
                    </div>
                </div>
                ))}
        </div>
        </div>
        </div>
        );
    }