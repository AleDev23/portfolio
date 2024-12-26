import React from "react";
import "./styles/Navbar.css";

const Navbar = ({ setActiveTab }) => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li onClick={() => setActiveTab("experience")}>Experiencia</li>
                <li onClick={() => setActiveTab("projects")}>Proyectos</li>
                <li onClick={() => setActiveTab("education")}>Estudios</li>
                <li onClick={() => setActiveTab("skills")}>Conocimientos</li>
                <li>
                    <a href="/tu-cv.pdf" download className="cv-button">
                        Descargar CV
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
