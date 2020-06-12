import React, { Component } from "react";

import './Header.css'

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
        <a class="navbar-brand" href="/">
          Santiago
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse nav__container" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Hello <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Habilidades <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Experiencia <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Educación <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Portfolio <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Feedback <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Contacto <span class="sr-only"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
