import { Button } from "../components";

const Header = () => {
  return (
    <header className="mt-10 flex flex-col gap-14 text-focus-in">
      <div className="flex flex-col gap-10">
        <article className="flex flex-col gap-6 max-w-screen-lg">
          <h1 className="text-primary text-1xl sm:text-4xl md:text-5xl">
            Hi,{" "}
          </h1>
          <h1 className="text-secondary text-4xl sm:text-5xl md:text-7xl font-bold">
            I'm Samuel.
          </h1>
          <h1 className="text-lightest-slate text-3xl sm:text-6xl leading-12 font-bold capitalize">
            Software Developer
          </h1>
        </article>

        <article>
          <p className="text-lightest-slate text-xs sm:text-base leading-7 sm:leading-8 lg:max-w-screen-sm">
            A highly-motivated software developer{" "}
            <span className="text-primary">
              adept in developing codes for web and mobile applications.
            </span>{" "}
            I am currently open to interesting and highly ambitious
            opportunities/roles.{" "}
            <span className="text-primary">Would love to discuss? </span> I am
            happy to connect with you!
          </p>
        </article>
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
  );
};

export default Header;
