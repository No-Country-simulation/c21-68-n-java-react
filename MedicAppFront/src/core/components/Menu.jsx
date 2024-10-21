import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Cambia la ruta según sea necesario
  };
  const handleRegistrarseClick = () => {
    navigate('/registrarse'); // Cambia la ruta según sea necesario
  };
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3 border-bottom">
      <div className="container-fluid">
        <div className="col-md-3 mb-2 mb-md-0">
          {/* <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a> */}
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
            <li className="nav-item">
              {/* <a href="#" className="nav-link">Servicios</a> */}
              <Link to="/servicios" className="nav-link">Servicios</Link>
            </li>
            <li className="nav-item">
              {/* <a href="#" className="nav-link">Agendar Cita</a> */}
              <Link to="/agendar_cita" className="nav-link">Agendar Cita</Link>
            </li>
            <li className="nav-item">
              {/* <a href="#" className="nav-link">Especialidades</a> */}
              <Link to="/especialidades" className="nav-link">Especialidades</Link>
            </li>
            <li className="nav-item"> 
              {/* <a href="/ayuda" className="nav-link">Ayuda</a>  */}
              <Link to="/ayuda" className="nav-link">Ayuda</Link>
             </li> 
            <li className="nav-item">
              {/* <a href="#" className="nav-link">Precios</a> */}
              <Link to="/precios" className="nav-link">Precios</Link>
            </li>
          </ul>
          <div className="d-flex flex-column flex-lg-row">
            <button type="button" className="btn btn-outline-primary me-2 mb-2 mb-lg-0" onClick={handleLoginClick}>Iniciar sesión</button>
            <button type="button" className="btn btn-primary"onClick={handleRegistrarseClick}>Registrarse</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Menu;