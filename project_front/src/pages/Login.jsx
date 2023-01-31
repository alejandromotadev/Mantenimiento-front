import Style from "./Login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";



const Login = () => {
	const [passwordShown, setPasswordShown] = useState(false);
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	  };
	return (
		<div className={Style.main}>
			<div className={Style.block}>
				<h1 className={Style.titulo}>Iniciar sesión</h1>

				<h1 className={Style.titlo2}>Usuario</h1>

				<div className={Style.inputcont}>
					<i class="fa fa-user icon"></i>
					<input
						className={Style.input}
						type="email"
						placeholder="Usuario"
					/>
				</div>

				<h1 className={Style.titulo2}>Contraseña</h1>

				<div className={Style.inputcont}>
					<i class="fa fa-unlock-alt"></i>
					<input
						className={Style.input}
						type={passwordShown ? "text" : "password"}
						placeholder="Password"
						id="contrasenia"
					/>
					<input type="checkbox" onClick={togglePassword}></input>
					
				</div>

				<div className={Style.wrapper}>
					<Link to="/proceso">
						{" "}
						<button className={Style.button63}>Entrar</button>{" "}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
