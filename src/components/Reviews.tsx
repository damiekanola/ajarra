import Review from "./Review";


const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    imgSrc: "/sarah.jpg",
    role: "Event Director, TechCorp",
    review:
      "Ajarra transformed our annual conference planning process. The vendor connections saved us countless hours of research and negotiations.",
  },
  {
    id: 2,
    name: "Daniel Isaac",
    imgSrc: "/daniel.png",
    role: "Marketing Manager, Global Retail",
    review:
      "The end-to-end event management services exceeded our expectations. Every detail was handled professionally.",
  },
  {
    id: 3,
    name: "Daniel Isaac",
    imgSrc: "/samuel.png",
    role: "Marketing Manager, Global Retail",
    review:
      "The end-to-end event management services exceeded our expectations. Every detail was handled professionally.",
  },
];

const Reviews = () => {
  return (
    <section className=" p-6 md:p-10 space-y-6 mt-7">
      <header className=" text-center space-y-5">
        <h2 className=" font-bold text-3xl">Over 1000+ people trust us</h2>
        <p className=" text-xl md:w-4/6 mx-auto">
          Dont just take our word for it. Heres what businesses and vendors have
          to say about Ajarra.
        </p>
      </header>
    
        <div className="flex flex-col lg:flex-row items-center justify-between md:gap-10 gap-3">
          {reviews.map((review) => (
            <Review
              key={review.id}
              name={review.name}
              review={review.review}
              role={review.role}
              img={review.imgSrc}
            />
          ))}
        </div>
    </section>
  );
};

export default Reviews;
