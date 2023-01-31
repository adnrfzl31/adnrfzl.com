import React from "react"
import "../../Assets/Css/Pages/project.css"
import ImgProject1 from "../../Assets/Image/waysbucks.png"
import ImgProject2 from "../../Assets/Image/dumbsound.png"
import ImgProject3 from "../../Assets/Image/waystodo-mobile.jpg"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Project() {
  const navigate = useNavigate()
  const toDetail = (id) => {
    navigate("/Detail-Project/" + id)
  }

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
    <Container className="project" id="Project">
      <div className="pt-5 ps-4 text-start">
        <h2 className="fw-bold">PROJECT</h2>
      </div>
      <Row className="my-2 mx-3">
        {ListProject.map((data) => (
          <Col
            key={data?.id}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="my-3 d-flex justify-content-center"
          >
            <Card
              border="light"
              className="project-card"
              onClick={() => toDetail(data?.id)}
            >
              <Card.Img
                variant="top"
                alt={`${data.nameProject}-project`}
                src={data?.image}
                className="project-img"
              />
              <Card.Body>
                <Card.Title className="project-title">
                  {data?.nameProject}
                </Card.Title>
                <Card.Text className="project-desc">
                  {data?.description.slice(0, 150)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Project
