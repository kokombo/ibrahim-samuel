import { technologies } from "../data/data";
import { BiRightArrow } from "react-icons/bi";
import { Bounce } from "react-awesome-reveal";
const Techs = () => {
  return (
    <Bounce triggerOnce>
      <section className="mt-28 lg:mt-40 flex flex-col gap-5 slide-right">
        <h1 className="font-bold text-secondary text-4xl sm:text-6xl leading-12">
          Technologies
        </h1>

        <p className="text-lightest-slate text-base leading-7 md:leading-8">
          Here are a few technologies i've been working with recently:
        </p>

        <div className="flex gap-20 flex-wrap mt-10">
          {technologies.map((item, index) => {
            const { icon, name, color } = item;
            return (
              <div key={index} className="flex items-center gap-3">
                <BiRightArrow className="text-lightest-slate" />
                <div className="flex items-center gap-1">
                  <span className={`text-${color} text-2xl`}>{icon}</span>
                  <span className="text-primary text-1xl">{name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Bounce>
  );
};

export default Techs;
