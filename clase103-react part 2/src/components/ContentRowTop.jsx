import React from "react";
import { GenresInDb } from "./GenresInDb";
import { LastMovieInDb } from "./LastMovieInDb";
import { ContentRowMovies } from "./ContentRowMovies";
import mandalorian from '../assets/images/mandalorian.jpg'
import { ContainerImage } from "./ContainerImage";

export const ContentRowTop = () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      {/* Content Row Movies*/}
      <ContentRowMovies />
      {/* End movies in Data Base */}

      {/* Content Row Last Movie in Data Base */}
      <div className="row">
        {/* Last Movie in DB */}
        <LastMovieInDb>
            <ContainerImage>
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: "40rem" }}
                    src={mandalorian}
                    alt=" Star Wars - Mandalorian "
                  />
            </ContainerImage>
        </LastMovieInDb>
        {/* End content row last movie in Data Base */}

        {/* Genres in DB */}
        <GenresInDb />
        {/* End Genres in DB */}
      </div>
    </div>
  );
};
