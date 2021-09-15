import axios from "axios";
import React, { useState, useEffect, useInputState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Col, NavDropdown, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Usuarios from "./routers/UsuariosRouters";
import Formulario from "./routers/FormularioRouters";
import Loading from "./components/Loading";

import MyVerticallyCenteredModal from "./components/MyVerticallyCenteredModal";
import MyOffSet from "./components/MyOffSet";
import MyButton from "./components/MyButton";

function App() {
  const [nombres, setNombres] = useState([]);
  const [state, setState] = useState("");
  const [stateModel, setStateModel] = useState({
    name: "",
    lastName: "",
    age: 0
  });

  function setData(e) {
    switch (e.target.id) {
      case "_name_":
        stateModel.name = (e.target.value);
        break;
      
      case "_lastName_":
        stateModel.lastName = (e.target.value);
        break;

      case "_age_":
        stateModel.age = (e.target.value);
        break;
    
      default:
        break;
    }

    console.log(stateModel);
  }

  // const [modalShow, setModalShow] = useState(false);
  // const [btnActivo, setBtnActivo] = useState("Cargando");
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);

  // const handleSelect = () => {
  //   setModalShow(true);
  // };

  // const handleSelectFromButton = (props) => {
  //   console.log(props.target.id);
  //   setBtnActivo(props.target.id);
  //   setModalShow(true);
  // };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {});
  }, []);

  return (
    <Router>
      <Navbar
        style={{ paddingLeft: 20, paddingRight: 20 }}
        sticky="top"
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="md"
      >
        <LinkContainer to="/Usuarios">
          <Navbar.Brand href="/">
            {" "}
            <img
              alt=""
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            SAI
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/usuarios">
              <Nav.Link>Usuarios</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/formulario">
              <Nav.Link>Formulario</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/Formulario">
              <Nav.Link>{btnActivo}</Nav.Link>
            </LinkContainer> */}
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              {/* <NavDropdown.Item onClick={() => handleShow()}>
                Canva
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleSelect()}>
                Modal
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>

          {/* <MyButton /> */}
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path={"/usuarios"}>
          <Container style={{ padding: 30 }}>
            <u>
              <Usuarios data={nombres}/>{" "}
            </u>
          </Container>
        </Route>
        <Route path={"/Formulario"}>
          {/* Another way to use the onChange
          <div>
          onChange={(e) => setData(e)}
          The input code goes here
          </div> */}
          <Container style={{ padding: 20 }}>
            <input id="_name_" placeholder={"Nombre"} onChange={(e) => setData(e)}/>
            <input id="_lastName_" placeholder={"Apellido"} onChange={(e) => setData(e)}/>
            <input id="_age_" placeholder={"Edad"} onChange={(e) => setData(e)}/>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
