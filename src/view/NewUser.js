import { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseUrl from '../http/const';

const NewUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email };

    fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      navigation("/users");
    });
  };

  return (
    <div className="new-user">
      <form className="p-5 m-5" onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="InputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit 
        </button>
      </form>
    </div>
  );
};

export default NewUser;
