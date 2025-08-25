"use client";
import { useState } from "react";
import Image from "next/image";

import React from "react";

const questions = [
  {
    id: 1,
    question: " What types of events do you handle?",
    answer:
      "We specialize in delivering exceptional services for all events from conferences and product launches to team-building experiences, weddings, birthdays, and other celebrations. Whether its anintimate gathering of 10 or a large-scale event with over 10,000 attendees, we handle it with precision and creativity.",
  },
  {
    id: 2,
    question: "Is there customer support available?",
    answer:
      "We specialize in delivering exceptional services for all events from conferences and product launches to team-building experiences, weddings, birthdays, and other celebrations. Whether its anintimate gathering of 10 or a large-scale event with over 10,000 attendees, we handle it with precision and creativity.",
  },
  {
    id: 3,
    question: "How do you handle event changes or cancellations?",
    answer:
      "We specialize in delivering exceptional services for all events from conferences and product launches to team-building experiences, weddings, birthdays, and other celebrations. Whether its anintimate gathering of 10 or a large-scale event with over 10,000 attendees, we handle it with precision and creativity.",
  },
  {
    id: 4,
    question: "How do I get matched with events?",
    answer:
      "We specialize in delivering exceptional services for all events from conferences and product launches to team-building experiences, weddings, birthdays, and other celebrations. Whether its anintimate gathering of 10 or a large-scale event with over 10,000 attendees, we handle it with precision and creativity.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(1);
  return (
    <section className=" space-y-8 my-12">
      <header className=" text-center space-y-6">
        <h2 className=" font-bold text-3xl">Frequently Asked Questions</h2>
        <p className=" text-xl">
          Get answers to common questions about Ajara event maarket place.
        </p>
      </header>

      <article className=" space-y-5 w-[70%] mx-auto">
        {questions.map((question) => (
          <div
            key={question.id}
            className={` bg-[#F3E9E2] space-y-3 px-5 py-3 ${
              active === question.id
                ? "bg-[#FBF8F6] rounded-3xl"
                : "bg-[#F3E9E2] rounded-full"
            }`}
            onClick={() => setActive(question.id)}
          >
            <div className=" flex justify-between items-center">
              <p className=" font-semibold text-xl">{question.question}</p>
              <Image
                src={`${active === question.id ? "/close.svg" : "/add.svg"}`}
                alt="add"
                width={24}
                height={24}
                className=" bg-white p-1 rounded-full"
              />
            </div>
            <p
              className={`font-light ${
                active === question.id ? "block" : "hidden"
              }`}
            >
              {question.answer}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default FAQ;
