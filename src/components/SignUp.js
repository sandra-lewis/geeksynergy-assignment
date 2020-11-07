import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [created, setCreated] = useState(false);

  const onChangeName = (e) => setName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeProfession = (e) => setProfession(e.target.value);

  const signUp = (e) => {
    e.preventDefault();
    const user = { name, password, phone, email, profession };

    // Get users from the local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (!users) {
      // Add user to empty array
      users.push(user);
      setCreated(true);
    } else {
      let i,
        flag = false;

      // Check for duplicate users based on password
      for (i = 0; i < users.length; i++) {
        if (users[i].password === user.password) {
          flag = true;
        }
      }

      // Add user if user does not exist
      if (!flag) {
        users.push(user);
        setCreated(true);
      } else {
        setCreated(false);
      }
    }

    // Add users to the local storage
    localStorage.setItem('users', JSON.stringify(users));
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-9 col-md-4 col-sm-6">
          <form className="form-container mt-6" onSubmit={signUp}>
            <h3 className="text-center text-secondary mb-4">Sign Up</h3>
            <input
              type="text"
              className="form-control mb-4 bg-transparent"
              name="fullName"
              placeholder="Name"
              required
              value={name}
              onChange={onChangeName}
            />
            <input
              type="password"
              className="form-control mb-4 bg-transparent"
              name="pwd"
              placeholder="Password"
              minLength="8"
              required
              value={password}
              onChange={onChangePassword}
            />
            <input
              type="email"
              className="form-control mb-4 bg-transparent"
              name="emailId"
              placeholder="Email"
              required
              value={email}
              onChange={onChangeEmail}
            />
            <input
              type="tel"
              className="form-control mb-4 bg-transparent"
              name="phoneNo"
              placeholder="Mobile Number"
              pattern="[6-9][0-9]{9}"
              required
              value={phone}
              onChange={onChangePhone}
            />
            <select
              name="jobTitle"
              id="job"
              className="form-control custom-select mb-4 bg-transparent"
              required
              value={profession}
              onChange={onChangeProfession}
            >
              <option hidden>Choose your profession</option>
              <option value="Designer">Designer</option>
              <option value="Engineer">Engineer</option>
              <option value="Analyst">Analyst</option>
              <option value="Manager">Manager</option>
            </select>
            {created && (
              <small className="form-text text-success mb-3">
                Your account has been created successfully.
              </small>
            )}
            <small className="form-text text-muted mb-2">
              Already have an account? <Link to="/sign-in">Sign In.</Link>
            </small>
            <button type="submit" className="btn btn-gradient btn-block">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
