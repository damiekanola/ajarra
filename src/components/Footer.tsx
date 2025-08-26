import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-[#572514] bg-[url('/logo.svg')] bg-bottom bg-no-repeat  text-white mulish">
      <div className="px-8 pb-5 md:px-12 pt-12 flex flex-col md:flex-row items-start justify-between gap-12 border-b border-[#606060]">
        <div className=" flex-1 space-y-10">
          <p className=" font-light">
            <span className=" font-bold">Ajarra</span> has revolutionized the
            way businesses approach event planning and vendor management. We
            bridge the gap between event organizers and service providers,
            creating seamless connections that drive exceptional experiences.
          </p>
          <div className=" space-y-3">
            <p> Download AJARRA on Google Play or the App Store.</p>
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
        </div>
        <div className=" flex flex-col md:flex-row justify-between items-start flex-1 gap-10">
          <div className=" space-y-5">
            <h4 className=" text-[#F0D0B3] font-bold text-xl">Company</h4>

            <ul className=" space-y-3 mulish">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Services</li>
              <li>Vendors</li>
            </ul>
          </div>
          <div className=" space-y-5">
            <h4 className=" text-[#F0D0B3] font-bold text-xl mulish">Terms</h4>

            <ul className=" space-y-3 mulish">
              <li>Terms of Service</li>
              <li>Policy</li>
            </ul>
          </div>
          <div className=" space-y-5">
            <h4 className=" text-[#F0D0B3] font-bold text-xl mulish">
              Information
            </h4>

            <ul className=" space-y-3">
              <li>
                Have a question? Give us a call. we’d love to hear from you.
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className=" space-y-5 flex-1">
          <h4 className=" text-[#F0D0B3] font-bold text-xl mulish">
            Get in Touch
          </h4>
          <p>
            Get access to exclusive deals and discounts when you sign up for our
            news letter.
          </p>

          <div className=" space-y-3">
            <label htmlFor="" className=" text-white font-semibold text-lg">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Your email"
              className=" bg-white p-3 rounded-full w-full placeholder:text-gray-300"
            />
            <button className=" bg-[#F0D0B3] p-3 w-full rounded-full text-black">
              Subscribe
            </button>
            <div className=" flex gap-2 items-center justify-between">
              <Image
                src={"/facebook.svg"}
                alt="facebook"
                width={32}
                height={32}
              />
              <Image
                src={"/tiktok.svg"}
                alt="tiktok"
                width={32}
                height={32}
              />
              <Image
                src={"/instagram.svg"}
                alt="instagram"
                width={32}
                height={32}
              />{" "}
              <Image
                src={"/twitter.svg"}
                alt="twitter"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" p-8">
        <p className=" font-light text-sm">
          © Copyright 2025, All Rights Reserved by Ajarra
        </p>
      </div>
    </footer>
  );
};

export default Footer;
