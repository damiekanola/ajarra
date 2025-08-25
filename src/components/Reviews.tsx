import Review from "./Review";

const Reviews = () => {
  return (
    <section className=" p-10 space-y-6 mt-7">
      <header className=" text-center space-y-5">
        <h2 className=" font-bold text-3xl">Over 1000+ people trust us</h2>
        <p className=" text-xl w-4/6 mx-auto">
          Dont just take our word for it. Heres what businesses and vendors have
          to say about Ajarra.
        </p>
      </header>
      <div className=" overflow-hidden flex items-center justify-between gap-10">
        <Review />
        <Review />
        <Review />
          </div>
          
          <div>
              
              
          </div>
    </section>
  );
};

export default Reviews;
