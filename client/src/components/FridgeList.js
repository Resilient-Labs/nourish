import FridgeCard from './FridgeCard.js'

export default function FridgeList({data}) {
    console.log("FridgeList data :")
    console.log(data)
    return (
        <div className='card-list'>
        
                {data.map((item, index) => (
                    // item refers to object holding all keys and values 
                    <FridgeCard data={item} />
                ))}
                
        </div>
    )
}

