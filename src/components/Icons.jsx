import React from "react";
import { icons } from "../data/data";
import { Link } from "react-router-dom";

const Icons = () => {
  return (
    <div className="flex fixed bottom-5 left-6 md:left-12 text-2xl flex-col text-secondary items-center gap-10 bg-lightest-navy p-4 rounded-xl z-50">
      {icons.map((item, index) => {
        const { icon, url, name } = item;

        return (
          <Link
            to={url}
            target="_blank"
            key={index}
            className="hover:text-primary"
            aria-label={name}
          >
            {icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Icons;
