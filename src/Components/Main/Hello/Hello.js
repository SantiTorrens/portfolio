import React from "react";

import "./Hello.css";
import Perfil from "../../../img/Perfil.jpg";

function Hello() {
  return (
    <section id="hello" className="section">
      <div className="container  hello-container">
        <div className="row">
          <div className="col-md-6 about-img-wrap">
            <div className="about-img wow slideInRight">
              <img src={Perfil} alt="img" className="img-responsive"></img>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-me wow slideInLeft">
              <div className="about-me-title">
                <h1>
                  <span className="point">Santiago Torrens.</span>
                </h1>
              </div>
              <div className="about-me-text">
                <div className="opacity-box">
                  <p>
                    I am a Web Developer located in Rosario, Argentina. I
                    currently work as a freelancer Front-End Developer. Focused
                    on bringin value to your business.
                  </p>
                </div>
              </div>
              <div className="about-me-info">
                <p>
                  <span className="span-title">Phone</span>
                  <span>+54-3413-180685</span>
                </p>
                <p>
                  <span className="span-title">Email</span>
                  <span>santi.duendes@gmail.com</span>
                </p>
                <p>
                  <span className="span-title">Location</span>
                  <span>Rosario, Argentina</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hello;
