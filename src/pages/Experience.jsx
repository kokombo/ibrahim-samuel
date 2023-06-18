import React from "react";
import { experiences } from "../data/data";
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";

const Experience = () => {
  const [value, setValue] = useState(0);
  const [jobs] = useState(experiences);

  const { title, company, start, finish, duties, location } = jobs[value];

  return (
    <section className="bg-navy h-full w-full px-6 py-20 sm:py-14 sm:px-10 md:px-28 lg:px-36 xl:px-44 text-focus-in">
      <div className="flex flex-col gap-20 lg:mt-10">
        <div>
          <h1 className="font-bold text-secondary text-4xl sm:text-6xl leading-12">
            Where I've Worked
          </h1>
          <hr className="mt-6" />
        </div>

        <div className="flex md:gap-20 gap-5">
          <div className="flex flex-col gap-10 items-start">
            {jobs.map((item, index) => {
              const { company, id } = item;

              return (
                <button
                  key={id}
                  className={`${
                    index === value &&
                    "border-l-4 border-primary bg-slate p-2 opacity-40 w-28"
                  } text-lightest-slate ease-linear duration-200 text-start`}
                  onClick={() => setValue(index)}
                >
                  {company}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-lightest-slate text-xl">
                {title}
                <span className="text-primary"> @ {company}</span>
              </h1>
              <p className="text-lightest-slate text-[10px]">{location}</p>
              <p className="text-primary font-light">
                {start} - {finish}
              </p>
            </div>

            <div className="flex flex-col">
              {duties.map((duty, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-start justify-start gap-2"
                  >
                    <span className="text-primary mt-2">
                      <BiRightArrow />
                    </span>
                    <p className="text-lightest-slate  text-xs sm:text-base leading-7 sm:leading-8 mb-5">
                      {duty}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
