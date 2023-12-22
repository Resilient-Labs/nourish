import fridge1 from "../images/fridge1.webp"

export default function About() {
  return (
    <div className="bg-gray-100 py-24">
      <div className="container mx-auto px-48 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-10 mb-8">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We are committed to cultivating a resilient and interconnected
            community through grassroots efforts to address food insecurity. At
            the heart of our initiative are community fridges—accessible,
            community-driven spaces stocked with fresh, free food for those in
            need.
          </p>
        </div>

        <div className="lg:w-1/2">
          <img
            src={fridge1}
            alt="people gathering around community fridge"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  )
}
