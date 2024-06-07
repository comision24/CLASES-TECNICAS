import React from "react";
import { Link } from "react-router-dom";

export const TableRow = ({ id,title, duration, rating, genre, awards }) => {
  return (
    <tr>
      <td><Link to={`/productos/${id}`}>{id}</Link></td>
      <td>{title}</td>
      <td>{title}</td>
      <td>{duration}</td>
      <td>{rating}</td>
      <td>
        <ul>
          {genre.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </td>
      <td>{awards}</td>
    </tr>
  );
};
