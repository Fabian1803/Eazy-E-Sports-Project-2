import React, { useState } from 'react';
import axios from 'axios';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores

    // Función que maneja el cambio en los campos del formulario
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    // Función que maneja el envío del formulario
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        try {
            // Envía los datos al backend usando axios
            const response = await axios.post(`http://localhost:8080/api/authenticate`, null, {
                params: {
                    mailUser: email,
                    passwordUser: password // Corregido el nombre del parámetro
                }
            });

            // Maneja la respuesta
            console.log('Usuario autenticado:', response.data);
            setError(null); // Limpia cualquier error previo
        } catch (error: any) {
            console.error('Error al autenticar el usuario:', error.response?.data || error.message);
            setError('Error al autenticar el usuario. Verifica tus credenciales.'); // Establece el mensaje de error
        }
    };

    return (
        <div className='loginCont'>
            <div className="lCont">
                <div className="c1">
                    <a href="#">
                        <img src="./src/Img/iconG.png" alt="Google" style={{ height: '25px', width: '25px' }} />
                        <p>Iniciar sesión con Google</p>
                    </a>
                    <a href="#">
                        <img src="./src/Img/iconF.png" alt="Facebook" style={{ height: '25px', width: '25px' }} />
                        <p>Iniciar sesión con Facebook</p>
                    </a>
                </div>
                <div className="separator"><p>Or</p></div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Iniciar sesión con credenciales</button>
                </form>
                {error && <p className="error">{error}</p>} {/* Muestra mensaje de error si existe */}
            </div>
        </div>
    );
};

export default Login;
