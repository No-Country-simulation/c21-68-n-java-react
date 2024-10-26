import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
    return (
        // <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        //     {/* <div className="col-md-4 d-flex align-items-center">
        //         <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        //             <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
        //         </a>
        //         <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
        //     </div> */}

        //     <ul className="nav list-unstyled d-flex justify-content-cente">
        //         <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-twitter"></i></a></li>  
        //         <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-instagram"></i></a></li>
        //         <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-facebook"></i></a></li>
        //     </ul>
        // </footer>

        // <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 border-top" style={{"backgroundColor": "#B3B3B3"}}>
        <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 mt-5" style={{"backgroundColor": "#B3B3B3"}}>
            <Col mb={3}>
                <a href="/" className="d-flex justify-content-center mb-3 link-dark text-decoration-none">
                <img
                    alt=""
                    src="/public/img2.png"
                    width="60"
                    height="80"
                    className="d-inline-block align-top"
                />{' '}
                </a>
                <div className='d-flex justify-content-center'>
                    <i className="bi bi-youtube mx-2 tamIco"></i>
                    <i className="bi bi-facebook mx-2 tamIco"></i>
                    <i className="bi bi-twitter mx-2 tamIco"></i>
                    <i className="bi bi-instagram mx-2 tamIco"></i>
                </div>
                <p className="text-muted d-flex justify-content-center">© 2024</p>
            </Col>
            <Col mb={3}>
            </Col>

            <Col mb={3}>
                <h5>Para Pacientes</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Buscar Doctor</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Buscar Hospital</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Test de Diagnóstico</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Chequeo Completo</a></li>
                </ul>
            </Col>
            <Col mb={3}>
                <h5>Para Doctores</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Consulta de Perfil</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Equipo Colaborador</a></li>
                </ul>
            </Col>
            <Col mb={3}>
                <h5>Mas</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Ayuda</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Desarrolladores</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Políticas de Privacidad</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Términos y Condiciones</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Soporte</a></li>
                </ul>
            </Col>
        </Row>
    )
}

export default Footer