import Review from "./Review";

const Reviews = () => {
  return (
    <section className=" p-10 space-y-6">
      <header className=" text-center space-y-5">
        <h2 className=" font-bold text-3xl">Over 1000+ people trust us</h2>
        <p className=" text-xl">
          Dont just take our word for it. Heres what businesses and vendors have
          to say about Ajarra.
        </p>
      </header>
      <div className=" overflow-hidden">
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
