import React from 'react'
import WatchedList from '../component/WatchedList'

const FilmWatched = ({watchedFilms}) => {

    const watchedItems = watchedFilms.map((film, index) => {
        return <WatchedList film={film} key={index} />
    })

  return (
    <div>
        <h2>Watched Films</h2>
        <ul>
        {watchedItems}
        </ul>
    </div>
  )
}

export default FilmWatched