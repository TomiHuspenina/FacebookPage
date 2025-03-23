import React from "react";
import "./style.css";
import { FaWhatsapp } from "react-icons/fa"; 

export default function App() {

    const mensaje = "Hola, me gustaría crear un usuario, me llamo...";
    const telefono = 5493517437218

    return (
        <div className="mainContent">
           <div className="title">
                <h2>PARA CREAR TU CUENTA ENVÍANOS UN WHATSAPP</h2>
                <h2>HAZ CLICK EN EL BOTÓN DE ABAJO</h2>
           </div>
           <div className="content">
            <button>
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
            <p>MÍNIMO DE CARGA $3000</p>

           </div>
           <div className="advertisements">
                <p>SE ACEPTA TRANSFERENCIAS</p>
                <p>ATENCIÓN 24 HORAS, TODOS LOS DÍAS</p>
                <p>PROHIBIDO EL INGRESO A MENORES DE 18 AÑOS</p>
                <p>JUGAR DE FORMA MODERADA</p>
           </div>
        </div>
      
    );
  }
  