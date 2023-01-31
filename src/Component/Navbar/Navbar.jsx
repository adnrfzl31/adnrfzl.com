import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import {
  ButtonGroup,
  Container,
  Image,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { MdContacts, MdWork } from "react-icons/md"
import { TbSchool } from "react-icons/tb"
import { Link } from "react-router-dom"
import "../../Assets/Css/Navbar/navbar.css"
import Logo from "../../Assets/Image/Logo.png"

function Navs() {
  return (
    <Container>
      <Navbar.Offcanvas
        id="offcanvasNavbar-expand-lg"
        aria-labelledby="offcanvasNavbarLabel-expand-lg"
        placement="start"
        scroll={true}
        backdrop={false}
        show={true}
        className="offcanvas-nav"
      >
        <Offcanvas.Header className="fw-bold d-flex justify-content-center row">
          <Offcanvas.Title
            as={Link}
            to="/"
            id="offcanvasNavbarLabel-expand-lg"
            className="w-100 d-flex justify-content-center"
          >
            <Image src={Logo} className="img-fluid w-50 h-50" />
          </Offcanvas.Title>
          <Offcanvas.Title
            id="offcanvasNavbarLabel-expand-lg"
            className="w-100 text-center offcanvas-title"
          >
            Portfolio Ade Nur Faizal
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="justify-content-center mt-3">
          <ButtonGroup className="w-100 my-2">
            <AiOutlineHome className="mx-1 offcanvas-icon" />
            <Nav.Link href="#home" className="mx-3">
              Home
            </Nav.Link>
          </ButtonGroup>
          <ButtonGroup className="w-100 my-2">
            <AiOutlineUser className="mx-1 offcanvas-icon" />
            <Nav.Link href="#About" className="mx-3">
              About
            </Nav.Link>
          </ButtonGroup>
          <ButtonGroup className="w-100 my-2">
            <TbSchool className="mx-1 offcanvas-icon" />
            <Nav.Link href="#Experience" className="mx-3">
              Experience
            </Nav.Link>
          </ButtonGroup>
          <ButtonGroup className="w-100 my-2">
            <MdWork className="mx-1 offcanvas-icon" />
            <Nav.Link href="#Project" className="mx-3">
              Project
            </Nav.Link>
          </ButtonGroup>
          <ButtonGroup className="w-100 my-2">
            <MdContacts className="mx-1 offcanvas-icon" />
            <Nav.Link href="#Contact" className="mx-3">
              Contact
            </Nav.Link>
          </ButtonGroup>
        </Offcanvas.Body>
        <Offcanvas.Body className="offcanvas-footer">
          <Offcanvas.Title className="text-center offcanvas-footer-title">
            © 2023 adnrfzl
          </Offcanvas.Title>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  )
}

export default Navs
