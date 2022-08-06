import React from 'react'

const FilmDetail = ({film, addToWatched}) => {

  const handleWatched = () => {
    addToWatched(film)
  }

  return (
    <>
        <li className="box">
        <h2>{film.title}</h2>
        <h3>Director: {film.director}</h3>
        <h4>Released in: {film.release_date}</h4>
        <button value="film" onClick={handleWatched}>Add to Watched</button>
        </li>
    </>
  )
}

export default FilmDetail