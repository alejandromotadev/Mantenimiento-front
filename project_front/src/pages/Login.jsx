import Style from "./Login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser, faUnlock } from '@fortawesome/free-solid-svg-icons'


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
					<FontAwesomeIcon icon={faUser} className={Style.icon} />
					<input
						className={Style.input}
						type="email"
						placeholder="Usuario"
					/>
				</div>

				<h1 className={Style.titulo2}>Contraseña</h1>

				<div className={Style.inputcont}>
					<FontAwesomeIcon icon={passwordShown ? faUnlock : faLock } className={Style.icon} onClick={togglePassword} />
					<input
						className={Style.input}
						type={passwordShown ? "text" : "password"}
						placeholder="Password"
						id="contrasenia"
					/>
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
