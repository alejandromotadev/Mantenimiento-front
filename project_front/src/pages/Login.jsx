import Style from "./Login.module.css";
import { axiosInstance } from "../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const navigate = useNavigate()

	const login = async () => {
		if (username !== null) {
			if(password !==null) {
				let data = {
					"username" : username,
					"password" : password
				}
				await axiosInstance.post("user/login/",data)
				.then(res =>{
					console.log(res.data);
					localStorage.setItem('token',res.data.access_token)
					navigate('/proceso/2')
				})
				.catch(error => alert(error));
			}else{
				console.log("No password provided")
			}
		} else {
			console.log("No username provided");
		}
	};

	return (
		<div className={Style.main}>
			<div className={Style.block}>
				<h1 className={Style.titulo}>Iniciar sesión</h1>

				<h1 className={Style.titlo2}>Usuario</h1>

				<div className={Style.inputcont}>
					<i className="fa fa-user icon"></i>
					<input
						className={Style.input}
						type="email"
						placeholder="Usuario"
						onChange={(e) => setUsername(e.target.value)}
						onBlur={(e) => setUsername(e.target.value)}
					/>
				</div>

				<h1 className={Style.titulo2}>Contraseña</h1>

				<div className={Style.inputcont}>
					<i className="fa fa-unlock-alt"></i>
					<input
						className={Style.input}
						type="password"
						placeholder="Password"
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
