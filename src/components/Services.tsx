import Image from "next/image";

const Services = () => {
  return (
    <section className=" mt-12 mx-16">
      <h2 className=" font-bold merriweather text-3xl mb-4 text-center">
        Comprehensive Event Solutions
      </h2>
      <p className=" mulish text-2xl text-center">
        From full-service event management to connecting you with the perfect
        vendors, weve got all your event needs covered.
      </p>
      <div className=" flex items-center justify-between my-10">
        <div className=" space-y-4 flex-1 w-fit">
          <article className=" space-y-4 border-b border-[#D2D2D2] pb-4">
            <h3 className=" merriweather font-bold text-2xl">
              Events that fit your budget
            </h3>
            <p className=" font-light mulish text-[#424142]">
              Share your event details, requirements, and budget through our
              intuitive platform
            </p>
          </article>
          <article className=" space-y-4 border-b border-[#D2D2D2] pb-4">
            <h3 className=" merriweather font-bold text-2xl">
              Professional Coordination.
            </h3>
            <p className=" font-light mulish text-[#424142]">
              Our system matches you with the perfect vendors based on your
              specific needs.
            </p>
          </article>
          <article className=" space-y-4 border-b border-[#D2D2D2] pb-4">
            <h3 className=" merriweather font-bold text-2xl">
              Access to exclusive vendor network.
            </h3>
            <p className=" font-light mulish text-[#424142]">
              Compare vendor profiles, reviews, and portfolios to make informed
              decisions.
            </p>
          </article>
        </div>

        <div className=" flex-1">
          <Image src={"/elipse.svg"} alt="elipse" width={300} height={300} />
        </div>
      </div>
    </section>
  );
};

export default Services;
