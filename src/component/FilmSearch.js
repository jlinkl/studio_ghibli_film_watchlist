import React, {useState} from 'react'
import FilmList from './FilmList'

const FilmSearch = ({films, addToWatched}) => {

    const [query, setQuery] = useState("")

    const searchedFilms = films.filter(film => {
        if (query === '') {
            return film;
        } else if (film.title.toLowerCase().includes(query.toLowerCase())) {
            return film
        }
    })

  return (
    <>
    <div>
        <input placeholder='Enter Film Title' onChange={event => setQuery(event.target.value)}/>
    </div>
    <div>
        <FilmList searchedFilms={searchedFilms} addToWatched={addToWatched} />
    </div>
    </>    
  )
}

export default FilmSearch