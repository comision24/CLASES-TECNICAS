import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {useParams} from 'react-router-dom'

const DetailProduct = () => {

  const {id} = useParams()

  const [movie, setMovie] = useState({});

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

  useEffect(() => {
    
    const movieFind = movies.find((movie) => movie.id === +id)
    setMovie(movieFind)
    
  }, []);

  return (
    <ul>
      <li>{movie.title}</li>
      <li>{movie.duration}</li>
      <li>{movie.awards}</li>
    </ul>
  )
}

DetailProduct.propTypes = {}

export default DetailProduct