import React, { useState } from 'react'

const Registrarse = () => {

	const [user, setUser] = useState({
		nombre: '',
		apellido: '',
		email: '',
		clave: '', 
		rol: 'Paciente'
	});

	console.log(user);
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		await fetch('http://localhost:8080/registro', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
		.then(response => response.json())
		.then(data => console.log('User created:', data))
		.catch(error => console.error('Error creating user:', error));
	};

	const handleChange = (event) => {
		
		const { name, value } = event.target;
		setUser(prevUser => ({ ...prevUser, [name]: value }));
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center mt-5">
						<h1 className="h3 mb-3 fw-normal" style={{ "color": '#234A6B' }}>¡Registrar nuevo Paciente!</h1>
					</div>
					<div className="col-md-6 mt-5 d-flex justify-content-center" style={{"height": "400px"}}>
						<form className="w-100 was-validated" onSubmit={handleSubmit}>
							<div className="form-floating mb-3  mt-3">
								<input type="text" className="form-control" id="formInputNombre" name="nombre" value={user.nombre} placeholder="Nombre" onChange={handleChange} required/>
								<label htmlFor="floatingInput">Nombre</label>
							</div>
							<div className="form-floating mb-3">
								<input type="text" className="form-control" id="formInputApellido" name="apellido" value={user.apellido} placeholder="Apellido" onChange={handleChange} required/>
								<label htmlFor="floatingInput">Apellido</label>
							</div>
							<div className="form-floating mb-3">
								<input type="email" className="form-control" id="formInputEmail" placeholder="Email" name="email" value={user.email} onChange={handleChange} required/>
								<label htmlFor="floatingPassword">email</label>
								<div className="valid-feedback">Email valido</div>
								<div className="invalid-feedback">Por favor ingrese un email valido.</div>
							</div>
							<div className="form-floating mb-3">
								<input type="password" className="form-control" id="formInputClave" placeholder="contraseña" name="clave" value={user.clave} onChange={handleChange} required/>
								<label htmlFor="floatingPassword">Password</label>
							</div>
							<div className="form-floating mb-3 visually-hidden">
								<input type="hidden" className="form-control" id="formInputRol" placeholder="rol" name="rol" value={user.rol} onChange={handleChange} required/>
								<label htmlFor="floatingPassword">Rol</label>
							</div>
							<div className="text-center mt-4 d-grid gap-2 col-6 mx-auto">
								<button type="submit" className="btn btn-primary btn-lg">Registrarse</button>
							</div>
						</form>
					</div>
					<div className="col-md-2 mt-5 d-flex justify-content-center" style={{"height": "400px"}}>
					</div>
					<div className="col-md-4 mt-5 d-flex justify-content-start">
						<img className="mb-4" src="public/img7.png" style={{ maxWidth: '100%', height: 'auto' }} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Registrarse