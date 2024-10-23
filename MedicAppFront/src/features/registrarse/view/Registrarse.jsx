import React from 'react'

const Registrarse = () => {
  return (
    <>
      <h3>Registrarse</h3>
      <div className="mb-3">
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nombre y Apellido"/>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="dni"/>
      </div>
      <div className="mb-3">
        <input type="email" className="form-control" id="Email" placeholder="Email"/>
      </div>
      <div className="mb-3">
        <label htmlFor="Fecha" className="form-label text-start">Fecha de Nacimiento</label>
        <input type="date" className="form-control" id="Fecha" placeholder="Another input placeholder"/>
      </div>
      <div className="mb-3">
        <input type="tel" className="form-control" id="Telefono" placeholder="telefono"/>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" id="Sexo" placeholder="sexo"/>
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="Password" placeholder="contraseña"/>
      </div>
      <button type="submit" className="btn btn-primary">Registrarse</button>
    </>
  )
}

export default Registrarse