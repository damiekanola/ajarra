import Image from "next/image";


const App = () => {
  return (
    <section className=" bg-[#CDBEBA] flex flex-col-reverse md:flex-row px-10 py-10 md:px-20 lg:py-0 items-center gap-7">
      <div className=" flex-1 space-y-2 ">
        <h2 className=" font-bold text-4xl">
          Ready to Transform Your Event Experience?
        </h2>
        <p className=" text-xl">
          Join thousands of businesses and vendors on our platform and take your
          events to the next level. Download AJARRA on Google Play or the App
          Store.
        </p>
        <div className=" flex gap-5">
          <Image
            src={"/apple.svg"}
            alt="Download it on the App Store"
            width={120}
            height={50}
          />
          <Image
            src={"/playstore.svg"}
            alt="Download it on the PlayStore"
            width={120}
            height={50}
          />
        </div>
      </div>
      <Image
        src={"/group.svg"}
        alt="group"
        width={200}
        height={200}
        className=" flex-1 h-full w-full"
      />
    </section>
  );
};

export default App;
