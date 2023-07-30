import { Link } from "react-router-dom";
import { Rotate } from "react-awesome-reveal";

const Port = () => {
  return (
    <Rotate triggerOnce>
      <article className="mt-28 lg:mt-40 flex flex-col gap-5 text-focus-in">
        <h1 className="font-bold text-secondary text-4xl sm:text-6xl leading-12">
          My Portfolio?
        </h1>
        <Link
          to="/project"
          aria-label="click here to visit my projects page"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="font-semibold text-primary text-3xl self-center mt-5 animate-pulse hover:text-lightest-slate"
        >
          CLICK HERE!!!
        </Link>
      </article>
    </Rotate>
  );
};

export default Port;
