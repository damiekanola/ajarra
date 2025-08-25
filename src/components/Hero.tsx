import Image from "next/image";

const Hero = () => {
  return (
    <section className=" space-y-12">
      <div className=" flex items-center w-[95%] mx-auto gap-8 justify-between">
        <div className=" space-y-6">
          <h2 className=" text-3xl break-words font-bold merriweather">
            Seamless Event Management & Vendor Connections
          </h2>
          <p className=" text-lg mulish break-words">
            Your one-stop platform for planning events and finding premium
            vendors. Streamline your event planning process from start to
            finish.
          </p>
          <div className=" flex items-center gap-3 text-black">
            <button className=" bg-[#D9B8A3] p-4 rounded-3xl">
              Get Started
            </button>
            <button className=" border-[#F9F4F1] border bg-[#F3E9E2] p-4 rounded-3xl">
              Get The App
            </button>
          </div>
        </div>
        <div>
          <div className=" overflow-hidden rounded-t-full border w-[400px] h-[500px]">
            <Image
              src={"/center.jpg"}
              alt="center"
              width={400}
              height={600}
              className=" p-4 rounded-t-full h-full w-full object-cover"
            />
          </div>
        </div>

        <div className=" space-y-4">
          <div className="rounded-4xl overflow-hidden border border-[#424142]">
            <Image src={"/hero1.jpg"} alt="hero" width={200} height={250} />
          </div>
          <div className="rounded-4xl overflow-hidden border border-[#424142]">
            <Image src={"/hero3.jpg"} alt="hero" width={200} height={250} />
          </div>
          <div className="rounded-4xl overflow-hidden border border-[#424142]">
            <Image src={"/hero2.jpg"} alt="hero" width={200} height={250} />
          </div>
        </div>
      </div>

      <div className=" bg-[#F9F4F1]">
        <ul className=" flex items-center justify-between mulish py-4 px-8 text-black">
          <li>WEDDINGS</li>
          <li>CONFERENCES</li>
          <li>BIRTHDAYS</li>
          <li>PROPOSALS</li>
          <li>BRIDAL SHOWER</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
