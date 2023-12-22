import About from '../components/About'
import Footer from '../components/Footer'
import Fridge from '../components/Fridge'
import GetInvolved from '../components/GetInvolved'
import Hero from '../components/Hero'
import Initiatives from '../components/Initiatives'
import Navbar from '../components/Navbar'

export default function Home() {
  const fridgeData = [// figure out how to fetch that data. For now i cant fetch it until backend makes the endpoint 
    {
      fridgeName: "Fridge name 1",
      key: 1,
      //add: longitude and latitude need to be added to schema 
      //add: google maps url for directions
      //how do i fetch my data ? Backend making the endpoint , the way this is making a request
      fridgeLocation: {
        address: "street address 1", //ADD
        cityState: "",
        zipCode: "",
        long: "-75.174741",//ADD
        lat: "39.933026",//ADD
        url: ""//ADD
      },
      fridgeImage: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1428990738.1703065310&semt=sph",//ADD
      fridgeContact: {
        phoneNumber: "",
        email: "",
        volunteerURL: "",
        donateURL: ""
      }

    },
    {
      fridgeName: "East Falls Community Fridge",
      //add: longitude and latitude need to be added to schema 
      //add: google maps url for directions -> geo location
      //based off what is on my mockup this is what i need. this is muy shcema. i can update my structure 
      //how do i fetch my data 
      key: 2,
      fridgeLocation: {
        address: "street address 2",
        cityState: "Philiedelphia, PA",
        zipCode: "19129",
        long: "-75.14716981234415",
        lat: "39.96391256593655",
        url: ""
      },
      fridgeImage: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1428990738.1703065310&semt=sph",//ADD
      fridgeContact: {
        phoneNumber: "",
        email: "",
        volunteerURL: "",
        donateURL: ""
      }

    },
    // Add more data as needed
    {
      fridgeName: "Ronnie Vega Community Fridge",
      //add: longitude and latitude need to be added to schema 
      //add: google maps url for directions
      //how do i fetch my data 
      fridgeLocation: {
        address: "street address 3",
        cityState: "PA",
        zipCode: "19104",
        long: "-75.15233672748722",
        lat: "39.958458569206655",
        url: ""

      },
      fridgeImage: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1428990738.1703065310&semt=sph",//ADD
      fridgeContact: {
        phoneNumber: "",
        email: "",
        volunteerURL: "",
        donateURL: ""
      }

    }
  ];
  
  return (
    <div>
      < Navbar />
      < Hero />
      < Fridge data={fridgeData} />
      < About />
      < Initiatives />
      < GetInvolved />
      < Footer />
    </div>
  )
}
