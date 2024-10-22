import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/hook/useAuth';


const Menu = () => {
  /* const navigate = useNavigate(); */
  const { logOut, isLoggedIn } = useAuth();

  /*  const handleLoginClick = () => {
     navigate('/login'); // Cambia la ruta según sea necesario
   }; */
  /*   const handleRegistrarseClick = () => {
      navigate('/registrarse'); // Cambia la ruta según sea necesario
    }; */
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3 border-bottom">
      <div className="container-fluid">
        <div className="col-md-3 mb-2 mb-md-0">
          <div className="col-md-3 mb-2 mb-md-0 d-flex align-items-center">
            <img src="/vite.svg" alt="Logo" className="navbar-brand" style={{ height: '40px' }} /> {/* Ajusta la altura según sea necesario */}
          </div>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a href="#" className="nav-link">Servicios</a> */}
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            {/* <li className="nav-item">
              
              <Link to="/servicios" className="nav-link">Servicios</Link>
            </li> */}
            {/* <li className="nav-item">
              <Link to="/agendar_cita" className="nav-link">Agendar Cita</Link>
            </li> */}
            <li className="nav-item">
              {/* <a href="#" className="nav-link">Especialidades</a> */}
              <Link to="/especialidades" className="nav-link">Especialidades</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/ayuda" className="nav-link">Ayuda</Link>
            </li> */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Medico
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/medico/turnos" className="dropdown-item">Ver Turnos</Link></li>
                <li><Link to="/medico/videollamada" className="dropdown-item">Videollamada</Link></li>
                <li><Link to="/login" className="dropdown-item">Iniciar Sesion</Link></li>
                <li><Link onClick={logOut} className="dropdown-item">Cerrar Sesion</Link></li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <Link to="/precios" className="nav-link">Precios</Link>
            </li> */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Paciente
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/agendar_cita" className="dropdown-item">Agendar Cita</Link></li>
                <li><Link to="/videollamada" className="dropdown-item">Videollamada</Link></li>
                <li><Link to="/registrarse" className="dropdown-item">Registrarse</Link></li>
                <li><Link to="/login" className="dropdown-item">Iniciar Sesion</Link></li>
                <li><Link onClick={logOut} className="dropdown-item">Cerrar Sesion</Link></li>
              </ul>
            </li>

          </ul>
          {/* <div className="d-flex flex-column flex-lg-row">
            <button type="button" className="btn btn-outline-primary me-2 mb-2 mb-lg-0" onClick={handleLoginClick}>Iniciar sesión</button>
            <button type="button" className="btn btn-primary" onClick={handleRegistrarseClick}>Registrarse</button>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Menu;