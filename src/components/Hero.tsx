import Image from "next/image";

const Hero = () => {
  return (
    <section className="space-y-12 ">
      <div className="flex flex-col md:flex-row px-4 items-center justify-between gap-5">
        <div className=" flex flex-col md:flex-row items-center gap-5">
          <div className=" space-y-6 flex-1">
            <h1 className=" text-5xl break-words font-bold merriweather">
              Seamless Event Management & Vendor Connections
            </h1>

            <p className=" text-xl mulish break-words">
              Your one-stop platform for planning events and finding premium
              vendors. Streamline your event planning process from start to
              finish.
            </p>

            <div className=" flex items-stretch gap-3 text-black font-bold text-xs">
              <button className=" flex-1 bg-[#D9B8A3] md:pl-6 md:pr-3 md:py-2 rounded-4xl p-2 flex items-center justify-between gap-3">
                Get Started
                <div className=" bg-[#F3E9E2] rounded-full p-2 flex items-center justify-center">
                  <Image
                    src={"/arrow.svg"}
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </button>
              <button className=" border-[#F9F4F1] md:px-8 md:py-4 border bg-[#F3E9E2] p-4 rounded-4xl flex-1 ">
                Get The App
              </button>
            </div>
          </div>

          <div className=" flex-2 relative">
            <Image
              src={"/hero.png"}
              alt="center"
              width={436}
              height={610}
              priority
              className=" border-[#572514] h-full w-full object-cover"
            />
          </div>
        </div>

        <div className=" hidden md:flex space-y-4 w-full md:w-fit shrink-0 flex-row justify-between item-center md:flex-col">
          <Image
            src={"/hero1.jpg"}
            alt="hero"
            width={200}
            height={262}
            className=" w-[120px] max-w-[200px] h-auto lg:w-[200px] rounded-4xl overflow-hidden object-cover border border-[#424142] "
          />

          <Image
            src={"/hero3.jpg"}
            alt="hero"
            width={200}
            height={262}
            className="  w-[120px] max-w-[200px] h-auto lg:w-[200px]  rounded-4xl  overflow-hidden border border-[#424142] "
          />

          <Image
            src={"/hero2.jpg"}
            alt="hero"
            width={200}
            height={262}
            className="  max-w-[200px] w-[120px] h-auto rounded-4xl lg:w-[200px]  overflow-hidden border border-[#424142] "
          />
        </div>
      </div>

      <div className=" bg-[#F9F4F1]">
        <ul className=" flex items-center gap-6 mulish py-4 px-6 text-black flex-wrap md:justify-between justify-center font-bold">
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
