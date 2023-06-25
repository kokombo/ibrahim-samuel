import React from "react";
import { Button } from "../components";
import SamuelIbrahim from "../assets/SamuelIbrahim.jpeg";
import { technologies } from "../data/data";
import { BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
import { Rotate } from "react-awesome-reveal";

const Home = () => {
  return (
    <section className="bg-navy h-full w-full px-6 py-14 sm:px-10 md:px-28 lg:px-36 xl:px-44">
      <Slide triggerOnce>
        <header className="mt-10 flex flex-col gap-14">
          <div className="flex flex-col gap-10">
            <span className="flex flex-col gap-6 max-w-screen-lg">
              <h1 className="text-primary text-1xl sm:text-4xl md:text-5xl">
                Hi,{" "}
              </h1>
              <h1 className="text-secondary text-4xl sm:text-5xl md:text-7xl font-bold">
                I'm Samuel.
              </h1>
              <h1 className="text-lightest-slate text-3xl sm:text-6xl leading-12 font-bold capitalize">
                Front-End Developer & Software Engineer.
              </h1>
            </span>
            {/*  max-w-screen-lg */}
            <span className="text-focus-in">
              <p className="text-lightest-slate text-xs sm:text-base leading-7 sm:leading-8 max-w-screen-sm">
                I studied Chemical Engineering at the university and worked as a
                technical writer for 2-year, but{" "}
                <span className="text-primary">
                  now focused on building exciting things for the web
                </span>
                . I am excited to take on new and even the most difficult
                challenges, as I have always thrived as a problem solver.
                <span className="text-primary">
                  {" "}
                  I BUILD WEB APPLICATIONS, ensuring best practices
                </span>
                . I am happy to connect with you!
              </p>
            </span>
          </div>

          <div>
            <Button
              text="Send a Message"
              url="mailto:samuelibrahim3029@gmail.com"
              y="4"
              x="6"
            />
          </div>
        </header>
      </Slide>

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
                Front-end developer passionate about building dynamic user
                experiences. I enjoy working on interesting problem-solving
                projects - independently or as a team. I am a well-organized
                person with serious attention to detail.
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
                <span className="text-primary">Soft Skills:</span>{" "}
                Proactiveness, collaboration and interpersonal communication,
                continuous development, growth drive, teamwork, critical
                thinking, problem-solving, and attention to detail.
              </p>
            </span>
          </div>

          <div className="mt-10 h-96 w-80 lg:w-1/3 self-center">
            <img
              src={SamuelIbrahim}
              alt="samuel"
              className="h-full w-full opacity-60 hover:scale-90"
            />
          </div>
        </article>
      </Zoom>

      <Bounce triggerOnce>
        <article className="mt-28 lg:mt-40 flex flex-col gap-5 slide-right">
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
        </article>
      </Bounce>

      <Rotate triggerOnce>
        <article className="mt-28 lg:mt-40 flex flex-col gap-5 text-focus-in">
          <h1 className="font-bold text-secondary text-4xl sm:text-6xl leading-12">
            My Portfolio?
          </h1>
          <Link
            to="/project"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="font-semibold text-primary text-3xl self-center mt-5 animate-pulse hover:text-lightest-slate"
          >
            CLICK HERE!!!
          </Link>
        </article>
      </Rotate>
    </section>
  );
};

export default Home;
