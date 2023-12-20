export default function FridgeCard({data}) {
  console.log("FridgeCard data :")
  console.log(data)

  console.log(data.fridgeName)
  return (
    <div className='card'>
      <img src={data.fridgeImage}/>
      <p>{data.fridgeName}</p>
      <p>{data.fridgeLocation.address}</p>
      <button><a href={data.fridgeLocation.url}>Directions</a></button>
    </div>
  )
}


