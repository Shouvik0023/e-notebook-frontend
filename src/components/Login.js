import React, { useState } from "react";
import "./Login.css";
import "./utility.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credential, setCredential] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
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

  const onchange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="body1">
        <form className="formouter" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>Email address</b>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              value={credential.email}
              name="email"
              onChange={onchange}
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <b>Password</b>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              value={credential.password}
              name="password"
              onChange={onchange}
              placeholder="min 8 character"
            />
          </div>

          <div className="button">
            <button type="submit" className="btn btn-outline-light">
              Log in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
