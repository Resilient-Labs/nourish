import fridge2 from '../images/fridge2.jpg';
import fridge3 from '../images/fridge3.webp';

export default function GetInvolved() {
  return (
    <section className="text-gray-600 body-font bg-svg-half">
      <div className="container px-5 lg:px-20 py-24 mx-auto">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 text-center">Get Involved</h2>
        <div className="flex flex-wrap -mx-4 text-center">

          <div className="sm:w-2/5 mb-10 mr-4 px-4 mx-auto">
            <div className="rounded-lg h-50 overflow-hidden">
              <img
                src={fridge2}
                alt="Germantown fridge"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Donate</h2>
            <p className="mb-6 font-light text-gray-500 text-xl">Help keep our fridges well-stocked and maintained by contributing to fridge funds.</p>
            <button className="flex mx-auto mt-6 font-semibold text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Learn More</button>
          </div>

          <div className="sm:w-2/5 mb-6 ml-4 px-4 mx-auto">
            <div className="rounded-lg h-50 overflow-hidden">
              <img
                src={fridge3}
                alt="Germantown fridge"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Volunteer</h2>
            <p className="mb-6 font-light text-gray-500 text-xl">Fulfill food requests, tidy up a fridge in need, or drop off a fresh batch of groceries!</p>
            <button className="flex mx-auto mt-6 font-semibold text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Learn More</button>
          </div>

        </div>
      </div>
    </section>
  );
}
