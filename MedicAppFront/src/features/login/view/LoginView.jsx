import React from 'react'
import { useAuth } from '../../../core/auth/hook/useAuth'

const LoginView = () => {
  const { isLoggedIn, logIn } = useAuth();
  console.log("isLoggerdIn:" + isLoggedIn);
  return (
    <>
      <div className='container'>
        <div className="row align-items-center">
          <div className="col-md-6">
            <form>
              <h1 className="h3 mb-3 fw-normal">¡Bienvenido a MedicApp!</h1>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Correo Electrónico</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="btn btn-primary w-100 py-2" onClick={logIn}>Iniciar Sesión</button>
              <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
            </form>
          </div>
          <div className="col-md-6">
            <img className="logo mb-4" src="/telemedicina.jpg" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </>

  )
}

export default LoginView