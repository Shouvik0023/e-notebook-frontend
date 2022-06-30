import React, { useState } from "react";
import "./Login.css";
import "./utility.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [credential, setcredential] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, password } = credential;
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();

    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("invalid credential");
    }
  };

  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="body1">
        <form className="formouter" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <b>Email address</b>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={onChange}
              name="email"
              value={credential.email}
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
             <b> Full Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={onChange}
              name="name"
              value={credential.name}
              placeholder="your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <b>Password</b>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={onChange}
              name="password"
              value={credential.password}
              placeholder="min 8 character"
              minLength={8}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              <b>Confirm Password</b>
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              onChange={onChange}
              name="cpassword"
              value={credential.cpassword}
              placeholder="min 8 character"
              minLength={8}
              required
            />
          </div>
          <div className="button">
            <button type="submit" className="btn btn-outline-light">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
