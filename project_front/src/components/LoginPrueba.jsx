import { Link } from "react-router-dom";

const LoginPrueba = () => {
	return (
	<div>
		<h1>Hola desde el login</h1>
		<Link to="/home"><button>Proceso</button></Link>
	</div>
	);
};

export default LoginPrueba;
