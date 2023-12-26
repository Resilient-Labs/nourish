export default function Quote() {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-24 pb-10">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure>
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            “The greatness of a community is most accurately measured by the compassionate actions of its members.”
          </blockquote>
          <figcaption>
            <div className="mt-4 flex items-center justify-center space-x-3 font-thin text-base text-gray-500">
              Coretta Scott King
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
