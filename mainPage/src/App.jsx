import React from "react";
import "./style.css";
import { FaWhatsapp, FaUniversity, FaClock } from "react-icons/fa"; 

export default function App() {
    const mensaje = "Hola, me gustaría crear un usuario, me llamo...";
    const telefono = 5493517437218;

    return (
        <div className="mainContent">
            <div className="title">
                <img src="https://www.gifss.com/economia/juego/images/ruleta-06.gif" alt="GIF ruleta" />
                <h2>PARA CREAR TU CUENTA ENVÍANOS UN WHATSAPP</h2>
                <h2>HAZ CLICK EN EL BOTÓN DE ABAJO</h2>
            </div>
            <div className="content">
                <button className="whatsapp-button-container">
                    <a
                        href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-button"
                    >
                        <FaWhatsapp className="whatsapp-icon" />
                        CREAR CUENTA
                    </a>  
                </button>
                <p className="animated-text">MÍNIMO DE CARGA $3000</p>
            </div>
            <div className="info-box message1-box">
                <p>
                    <FaUniversity className="icon" /> SE ACEPTA TRANSFERENCIAS
                </p>
            </div>
            <div className="info-box message2-box">
                <p>
                    <FaClock className="icon" /> ATENCIÓN 24 HORAS, TODOS LOS DÍAS
                </p>
            </div>
            <p>PROHIBIDO EL INGRESO A MENORES DE 18 AÑOS</p>
            <p>JUGAR DE FORMA MODERADA</p>
        </div>
    );
}