import Style from "./Login.module.css";
import { axiosInstance } from "../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser, faUnlock } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [passwordShown, setPasswordShown] = useState(false);

	const navigate = useNavigate()

	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	};

	const login = async () => {
		if (username !== null && username!== "") {
			if(password !==null && password!== "") {
				let data = {
					"username" : username,
					"password" : password
				}
				await axiosInstance.post("user/login/",data)
				.then(res =>{
					console.log(res.data);
					localStorage.setItem('token',res.data.access_token)
					alert("Inicio exitoso")
					navigate('/inicio')
				})
				.catch(error => {
					alert(error.response.data.non_field_errors)
				});
			}else{
				alert("No password provided")
			}
		} else {
			alert("No username provided");
		}
	};

	return (
		<div className={Style.main}>
			<div className={Style.block}>
				<h1 className={Style.titulo}>Iniciar sesión</h1>

				<p className={Style.titulo2}>Usuario</p>
				<div className={Style.inputcont}>
					<FontAwesomeIcon icon={faUser} className={Style.icon} />
					<input
						className={Style.input}
						type="email"
						placeholder="Usuario"
						onChange={(e) => setUsername(e.target.value)}
						onBlur={(e) => setUsername(e.target.value)}
					/>
				</div>

				<p className={Style.titulo2}>Contraseña</p>
				<div className={Style.inputcont}>
					<FontAwesomeIcon icon={passwordShown ? faUnlock : faLock } id={Style.pass} className={Style.icon} onClick={togglePassword} />
					<input
						className={Style.input}
						type={passwordShown ? "text" : "password"}
						placeholder="Password"
						id="contrasenia"
						onChange={(e) => setPassword(e.target.value)}
						onBlur={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className={Style.wrapper}>
					<button className={Style.button63} onClick={login}>Entrar</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
