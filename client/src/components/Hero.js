import sparkles from "../images/sparkles.png"

export default function Hero() {
  return (
    <section className="bg-svg py-12 lg:py-16 xl:py-20">
      <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-8">
        <h1 className="relative mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Nourish
        </h1>
        <img
          className="absolute bottom-2/3 right-1/3 w-28 h-28"
          src={sparkles}
          alt="sparkles"
        />
        <p className="mb-1 font-light text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          A network of Philly community fridges
        </p>
        <p className="mb-8 font-light text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          Maintained by the community, for the community
        </p>
      </div>
    </section>
  )
}
