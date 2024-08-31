import axios from 'axios';
import React, { useState } from 'react'

interface authProps { }
interface UserStore {
  idUser: number;
  nameUser: string;
  lastNameUser: string;
  mailUser: string;
  passwordUser: string;
}

const auth: React.FC<authProps> = () => {
  const [formState, setFormState] = useState({
    nameUser: '',
    lastNameUser: '',
    mailUser: '',
    passwordUser: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail(formState.mailUser)) {
      alert('El correo electrónico no es válido');
      return;
    }

    const newUser: UserStore = {
      idUser: 0,
      nameUser: formState.nameUser,
      lastNameUser: formState.lastNameUser,
      mailUser: formState.mailUser,
      passwordUser: formState.passwordUser,
    }

    axios.post('http://localhost:8080/api/UserStore', newUser)
      .then(Response => {
        console.log("usuario creado", Response.data);
        setFormState({
          nameUser: '',
          lastNameUser: '',
          mailUser: '',
          passwordUser: ''
        })
      })
      .catch(error => {
        if (error.response && error.response.data.message) {
          alert(error.response.data.message); // Muestra un mensaje de error
        } else {
          console.error("Error al crear el usuario:", error);
        }
      });
  }

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className='authCont'>
      <section>
        <div className="titleA">
          <h1>Crea una cuenta</h1>
          <div>
            <p>Regístrate con: </p>
            <a href=""><img src="./src/Img/iconG.png" alt="" style={{height: '30px', width: '30px'}}/></a>
            <a href=""><img src="./src/Img/iconF.png" alt="" style={{height: '30px', width: '30px'}}/></a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="email" name="mailUser" value={formState.mailUser} onChange={handleChange} id="mail" placeholder='name@gmail.com' required />
          <input type="text" name="nameUser" value={formState.nameUser} onChange={handleChange} id="firstName" placeholder='Nombre' required />
          <input type="text" name="lastNameUser" value={formState.lastNameUser} onChange={handleChange} id="lastName" placeholder='Apellido' required />
          <input type="password" name="passwordUser" value={formState.passwordUser} onChange={handleChange} id="passw" placeholder='Contraseña' required />
          <button type="submit" id='btnCreate'>Crear Cuenta</button>
        </form>
        <a href="/login"><p>Iniciar Sesión</p></a>
      </section>
    </div>
  )
}

export default auth