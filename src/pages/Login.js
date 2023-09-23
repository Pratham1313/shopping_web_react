import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login({ name, setname, setnavname }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <div class="outerbox">
        <div class="innerbox">
          <header>Signup</header>
          <form>
            <div>
              <label for="name">Enter Name</label>
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                id="name"
                placeholder="  Enter name..."
                className="input_login"
                required
              />
            </div>
            <div>
              <label for="email">Enter Email</label>
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                id="email"
                placeholder="  Enter Mail id..."
                className="input_login"
                required
              />
            </div>
            <div>
              <label for="password">Enter Password</label>
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                id="password"
                placeholder="  Enter 8 digits..."
                className="input_login"
                required
              />
            </div>
            <div>
              <Link to="/">
                <button type="submit" id="create" onClick={setnavname}>
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
