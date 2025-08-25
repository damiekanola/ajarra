import Image from "next/image";

const App = () => {
  return (
    <section className=" bg-[#CDBEBA] flex px-20 items-center">
      <div className=" flex-1 space-y-2 ">
        <h2 className=" font-bold text-4xl">
          Ready to Transform Your Event Experience?
        </h2>
        <p className=" text-xl">
          Join thousands of businesses and vendors on our platform and take your
          events to the next level. Download AJARRA on Google Play or the App
          Store.
        </p>
      </div>
      <Image src={"/group.svg"} alt="group" width={200} height={200} className=" flex-1" />
    </section>
  );
};

export default App;
