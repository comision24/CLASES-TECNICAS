import React from "react";
import PropTypes from "prop-types";
import { TableHead } from "../components/Products/TableHead";
import { TableRow } from "../components/Products/TableRow";

const Product = () => {
  const movies = [
    {
      id: 1,
      title: "Billy Elliot",
      duration: 123,
      rating: 5,
      genre: ["Drama", "Comedia"],
      awards: 2,
    },
    {
      id: 2,
      title: "Alicia en el país de las maravillas",
      duration: 142,
      rating: 4.8,
      genre: ["Drama", "Acción", "Comedia"],
      awards: 3,
    },
  ];

  const dataTableHead = ["Titulo", "Duración", "Rating", "Género", "Premios"];

  return (
    <>
      <h1>TODAS LOS PRODUCTOS</h1>

      <div className="border p-1 m-3">
        <table className="table table-bordered m-4">
          <TableHead items={dataTableHead} />

          <tbody>
            {movies.map((movie, i) => (
              /*  <TableRow key={i} title={movie.title} duration={movie.duration} rating={movie.rating} genre={movie.genre} awards={movie.awards}/> */
              <TableRow key={i} {...movie} />
            ))}
          </tbody>

          <TableHead items={dataTableHead} />
        </table>
      </div>
    </>
  );
};

Product.propTypes = {};

export default Product;
