import { Header, About, Techs, Port } from "../container";

const Home = () => {
  return (
    <section className="bg-navy h-full w-full px-6 py-14 sm:px-10 md:px-28 lg:px-36 xl:px-44">
      <Header />
      <About />
      <Techs />
      <Port />
    </section>
  );
};

export default Home;
