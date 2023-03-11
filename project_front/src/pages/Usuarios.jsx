import Style from "./Usuarios.module.css";
import { axiosInstance } from "../services/axios";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Navbar from "../components/NavItems";
import { MultiSelect } from "react-multi-select-component";
import { faPen, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Usuarios = () => {
  // const [data, setData] = useState([]);
  const data = [
    {
      id: 1,
      nombre: "Azul Briones",
      rol: "Gestor de calidad",
      usuario: "azul",
      proyectos: [		
        { label: "Proyecto 1", value: 1 },
      { label: "Proyecto 2", value: 2 },
    ],
      password: "12345",
      creado: "11 Febrero, 2023",
    },
    {
      id: 2,
      nombre: "Gissele Zavala",
      rol: "Tester",
      creado: "15 Febrero, 2023",
      proyectos: [		
        { label: "Proyecto 1", value: 1 },
      { label: "Proyecto 2", value: 2 },
    ],
      password: "12345",
    },
  ];

  	//opciones para proyectos con multiselect
	const options = [
		{ label: "Proyecto 1", value: 1 },
		{ label: "Proyecto 2", value: 2 },
		{ label: "Proyecto 3", value: 3 },
		{ label: "Proyecto 4", value:4} //para poner una opcion que ya venga marcada, primero debe existir en las opciones disponibles
	];

  useEffect(() => {
    axiosInstance
      .get("insert-url", {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // setData(response.data.pay_load);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const crearUsuario = () => {
    if (usuario !== null && usuario !== "") {
      let postData = {
        id_users: 1,
        user: usuario,
        name: nombre,
        rol: rol,
        proyectos: proyectos,
        password: password,
      };
      axiosInstance
        .post("insert-url", postData, {
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((respuesta) => {
          console.log(respuesta);
          window.location = "/a-url";
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("No username provided");
    }
  };

  const updateUser = (id) => {
    axiosInstance
      .put("insert-url" + id, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((respuesta) => {
        console.log(respuesta);
        alert("Se actualizó el usuario");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteUser = (id) => {
    axiosInstance
      .delete("insert-url" + id, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((respuesta) => {
        console.log(respuesta);
        alert("Se borro el usuario");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  //Modal compartido
  const openModal = (op, usuario) => {
    handleOpenModal();
    setNombre("");
    setRol("");
    setUser("");
    setPassword("");
    setProyectos([]);
    setOpcion(op);

    if (op === 1) {
      setTituloModal("Nuevo usuario");
      setTituloBoton("Crear usuario");
    } else if (op === 2) {
      setTituloModal("Editar usuario");
      setTituloBoton("Actualizar usuario");
      setId(usuario.id);
      setNombre(usuario.nombre);
      setRol(usuario.rol);
      setUser(usuario.usuario);
      setPassword(usuario.password);
      setProyectos(usuario.proyectos);
    }

    window.setTimeout(function () {
      document.getElementById("nombre").focus();
    }, 500);
  };

  const validar = () => {
    if (opcion === 1) {
      if (
        nombre.trim() === "" ||
        rol.trim() === "" ||
        usuario.trim() === "" ||
        password.trim() === ""
      ) {
        alert("Rellena todos los datos");
      } else {
        handleCloseModal();
        crearUsuario();
      }
    } else {
      handleCloseModal();
      updateUser(id);
    }
  };

  const [tituloBoton, setTituloBoton] = useState("");
  const [tituloModal, setTituloModal] = useState("");
  const [opcion, setOpcion] = useState(1);
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [usuario, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [proyectos, setProyectos] = useState([]);
  return (
    <div>
      <Navbar />
      <div className={Style.content}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h3 className={Style.titulo}>Proyectos | Usuarios</h3>
          <svg
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              cursor: "pointer",
            }}
            width="25"
            height="25"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 17.5C35 22.1413 33.1563 26.5925 29.8744 29.8744C26.5925 33.1563 22.1413 35 17.5 35C12.8587 35 8.40752 33.1563 5.12563 29.8744C1.84374 26.5925 0 22.1413 0 17.5C0 12.8587 1.84374 8.40752 5.12563 5.12563C8.40752 1.84374 12.8587 0 17.5 0C22.1413 0 26.5925 1.84374 29.8744 5.12563C33.1563 8.40752 35 12.8587 35 17.5ZM12.0225 13.1972H13.8272C14.1291 13.1972 14.3697 12.95 14.4091 12.6503C14.6059 11.2153 15.5903 10.1697 17.3447 10.1697C18.8453 10.1697 20.2191 10.92 20.2191 12.7247C20.2191 14.1137 19.4009 14.7525 18.1081 15.7238C16.6359 16.7934 15.47 18.0425 15.5531 20.0703L15.5597 20.545C15.562 20.6885 15.6206 20.8254 15.7229 20.9261C15.8252 21.0267 15.963 21.0831 16.1066 21.0831H17.8806C18.0257 21.0831 18.1648 21.0255 18.2673 20.9229C18.3699 20.8204 18.4275 20.6813 18.4275 20.5362V20.3066C18.4275 18.7359 19.0247 18.2787 20.6369 17.0559C21.9691 16.0431 23.3581 14.9188 23.3581 12.5584C23.3581 9.25313 20.5669 7.65625 17.5109 7.65625C14.7394 7.65625 11.7031 8.94687 11.4953 12.6569C11.4923 12.7275 11.5038 12.798 11.5291 12.8641C11.5543 12.9301 11.5928 12.9903 11.6422 13.0409C11.6916 13.0915 11.7508 13.1315 11.8162 13.1583C11.8816 13.1852 11.9518 13.1984 12.0225 13.1972ZM17.1084 27.2913C18.4428 27.2913 19.3594 26.4294 19.3594 25.2634C19.3594 24.0559 18.4406 23.2072 17.1084 23.2072C15.8309 23.2072 14.9012 24.0559 14.9012 25.2634C14.9012 26.4294 15.8288 27.2913 17.1084 27.2913Z"
              fill="black"
              fillOpacity="0.3"
            />
          </svg>
        </div>
        <hr
          style={{
            height: "1px",
            border: "none",
            backgroundColor: "#D0D0D0",
          }}
        />
        <div className={Style.nav}>
          <ul>
            <li>
              <p className={Style.userText}>Nombre </p>
            </li>
            <li>
              <p className={Style.userText}>Rol</p>
            </li>
            <li>
              <p className={Style.userText}>Creado</p>
            </li>
          </ul>
        </div>
        <div className={Style.contentbody}>
          <div className={Style.contenedorCards}>
            {data.length > 0 ? (
              <>
                {data.map((elemento, i) => (
                  <div className={Style.proyectCard} key={elemento.id}>
                    <div>
                      <FontAwesomeIcon icon={faCircleXmark} className={Style.buttonx} onClick={deleteUser.bind(this, elemento.id)}/>
                      <FontAwesomeIcon icon={faPen} className={Style.buttonx} onClick={() => openModal(2, elemento)}/>
                    </div>
                    <div className={Style.proyectCardUser}>
                      <ul>
                        <li>
                          <p style={{ color: "black" }}>{elemento.nombre}</p>
                        </li>
                        <li>
                          <p className={Style.userText}>{elemento.rol}</p>
                        </li>
                        <li>
                          <p className={Style.userText}>{elemento.creado}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2 style={{ margin: "0", fontWeight: "500", color: "grey" }}>
                  Aquí estarán todos tus usuarios
                </h2>
                <h2 style={{ margin: "0", color: "grey", fontWeight: "700" }}>
                  ¡Prueba a crear uno!
                </h2>
              </div>
            )}
          </div>

          <div className={Style.buttons}>
            <button className={Style.buttoncreate} onClick={() => openModal(1)}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.7083 24.2083H24.2083V41.7083H18.375V24.2083H0.875V18.375H18.375V0.875H24.2083V18.375H41.7083V24.2083Z"
                  fill="url(#paint0_linear_92_5)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_92_5"
                    x1="21.2917"
                    y1="0.875"
                    x2="21.2917"
                    y2="41.7083"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0085FF" />
                    <stop offset="1" stopColor="#00E0FF" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <h5 className={Style.buttontext}>Nuevo usuario</h5>
          </div>
        </div>
      </div>

      <div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>{tituloModal}</h2>
          <p>Nombre</p>
          <input
            value={nombre}
            className={Style.styleInput}
            placeholder="Escribe el nombre del usuario"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          ></input>
          <p>Rol</p>
          <select
            defaultValue={rol}
            name="rol-user"
            id="rol-user"
            className={Style.styleInputDrop}
            placeholder="Escribe el nombre del usuario"
            onChange={(e) => {
              setRol(e.target.value);
            }}
          >
            <option value="rol">rol</option>
            <option value="rol">rol</option>
            <option value="rol">rol</option>
            <option value="rol">rol</option>
          </select>
          <p>Proyectos</p>
						<MultiSelect
							className={Style.multi_select}
							options={options}
							showCheckbox
              value={proyectos}
							onChange={setProyectos}
							overrideStrings={{
								selectAll: "Escoger todos los proyectos",
								search: "Buscar proyecto",
								allItemsAreSelected: "Todos los proyectos",
								selectSomeItems: "Selecciona los proyectos",
							}}
						/>
          <p>Nombre de usuario</p>
          <input
            value={usuario}
            className={Style.styleInput}
            placeholder="Corto y sin espacios"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          ></input>
          <p>Contraseña</p>
          <input
            value={password}
            className={Style.styleInput}
            placeholder="Al menos 8 caracteres"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <div className={Style.createDiv}>
            <button className={Style.createProjectButton} onClick={validar}>
              {tituloBoton}
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Usuarios;
