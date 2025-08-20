import React from 'react'

const MovieCard = ({movie : {title, vote_average, poster_path, release_date, original_language}}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/No-Poster.png"
        }
        alt={`Poster for ${title}`}
      />

      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon"></img>
            <p className=''>{vote_average ? vote_average.toFixed(1): 'N/A'}</p>
          </div>
          <span className="language">
            {original_language ? original_language.toUpperCase() : "N/A"}</span>
          <span className="year">
            {release_date ? new Date(release_date).getFullYear() : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard