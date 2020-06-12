import React from 'react'

function Mobile() {
    return (
        <div className="mob-menu-wrapper hidden-md hidden-lg">
            <div className="close-mob-menu">
                <span>
                    <i className="mdi mdi-close" aria-hidden="true"></i>
                </span>
            </div>
            <div className="mobile-menu">
                <ul>
                    <li>
                        <a href="#hello">Hello</a>
                    </li>
                    <li>
                        <a href="#Habilidades">Habilidades</a>
                    </li>
                    <li>
                        <a href="#Experiencia">Experiencia</a>
                    </li>
                    <li>
                        <a href="#Educación">#Educación</a>
                    </li>
                    <li>
                        <a href="#Portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#Feedback">Feedback</a>
                    </li>
                    <li>
                        <a href="#Contacto">Contacto</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Mobile
