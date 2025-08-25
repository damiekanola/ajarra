import Image from "next/image";

const Review = () => {
  return (
    <article className=" mt-6 flex items-center relative w-fit">
      <Image
        src={"/sarah.jpg"}
        alt="sarah"
        width={120}
        height={120}
        className=" rounded-[100%] aspect-square object-cover bg-[#F9F4F1] p-1.5 -mr-12 z-20"
      />
      <div className=" space-y-3 bg-[#F9F4F1] rounded-3xl p-7 pl-20">
        <p className=" font-light">
          Ajarra transformed our annual conference planning process. The vendor
          connections saved us countless hours of research and negotiations.
        </p>
        <div className="space-y-1">
          <p className=" font-bold  text-sm ">Sarah Johnson</p>
          <p className=" font-light text-xs">Event Director, TechCorp</p>
        </div>
      </div>
    </article>
  );
};

export default Review;
