import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Домашня сторінка</NavLink>
        </li>
        <li>
          <NavLink to="/products">Ппродукція</NavLink>
        </li>
        <li>
          <NavLink to="/materials">Матеріали</NavLink>
        </li>
      </ul>
    </nav>
  );
};
