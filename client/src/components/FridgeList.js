"use client"
import { Card, Button } from 'flowbite-react';
import React from 'react'

export default function FridgeList({ allFridges }) {
    return (
        <div className="leaflet-container-list">
            <div>
                {allFridges.fridges.map((item, index) => (
                    <Card className="max-w-sm m-6" imgSrc={item.fridgeIMG ? item.fridgeIMG : item.pantryIMG} horizontal>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                    </h2>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <i className="fas fa-map-marker-alt pr-2" style={{ color: "#f17eb8" }}></i>
                        {item.location.address}, { }
                        { item.location.cityState}
                    </p>
                    <Button href={item.location.directionsURL} size="sm"
                        className="bg-pink-400 hover:bg-pink-500">
                            Directions  
                    </Button>
                    <Button href="#" size="sm"
                        className="bg-pink-400 hover:bg-pink-500">
                            Learn More
                    </Button>
                </Card>
                ))}
            </div>
        </div>
    );
}


// chatgpt card ********************************
{/* <Card className="max-w-sm m-6" key={index}>
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {fridge.name}
    </h2>
    {/* Render other fridge details here */}
// </Card> }

//**************************************************** */


//                     <Card className="max-w-sm m-6" imgSrc={item.fridgeImage} horizontal>
//                         <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                             {item.fridgeName}
//                             {/* South Philly Community Fridge */}
//                         </h2>
//                         <p className="font-normal text-gray-700 dark:text-gray-400">
//                             <i className="fas fa-map-marker-alt pr-2" style={{ color: "#f17eb8" }}></i>
//                             {item.fridgeLocation.address}
//                         </p>
//                         <Button href="#" size="sm"
//                             className="bg-pink-400 hover:bg-pink-500">
//                             Directions
//                         </Button>
//                     </Card>


//*****************DRAFT 4 configuring data from mongoDB***************


// export default function FridgeList() {
//     const [myFridges, setFridges] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         const fetchFridges = async () => {
//             try {
//                 const response = await fetch(`http://localhost:3000/getAllFridges`)
//                 console.log(response)
//                 const data = await response.json();
//                 setFridges(data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//         fetchFridges();
//     }, []);
//     // ... inside the ReportCard component
//     if (isLoading) {
//         return <p>Loading fridge list data...</p>;
//     }
//     if (error) {
//         return <p>Error fetching data: {error.message}</p>;
//     }
//     console.log(myFridges)
//     return (
//         <div className="leaflet-container-list">
//             <div>
//                 <h1 className="text-2xl font-bold text-center pb-2"> Philidelphia Community Fridges</h1>
//                 {myFridges.fridges.map((item, index) => (
//                     // item refers to object holding all keys and values 
//                     // <FridgeCard data={item} />
//                     <Card className="max-w-sm m-6" >
//                         <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" key={index}>
//                             {item}
//                         </h2>
//                         <p className="font-normal text-gray-700 dark:text-gray-400">
//                             <i className="fas fa-map-marker-alt pr-2" style={{ color: "#f17eb8" }}></i>
//                             {item.fridgeLocation.address}
//                         </p>
//                         <Button href="#" size="sm"
//                             className="bg-pink-400 hover:bg-pink-500">
//                             Directions
//                         </Button>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     )
// }

//*************************END OF DRAFT 4 */






// export default function FridgeProfile() {
//     const [myFridge, setFridge] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const { userId } = useParams();
//     useEffect(() => {
//         const fetchFridge = async () => {
//             try {
//                 const response = await fetch(`http://localhost:3000/fridgeProfile/${userId}`)
//                 console.log(response)
//                 const data = await response.json();
//                 setFridge(data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//         fetchFridge();
//     }, []);
//     // ... inside the ReportCard component
//     if (isLoading) {
//         return <p>Loading student data...</p>;
//     }
//     if (error) {
//         return <p>Error fetching data: {error.message}</p>;
//     }
//     //combine variable and obj in db for efficiency
//     const fridgeObj = myFridge.fridge
//     return (
//         <div className="fridgePage--parent">
//             <div className="fridgePage--left">
//                 <div className="fridgePage--status">
//                     <h1><a href={fridgeObj.contact.siteURL}>{fridgeObj.name}</a> <span className="fridgePage--community">by {myFridge.fridge.community}</span></h1>
//                     <p>{fridgeObj.status} <span>🟢</span></p>
//                 </div>
//                 <div className="fridgePage--about">
//                     <h2>Address</h2>
//                     <p>{fridgeObj.location.address} {fridgeObj.location.zipCode}</p>
//                     <h2>About this fridge</h2>
//                     <p>If following is empty, there is nothing in the database yet: {fridgeObj.description}</p>
//                     <div className='socialsContainer'>
//                         <a href={`mailto:${fridgeObj.contact.email}`} target="_blank"><img className='social-icons' src='../Icons/icons8-email-50.png' /></a>
//                         <a href={fridgeObj.contact.siteURL}><img className='social-icons' src='../Icons/icons8-website-50.png' /></a>
//                         <a href={fridgeObj.contact.instagramURL}><img className='social-icons' src='../Icons/icons8-instagram-50.png' /></a>
//                         <a href={fridgeObj.donations.donationURL}><img className='social-icons' src='../Icons/icons8-coins-50.png' /></a>
//                     </div>
//                     <h3>Accepts</h3>
//                     <ul>
//                         {fridgeObj.donations.allowed.map((item, index) =>
//                             <li key={index}>{item}</li>
//                         )}
//                     </ul>
//                     <h3>Does not accept</h3>
//                     <ul>
//                         {fridgeObj.donations.notAllowed.map((item, index) => (
//                             <li key={index}>{item}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             <div className="fridgePage--right">
//                 <img src={fridgeObj.profileIMG} />
//                 <p>If no image in this area, it is not in DB yet</p>
//             </div>
//         </div>
//     )
// }





// //********************COPY OF ORIGINAL CODE PRIOR TO CONNECTING TO BACKEND **************


// export default function FridgeList({ data }) {
//     console.log("FridgeList data :")
//     console.log(data)
//     return (
//         <div className="leaflet-container-list">
//             <div>
//                 <h1 className="text-2xl font-bold text-center pb-2"> Philidelphia Community Fridges</h1>
//                 {data.map((item, index) => (
//                     // item refers to object holding all keys and values 
//                     // <FridgeCard data={item} />
//                     <Card className="max-w-sm m-6" imgSrc={item.fridgeImage} horizontal>
//                         <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                             {item.fridgeName}
//                             {/* South Philly Community Fridge */}
//                         </h2>
//                         <p className="font-normal text-gray-700 dark:text-gray-400">
//                             <i className="fas fa-map-marker-alt pr-2" style={{ color: "#f17eb8" }}></i>
//                             {item.fridgeLocation.address}
//                         </p>
//                         <Button href="#" size="sm"
//                             className="bg-pink-400 hover:bg-pink-500">
//                             Directions
//                         </Button>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     )
// }

// //*************************************END OF OG CODE PRIOR TO BACKEND  */