export default function Initiatives() {
  return (
    <div className="py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-24">

        <div className="mb-8">
          <h4 className="text-2xl font-bold mb-4">Food Accessibility</h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            We strive to eliminate barriers to accessing fresh, healthy food by mapping out community fridge locations and ensuring up-to-date information is readily available to all.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-bold mb-4">Community Engagement</h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            Building a sense of belonging, we facilitate communication through forums, events, and collaborative projects, fostering connections amongst volunteers, donors, and beneficiaries.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-bold mb-4">Volunteer Mobilization</h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            We connect passionate volunteers with opportunities to contribute their time and skills to support community fridge initiatives, making a tangible difference in the lives of those in need.
          </p>
        </div>
        
      </div>
    </div>
  )
}
