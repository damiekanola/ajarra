import Image from "next/image";

interface ReviewProps {
  name: string;
  review: string;
  role: string;
  img: string;
}

const Review = ({ name, review, role, img }: ReviewProps) => {
  return (
    <article className=" mt-6 flex items-center relative w-full">
      <Image
        src={img}
        alt="sarah"
        width={60}
        height={80}
        className=" rounded-[100%] aspect-square object-cover bg-[#F9F4F1] p-1.5 -mr-12 z-20"
      />
      <div className=" space-y-3 bg-[#F9F4F1] rounded-3xl p-3 pl-14">
        <p className=" font-light text-xs md:text-base">{review}</p>
        <div className="space-y-1">
          <p className=" font-[800] text-sm ">{name}</p>
          <p className=" font-light text-xs">{role}</p>
        </div>
      </div>
    </article>
  );
};

export default Review;
