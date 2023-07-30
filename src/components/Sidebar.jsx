import { data } from "../data/data";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useGlobalContext } from "../Context/ContextProvider";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, screenSize } = useGlobalContext();
  if (screenSize > 768) {
    closeSidebar();
  }

  return (
    <>
      {isSidebarOpen && (
        <aside className="scale fixed top-0 z-50 left-0 flex justify-center h-full w-full">
          <div className="bg-light-navy sidebar mt-5 w-11/12 h-screen p-10 flex flex-col ">
            <div>
              <button
                onClick={closeSidebar}
                className="text-red-400 text-3xl float-right hover:rotate-180 duration-300"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col items-center gap-20">
              <ul className="flex flex-col gap-10 items-center text-secondary text-2xl mt-20">
                {data.map((item) => {
                  const { id, name, url } = item;
                  return (
                    <li key={id}>
                      <NavLink
                        to={url}
                        aria-label={name}
                        className=" hover:text-primary"
                        onClick={closeSidebar}
                      >
                        {name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>

              <Button
                url="https://drive.google.com/file/d/1yb9n6K34IQdJEHoui6tXxQmcM9I62m1h/view?usp=sharing"
                className="border-2 border-text-primary"
                text="resume"
                x="6"
                y="4"
                onClick={closeSidebar}
                target={"_href"}
              />
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
