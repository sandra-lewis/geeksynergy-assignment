import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({
  movie: {
    poster,
    title,
    genre,
    director,
    stars,
    runTime,
    language,
    releasedDate,
    pageViews,
    upVoted,
    downVoted,
    totalVoted,
  },
}) => {
  // Convert date from milliseconds to string
  let dateToStr = new Date(releasedDate).toDateString().split(' ');
  let releaseDate = dateToStr[2] + ' ' + dateToStr[1];

  return (
    <div className="card mb-4">
      <div className="card-body p-4">
        <div className="d-flex">
          <div className="d-flex flex-column align-items-center">
            <i className="fa fa-caret-up"></i>
            {upVoted && downVoted ? upVoted.length - downVoted.length : 0}
            <i className="fa fa-caret-down"></i>
			Votes
          </div>
          <img src={poster} alt="" className="movie-poster" />
          <div className="column">
            <h5
              className="font-weight-bold text-truncate cursor-pointer"
              title={title}
            >
              {title}
            </h5>
            <p className="text-truncate cursor-pointer" title={genre}>
              <strong className="text-secondary">Genre: </strong>
              {genre}
            </p>
            <p className="text-truncate cursor-pointer" title={director}>
              <strong className="text-secondary">Director: </strong>
              {director}
            </p>
            <p className="text-truncate cursor-pointer" title={stars}>
              <strong className="text-secondary">Starring: </strong>
              {stars}
            </p>
            <p
              className="text-truncate cursor-pointer"
              title={`${runTime} | ${language} | ${releasedDate}`}
            >
              {runTime && <span>{runTime} Mins |</span>} {language} |{' '}
              {releaseDate}
            </p>
            <p
              className="text-info text-truncate cursor-pointer"
              title={`${pageViews} | Voted by ${totalVoted}`}
            >
              {pageViews} views{' '}
              {totalVoted !== 0 && <span>| Voted by {totalVoted} people</span>}
            </p>
          </div>
        </div>
        <button className="btn btn-primary btn-block mt-3">
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
