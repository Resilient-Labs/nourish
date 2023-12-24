import food from '../images/food.gif';
import community from '../images/community.gif';
import volunteer from '../images/volunteer.gif';

export default function About2() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 lg:h-16 lg:w-16">
              <img
                src={food}
                alt="groceries icon"
              />
            </div>
            <h3 className="mb-2 text-2xl font-bold">Food Accessibility</h3>
            <p className="font-light text-gray-500 text-lg text-center">We strive to eliminate barriers to accessing fresh, healthy food by mapping out community fridge locations and ensuring up-to-date information is readily available to all.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 lg:h-16 lg:w-16">
              <img
                src={community}
                alt="icon of two people waving"
              />
            </div>
            <h3 className="mb-2 text-2xl font-bold">Community Engagement</h3>
            <p className="font-light text-gray-500 text-lg text-center">Building a sense of belonging, we facilitate communication through forums and collaborative projects, fostering connections amongst volunteers, donors, and beneficiaries.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 lg:h-16 lg:w-16">
              <img
                src={volunteer}
                alt="icon of four hands holding heart"
              />
            </div>
            <h3 className="mb-2 text-2xl font-bold">Volunteer Mobilization</h3>
            <p className="font-light text-gray-500 text-lg text-center">We connect passionate volunteers with opportunities to contribute their time and skills to support community fridge initiatives, making a tangible difference in the lives of those in need.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
