import React from "react";

function Header() {
  return (
    <ul className="nav p-5">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Productos
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Categorias
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/">Perfil</a>
      </li>
    </ul>
  );
}

export default Header;