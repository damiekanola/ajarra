import Image from "next/image";

const steps = [
  {
    title: "Events that fit your budget",
    description:
      "Share your event details, requirements, and budget through our intuitive platform.",
  },
  {
    title: "Professional Coordination.",
    description:
      "Our system matches you with the perfect vendors based on your specific needs.",
  },
  {
    title: "Access to exclusive vendor network.",
    description:
      "Compare vendor profiles, reviews, and portfolios to make informed decisions.",
  },
];

const Services = () => {
  return (
    <section className=" mt-12 md:mx-16 mx-8">
      <h2 className=" font-bold merriweather text-xl md:text-3xl mb-4 text-center">
        Comprehensive Event Solutions
      </h2>
      <p className=" mulish text-lg md:text-2xl text-center">
        From full-service event management to connecting you with the perfect
        vendors, weve got all your event needs covered.
      </p>

      <article
        className={`flex md:flex-row flex-col-reverse items-center gap-20 justify-between my-10`}
      >
        <div className=" space-y-4 w-fit flex-1">
          <ul className=" space-y-4">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className=" border-b  space-y-4 pb-4 border-[#D2D2D2]"
              >
                <h4 className=" font-bold text-2xl merriweather">
                  {step.title}
                </h4>
                <p className=" font-light mulich">{step.description}</p>
              </li>
            ))}
          </ul>

          <button className=" bg-[#5E2D1F] text-white rounded-3xl flex items-center justify-center px-5 py-3">
            Get Started
          </button>
        </div>
        <div className=" flex-1 relative">
          <div className=" absolute inset-0 z-0">
            <Image src={"/elipse.svg"} alt="elipse" width={600} height={600} className=" z-0"/>
          </div>
          <Image src={"/solutions.png"} alt="elipse" width={600} height={300} className=" relative z-20" />
        </div>
      </article>
    </section>
  );
};

export default Services;
