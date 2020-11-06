import React, { Fragment, useState, useEffect } from 'react';
import Movie from './Movie';
import Loader from '../Loader';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movies = ({ changeBgColor }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    changeBgColor('bg-light');
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const {
        data: { result },
      } = await axios.post(
		'https://cors-anywhere.herokuapp.com/https://hoblist.com/movieList',
        {
          category: 'movies',
          language: 'kannada',
          genre: 'all',
          sort: 'voting',
        }
      );

      setMovies(result);
      setLoading(false);
    } catch (err) {}
  };

  return (
    <Fragment>
      <nav className="navbar shadow-sm mb-5">
        <ul className="navbar-nav">
          <li className="nav-item ml-4">
            <Link className="nav-link" to="/company-info">
              Company Info
            </Link>
          </li>
        </ul>
      </nav>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-deck m-4">
          {movies.map((movie) => (
            <Movie key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

Movies.propTypes = {
  changeBgColor: PropTypes.func.isRequired,
};

export default Movies;
