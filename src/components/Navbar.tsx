import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-6 w-[95%] mx-auto">
      <Image src={"/ajarra.svg"} alt="logo" width={110} height={50} />
      <ul className=" flex items-center mulish justify-between gap-5">
        <li>Home</li>
        <li>Our Services</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className=" flex items-center justify-between gap-5 font-bold">
        <button className=" text-[#572514] px-6 py-3 border border-[#572514] rounded-3xl flex items-center justify-center">
          Become a Vendor
        </button>
        <button className=" text-white bg-[#572514] rounded-3xl px-6 py-3 flex items-center justify-center">
          Plan your Event
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
