import { Link } from "react-router-dom";

const Button = ({ text, url, x, y, onClick, target }) => {
  return (
    <Link
      to={url}
      onClick={onClick}
      target={target}
      className={`text-primary border-2 text-1xs border-primary py-${y} px-${x} rounded`}
    >
      {text}
    </Link>
  );
};

export default Button;
