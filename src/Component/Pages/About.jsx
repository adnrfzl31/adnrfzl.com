import React from "react"
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"
import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { VscTriangleLeft } from "react-icons/vsc"
import { Link } from "react-router-dom"
import "../../Assets/Css/Pages/about.css"
import Img from "../../Assets/Image/AdeNF.jpg"
import Cv from "../../Assets/Image/CV_Ade-Nur-Faizal.pdf"

function About() {
  return (
    <Container className="about" id="About">
      <div className="pt-5 ps-4 text-start">
        <h2 className="fw-bold">ABOUT</h2>
      </div>
      <Row className="pt-4 ">
        <Col sm={3}>
          <Image src={Img} className="rounded-circle about-img" />
        </Col>
        <Col sm={8}>
          <Card className="about-card">
            <VscTriangleLeft color="white" className="about-triangle-card" />
            <Card.Body className="mx-5 mt-3">
              <Card.Text className="about-text">
                Everyone used to call me Ade. I am interested in the IT field,
                especially IT hardware and software, accustomed to using MS.
                Office, WindowsOS. Have a passion in the IT field because the
                skills, abilities, and knowledge about IT are always developing
                and attracting attention. Trying to break the comfort zone by
                knowing new things because it's always evolving.
              </Card.Text>
            </Card.Body>
            <Card.Body className="d-flex mx-5 mb-3">
              <Button
                as={Link}
                to={Cv}
                target="_blank"
                className="py-2 px-5 about-button-download"
              >
                Download CV
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="py-5 px-5">
        <Row className="px-4 text-start">
          <h5 className="fw-bold">Technology</h5>
        </Row>
        <Row className="pt-3">
          <Col>
            <FaHtml5 className="about-icon" />
            <h4>Html5</h4>
          </Col>
          <Col>
            <FaCss3Alt className="about-icon" />
            <h4>Css</h4>
          </Col>
          <Col>
            <SiJavascript className="about-icon" />
            <h4>JavaScript</h4>
          </Col>
          <Col>
            <FaReact className="about-icon" />
            <h4>React js</h4>
          </Col>
          <Col>
            <TbBrandReactNative className="about-icon" />
            <h4>React Native</h4>
          </Col>
          <Col>
            <FaBootstrap className="about-icon" />
            <h4>Bootstrap</h4>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default About
