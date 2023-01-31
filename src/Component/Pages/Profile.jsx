import React from "react"
import { Button, Card, CardGroup, Container } from "react-bootstrap"
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai"
import { Link } from "react-router-dom"
import "../../Assets/Css/Pages/profile.css"
import Img from "../../Assets/Image/AdeNF.jpg"

function Profile() {
  return (
    <Container className="bg-profile py-2">
      <div className="d-flex justify-content-center align-items-center py-4 ">
        <Card className="profile-card">
          <Card.Img className="profile-img" src={Img} />
          <Card.Body className="my-4">
            <Card.Title className="color-text fw-bold profile-title">
              Ade Nur Faizal
            </Card.Title>
            <Card.Text className="color-text">
              I Am Frontend Developer
            </Card.Text>
            <CardGroup className="justify-content-center align-content-center my-4">
              <Link to="https://www.instagram.com/adnrfzl31/" target="_blank">
                <AiOutlineInstagram
                  className="mx-1 profile-icon"
                  color="white"
                />
              </Link>
              <Link to="https://twitter.com/faizal_ars31" target="_blank">
                <AiOutlineTwitter className="mx-1 profile-icon" color="white" />
              </Link>
              <Link
                to="https://www.facebook.com/Adenurfaizal31/"
                target="_blank"
              >
                <AiFillFacebook className="mx-1 profile-icon" color="white" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/ade-nur-faizal/"
                target="_blank"
              >
                <AiFillLinkedin className="mx-1 profile-icon" color="white" />
              </Link>
              <Link to="https://github.com/adnrfzl31" target="_blank">
                <AiOutlineGithub className="mx-1 profile-icon" color="white" />
              </Link>
            </CardGroup>
            <CardGroup className="justify-content-center my-3">
              <Button href="#Contact" className="py-1 px-4 profile-button">
                Here me
              </Button>
            </CardGroup>
            <CardGroup className="scroll-down mt-5">
              <Card.Link href="#About" className="mouse-wrapper">
                <Card.Text className="color-text">Scroll Kebawah</Card.Text>
                <CardGroup className="mouse">
                  <Card.Text className="wheel"></Card.Text>
                </CardGroup>
              </Card.Link>
            </CardGroup>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default Profile
