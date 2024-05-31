import React from "react";

export const TableHead = ({ items }) => {
  return (
    <thead>
      <tr>
        {
          items.map((item, i) => <th key={i} scope="col">{item}</th>)
        }
      </tr>
    </thead>
  );
};
