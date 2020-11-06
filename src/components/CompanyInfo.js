import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CompanyInfo = ({ changeBgColor }) => {
  useEffect(() => {
    changeBgColor('bg-light');
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <nav className="navbar shadow-sm mb-5">
        <ul className="navbar-nav">
          <li className="nav-item ml-4">
            <Link className="nav-link" to="/movies">
              Back to Movies
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <h2 className="font-weight-bold mb-3">Company Info</h2>
        <p>
          <strong>Company:</strong> Geeksynergy Technologies Pvt Ltd
        </p>
        <p>
          <strong>Address:</strong> Sanjayanagar, Bengaluru-56
        </p>
        <p>
          <strong>Phone:</strong> XXXXXXXXX09
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="#mailto:XXXXXX@gmail.com">XXXXXX@gmail.com</a>
        </p>
      </div>
    </Fragment>
  );
};

CompanyInfo.propTypes = {
  changeBgColor: PropTypes.func.isRequired,
};

export default CompanyInfo;
