import Image from "next/image";

interface Step {
  title: string;
  description: string;
}

interface ProcessGroupProps {
  title: string;
  imageSrc: string;
  steps: Step[];
  buttonText: string;
  reverse?: boolean; // flip image/text
}

const ProcessGroup = ({
  title,
  imageSrc,
  steps,
  buttonText,
  reverse,
}: ProcessGroupProps) => {
  return (
    <article className={`flex flex-col md:flex-row items-center gap-20 justify-between ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className=" relative flex-1">
        <Image
          src={"/pattern.svg"}
          alt="pattern"
          width={150}
          height={200}
          className={`absolute top-0 ${reverse && " right-20"}`}
        />
        <div className="relative md:h-[500px] md:w-[420px] z-20 h-[300px] w-[280px]">
          <Image
            src={imageSrc}
            alt="planners"
            className=" rounded-full border py-6 px-4 border-[#966727] object-cover h-full w-full"
            fill
          />
        </div>
        <Image
          src={"/pattern.svg"}
          alt="pattern"
          width={150}
          height={200}
          className={`absolute bottom-0 ${ reverse ? "left-0" : "right-10"}`}
        />
      </div>

      <div className=" space-y-4 w-fit flex-1">
        <h3 className=" font-bold text-4xl text-center merriweather">
          For Event {title}
        </h3>
        <div className=" space-y-4 w-fit">
          <ul className=" space-y-4">
            {steps.map((step, idx) => (
              <li key={idx} className=" flex items-start gap-3">
                <Image
                  src={"/bullet.svg"}
                  alt="bullet"
                  width={34}
                  height={24}
                />

                <div className=" border-b  space-y-4 pb-4 border-[#D2D2D2]">
                  <h4 className=" font-bold text-2xl merriweather">
                   {step.title}
                  </h4>
                  <p className=" font-light mulich">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <button className=" bg-[#5E2D1F] text-white rounded-3xl flex items-center justify-center px-5 py-3 ml-10">
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProcessGroup;
