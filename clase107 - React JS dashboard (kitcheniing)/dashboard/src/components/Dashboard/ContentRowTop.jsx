import React from "react";
import imagenFondo from "../../assets/images/mandalorian.jpg";
import { ContentData } from "./ContentData.jsx";
function ContentRowTop({ data }) {
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <div className="row">
          {/*<!-- Movies in Data Base -->*/}
          {/*<!-- Total awards -->*/}
          {/*<!-- Actors quantity -->*/}

          {data
            .filter(({ show }) => show)
            .map((el, i) => {
              return <ContentData key={i} {...el} />;
            })}
        </div>
        {/*<!-- End movies in Data Base -->*/}

        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Last movie in Data Base
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: 40 + "rem" }}
                    src={imagenFondo}
                    alt=" Star Wars - Mandalorian "
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, consequatur explicabo officia inventore libero
                  veritatis iure voluptate reiciendis a magnam, vitae, aperiam
                  voluptatum non corporis quae dolorem culpa citationem ratione
                  aperiam voluptatum non corporis ratione aperiam voluptatum
                  quae dolorem culpa ratione aperiam voluptatum?
                </p>
                <a
                  className="btn btn-danger"
                  target="_blank"
                  rel="nofollow"
                  href="/"
                >
                  View movie detail
                </a>
              </div>
            </div>
          </div>
          {/*<!-- End content row last movie in Data Base -->*/}

          {/*<!-- Genres in DB -->*/}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Genres in Data Base
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">Acción</div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">Animación</div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">Aventura</div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">Ciencia Ficción</div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">Comedia</div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">Documental</div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">Drama</div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">Fantasia</div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">Infantiles</div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">Musical</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
