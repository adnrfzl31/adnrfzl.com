import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { IoMdSchool } from "react-icons/io"
import { MdWork } from "react-icons/md"
import "../../Assets/Css/Pages/experience.css"

function Experience() {
  return (
    <Container className="experience" id="Experience">
      <div className="pt-5 ps-4 text-start">
        <h2 className="fw-bold">EXPERIENCE</h2>
      </div>
      <Row className="py-5 px-4 ">
        <Col>
          <Card className="pt-4 experience-card">
            <Card.Body className="px-5">
              <ul className="timeline-with-icons">
                <li className="timeline-item mb-5">
                  <span className="timeline-icon">
                    <IoMdSchool />
                  </span>
                  <div>
                    <h5 className="text-start fw-bold">
                      Talent DumbWays Indonesia Technology
                    </h5>
                    <p className="text-start text-muted mb-2 fw-bold">
                      Oct 2022 - Dec 2022
                    </p>
                    <p className="text-start text-muted">
                      Learn the technological systems of the Golang and React JS
                      programming languages by implementing industryrequired
                      website projects.
                    </p>
                  </div>
                </li>

                <li className="timeline-item mb-5">
                  <span className="timeline-icon">
                    <IoMdSchool />
                  </span>
                  <div>
                    <h5 className="text-start fw-bold">SMKN 3 Tegal</h5>
                    <p className="text-start text-muted mb-2 fw-bold">
                      Jun 2019 - Jun 2022
                    </p>
                    <p className="text-start text-muted">
                      Learn fundamentally the logic of the algorithm and the
                      implementation of making pcb designs using the eagle
                      application.
                    </p>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="pt-4 experience-card">
            <Card.Body className="px-5">
              <ul className="timeline-with-icons">
                <li className="timeline-item mb-5">
                  <span className="timeline-icon">
                    <MdWork />
                  </span>
                  <div>
                    <h5 className="text-start fw-bold">
                      Prakerin CV Mitra Mapan
                    </h5>
                    <p className="text-start text-muted mb-2 fw-bold">
                      Apr 2021 - Sep 2021
                    </p>
                    <p className="text-start text-muted">
                      Design and assemble PCB on Electronic PCB Assembly Service
                      Products.
                    </p>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Experience
