import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [created, setCreated] = useState(true);
  const history = useHistory();

  const onChangeName = (e) => setName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const signIn = (e) => {
    e.preventDefault();

    // Get users from the local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users) {
      let i,
        flag = false;
      for (i = 0; i < users.length; i++) {
        // Check if name and password match
        if (name === users[i].name && password === users[i].password) {
          flag = true;
        }
      }

      if (flag) {
        setCreated(true);
        // Display Movies component
        history.push('/movies');
      } else setCreated(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-9 col-md-4 col-sm-6">
          <form className="form-container mt-6" onSubmit={signIn}>
            <h3 className="text-center text-secondary mb-4">Sign In</h3>
            <input
              type="text"
              className="form-control mb-4 bg-transparent"
              name="fullName"
              id="name"
              placeholder="Name"
              required
              value={name}
              onChange={onChangeName}
            />
            <input
              type="password"
              className="form-control mb-4 bg-transparent"
              name="pwd"
              id="passwd"
              placeholder="Password"
              minLength="8"
              required
              value={password}
              onChange={onChangePassword}
            />
            {!created && (
              <small className="form-text text-danger mb-2">
                Invalid Credentials
              </small>
            )}
            <button type="submit" className="btn btn-gradient btn-block">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
