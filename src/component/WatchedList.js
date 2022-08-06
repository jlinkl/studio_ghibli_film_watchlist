import React from 'react'

const WatchedList = ({film}) => {
  return (
    <div>
        <li className="box">
        <h2>{film.title}</h2>
        <h3>Director: {film.director}</h3>
        <h4>Released in: {film.release_date}</h4>
        </li>
    </div>
  )
}

export default WatchedList