import fridge1 from '../images/fridge1.webp'

export default function About() {
  return (
    <section className="bg-gray-100">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">About Us</h2>
          <p className="mb-6 font-light text-gray-500 text-xl">We are committed to cultivating a resilient and interconnected community through grassroots efforts to address food insecurity. At the heart of our initiative are community fridges—accessible, community-driven spaces stocked with fresh, free food for those in need.</p>
        </div>
        <img className="w-full rounded-lg shadow-md" src={fridge1} alt="dashboard image" />

      </div>
    </section>
  );
}
