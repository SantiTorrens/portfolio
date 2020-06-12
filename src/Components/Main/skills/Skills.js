import React from "react";

import "./Skills.css";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="row wave-bg">
          <div className="col-md-4 wow slideInLeft">
            <div className="section-sidebar">
              <h2>
                <span className="point">Skills.</span>
              </h2>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 wow zoomIn">
                <div className="advantages-box">
                  <h4>Front End Development</h4>
                  <div className="opacity-box">
                    <p>
                      HTML5, CSS, Bootstrap, JavaScript, JQuery, Node, React js,
                      React Redux, React Hooks
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow zoomIn">
                <hr className="mobile-hr" />
                <div className="advantages-box">
                  <h4>Back End Development</h4>
                  <div className="opacity-box">
                    <p>...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 wow zoomIn">
              <hr />
              <div className="advantages-box">
                <h4>Dev Tools</h4>
                <div className="opacity-box">
                  <p>VSCode, GitHub, Terminal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
