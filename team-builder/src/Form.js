// - [ ] Create a `Form.js` file and build out your form markup.
// - [ ] Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination).
// - [ ] You will have to decide which component is responsible for maintaining the _state_ of the form (`Form` itself, or its parent `App`). 
//Each approach has advantages and disadvantages.
// - [ ] Render your `Form` component in `App`. The `App` component should hand down through props any callback(s) needed 
//for `Form` to do its job (adding new members to your team members state on submit).

import React, { useState } from "react";

function Form(props) {
  const [user, setUser] = useState([{ username: "", password: "", role: ""}]);
  const [usersList, setUsersList] = useState([]);

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUsersList([...usersList, user]);
    setUser({ username: "", password: "", role: "" });
  };

  return (
    <div className="App">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={user.role}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
      <div>
        {usersList.map((userInfo, index) => (
          <div key={index}>
            <p>User {index + 1}:</p>
            <p>Username: {userInfo.username}</p>
            <p>Password: {userInfo.password}</p>
            <p>Role: {userInfo.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;