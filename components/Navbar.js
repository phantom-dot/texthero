import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-end">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto nav-pills">
            <li className="nav-item ">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
