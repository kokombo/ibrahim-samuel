import { Zoom } from "react-awesome-reveal";
import SamuelIbrahim from "../assets/SamuelIbrahim.jpeg";

const About = () => {
  return (
    <Zoom triggerOnce>
      <article className="mt-28 lg:mt-40 flex flex-col lg:flex-row justify-between items-top lg:px-18 gap-5">
        <div className="lg:mr-20 lg:w-2/3">
          <h1 className="font-bold text-secondary text-4xl sm:text-6xl leading-12 ">
            About Me
          </h1>

          <span className="text-lightest-slate flex flex-col mt-10 gap-6 text-xs sm:text-base leading-7 sm:leading-8">
            <p>Good to have you here!</p>
            <p>
              My name is Samuel, and I am an enthusiastic, self-motivated
              software developer passionate about building dynamic user
              experiences. I enjoy working with highly ambitious teams on
              interesting problem-solving projects.
              <span className="text-primary">
                {" "}
                I am currently open to opportunities - interested in working
                with positive people.
              </span>
            </p>

            <p className="italic">
              Huge football fan. “Take me Home, United Road, To the Place I
              belong, To Old Trafford, to see United, Take me Home, United
              Road.”
            </p>

            <p>
              <span className="text-primary">Soft Skills:</span> Critical
              thinking, communication, problem-solving, proactiveness,
              collaboration, team spirit, continuous development, growth drive,
              teamwork, critical thinking, and attention to detail.
            </p>
          </span>
        </div>

        <div className="mt-10 h-96 w-80 lg:w-1/3 self-center">
          <img
            src={SamuelIbrahim}
            alt="samuel"
            className="h-full w-full opacity-60"
          />
        </div>
      </article>
    </Zoom>
  );
};

export default About;
