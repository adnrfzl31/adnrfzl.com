import React from "react"
import {
  ButtonGroup,
  Col,
  Container,
  Image,
  Navbar,
  Row,
} from "react-bootstrap"
import { FaArrowLeft } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"
import "../Assets/Css/Pages/detailProject.css"
import ImgProject2 from "../Assets/Image/dumbsound.png"
import ImgProject1 from "../Assets/Image/waysbucks.png"
import ImgProject3 from "../Assets/Image/waystodo-mobile.jpg"

function DetailProject() {
  const { id } = useParams()

  const ListProject = [
    {
      id: "waysbucks",
      nameProject: "Waysbucks",
      image: ImgProject1,
      description:
        "Waysbucks is a digital platform where you can shop for Drinks by simply using the application",
      completed: "18 Dec 2022",
      technologies: "React Js dan Golang",
      website: "https://waysbucks-fe-fix.vercel.app/",
      deployFE: "https://github.com/adnrfzl31/Waysbucks_FE",
      deployBE: "https://github.com/adnrfzl31/Waysbucks_BE",
    },
    {
      id: "dumbsound",
      nameProject: "Dumbsound",
      image: ImgProject2,
      description:
        "Dumbsound is a web-based application that can be run on any browser such as chrome. This platform offers online music playback services, with the best line-up of high-quality music that is comfortable for users to enjoy.",
      completed: "18 Dec 2022",
      technologies: "React Js dan Golang",
      website: "https://dumbsound-fe-fix.vercel.app/",
      deployFE: "https://github.com/adnrfzl31/Dumbsound_FE",
      deployBE: "https://github.com/adnrfzl31/dumbways_BE",
    },
    {
      id: "waystodo-mobile",
      nameProject: "Waystodo",
      image: ImgProject3,
      description:
        "Waystodo is a mobile application to record an activity or material",
      completed: "Jan 06, 2023",
      technologies: "React Native dan Kontenbase",
      website: null,
      deployFE: "https://github.com/adnrfzl31/ways-todo",
      deployBE: null,
    },
  ]
  return (
    <div>
      {ListProject.map((data) => (
        <div key={data.id}>
          {data.id === id && (
            <div>
              <Navbar bg="light" expand="lg">
                <Container fluid>
                  <Navbar.Brand as={Link} to="/">
                    <ButtonGroup className="w-100 my-2">
                      <FaArrowLeft className="mt-2 mx-3 detail-project-button-back" />
                      {/* <p></p> */}
                      {data.nameProject}
                    </ButtonGroup>
                  </Navbar.Brand>
                </Container>
              </Navbar>
              <Container className="detail-project py-4 px-3">
                <Col>
                  <Row>
                    <Col>
                      <Image className="detail-project-img" src={data.image} />
                    </Col>
                    <Col style={{}}>
                      <h3 className="my-3">{data.nameProject}</h3>
                      <p className="text-start detail-project-desc">
                        {data.description}
                      </p>
                      <Row>
                        <Row className="text-start">
                          <p className="fw-bold">
                            Completed :{" "}
                            <span className="detail-project-text">
                              {data.completed}
                            </span>
                          </p>
                        </Row>
                        <Row className="text-start">
                          <p className="fw-bold">
                            Technologies :{" "}
                            <span className="detail-project-text">
                              {data.technologies}
                            </span>
                          </p>
                        </Row>
                        <Row className="text-start">
                          <p className="fw-bold">
                            Website :{" "}
                            <span className="detail-project-text">
                              {data.website}
                            </span>
                          </p>
                        </Row>
                        <Row className="text-start">
                          <p className="fw-bold">
                            Deploy :{" "}
                            <span className="detail-project-text">
                              <p className="ps-4">
                                1. Frontend : {data.deployFE}
                              </p>
                              <p className="ps-4">
                                2. Backend : {data.deployBE}
                              </p>
                            </span>
                          </p>
                        </Row>
                        \
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Container>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default DetailProject
