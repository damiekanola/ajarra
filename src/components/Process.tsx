import Image from "next/image";
import ProcessGroup from "./ProcessGroup";

  const plannerSteps = [
    {
      title: "Define Your Event",
      description: "Share your event details, requirements, and budget through our intuitive platform.",
    },
    {
      title: "Get Matched",
      description: "Our system matches you with the perfect vendors based on your specific needs.",
    },
    {
      title: "Review & Select",
      description: "Compare vendor profiles, reviews, and portfolios to make informed decisions.",
    },
    {
      title: "Coordinate & Execute",
      description: "Manage all communications and logistics through our centralized platform.",
    },
  ];
  const vendorSteps = [
    {
      title: "Define Your Event",
      description: "Share your event details, requirements, and budget through our intuitive platform.",
    },
    {
      title: "Get Matched",
      description: "Our system matches you with the perfect vendors based on your specific needs.",
    },
    {
      title: "Review & Select",
      description: "Compare vendor profiles, reviews, and portfolios to make informed decisions.",
    },
    {
      title: "Coordinate & Execute",
      description: "Manage all communications and logistics through our centralized platform.",
    },
];
  
const Process = () => {
  return (
    <section className=" bg-[#F9F4F1] px-10 py-5 space-y-12">
      <header className=" text-center space-y-3">
        <h2 className=" merriweather font-bold text-3xl">How It Works</h2>
        <p className=" mulish">
          A simple, streamlined process for both event planners and vendors.
        </p>
      </header>

          <ProcessGroup title="Planners" imageSrc="/planners.jpg" steps={plannerSteps} buttonText="Plan Your Event" />
           <ProcessGroup title="Vendors" imageSrc="/vendors.jpg" steps={vendorSteps} buttonText="Become a Vendor" reverse />
   
    </section>
  );
};

export default Process;
