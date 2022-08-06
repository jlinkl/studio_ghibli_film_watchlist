import React from "react";
import FilmDetail from "./FilmDetail";


const FilmList = ({searchedFilms, addToWatched}) => {


    const filmsItems = searchedFilms.map((film, index) => {
        return <FilmDetail film={film} key={index} addToWatched={addToWatched}/>
    })

  return (
    <div>
    <ul>
        {filmsItems}
    </ul>
    </div>

)};

export default FilmList;
