import React from 'react'

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center align-items-center py-3 my-4 border-top fixed-bottom bg-light">
            {/* <div className="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
            </div> */}

            <ul className="nav list-unstyled d-flex justify-content-cente">
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-twitter"></i></a></li>  
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-instagram"></i></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-facebook"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer