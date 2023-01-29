import Style from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
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
						type="password"
						placeholder="Password"
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
