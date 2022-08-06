import React, { useState, useEffect } from "react";
import FilmSearch from "../component/FilmSearch";
import '../App.css'
import FilmWatched from "./FilmWatched";

const FilmBox = () => {
  const [films, setFilms] = useState([]);
  const [watchedFilms, setWatchedFilms] = useState([]);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = function() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(films => setFilms(films))
  }

  const addToWatched = (film) => {
    let unSortedList = [...watchedFilms]
    unSortedList.push(film)
    const set = [...new Set(unSortedList)]
    let newList = Array.from(set)
    setWatchedFilms(newList)
  }


  return (
    <>
    <h2>Search for a Film</h2>
    <div className="search">
    <FilmSearch films={films} addToWatched={addToWatched}/>
    </div>
    <div className="watched">
        {watchedFilms ? <FilmWatched watchedFilms={watchedFilms}/> : null}
    </div>


  </>
)};

export default FilmBox;
