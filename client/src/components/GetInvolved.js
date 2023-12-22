import fridge2 from '../images/fridge2.jpg';
import fridge3 from '../images/fridge3.webp';

export default function GetInvolved() {
  return (
    <div className="bg-gray-100 py-24">
      <div className="container mx-auto px-48">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div>
            <img
              src={fridge2}
              alt="Germantown fridge"
              className="rounded-lg shadow-md max-w-full h-auto"
              style={{ maxHeight: '400px' }}
            />
          </div>

          <div>
            <img
              src={fridge3}
              alt="volunteers stocking fridge"
              className="rounded-lg shadow-md max-w-full h-auto"
              style={{ maxHeight: '400px' }}
            />
          </div>

          <div>
            <div>
              <h4 className="text-2xl font-bold mb-4">Donate</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Help keep our fridges well-stocked and maintained by contributing to our fridge fund.
              </p>
              <button type="button" className="mt-4 bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <div>
              <h4 className="text-2xl font-bold mb-4">Volunteer</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                There's always room for more volunteers. Fulfill food requests, tidy up a fridge in need, or drop off a fresh batch of groceries!
              </p>
              <button type="button" className="mt-4 bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
