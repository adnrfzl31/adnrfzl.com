import React, { useState } from "react"
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap"
import "../../Assets/Css/Pages/contact.css"
import { useMutation } from "react-query"

function Contact() {
  const [DataContact, setDataContact] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  })

  const handleOnChange = (e) => {
    setDataContact({
      ...DataContact,
      [e.target.name]: e.target.value,
    })
  }

  const EmailClick = () => {
    let emailReceiver = "adenurfaizal31@gmail.com"
    location.href = "mailto:" + emailReceiver
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      let name = DataContact.Name
      // let email = DataContact.Email
      let subject = DataContact.Subject
      let message = DataContact.Message

      let emailReceiver = "adenurfaizal31@gmail.com"
      location.href =
        "mailto:" +
        emailReceiver +
        "?subject=" +
        subject +
        "&body= Hallo nama saya " +
        name +
        ", %0D%0A " +
        message
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <Container className="contact" id="Contact">
      <div className="pt-5 ps-4 text-start">
        <h2 className="fw-bold">GET IN TOUCH</h2>
      </div>
      <Row className="pt-5 px-4">
        <Col>
          <h4 className="text-start">Let's talk about everything!</h4>
          <p className="text-start">
            Don't like forms? Send me an{" "}
            <span onClick={EmailClick} className="contact-text">
              email
            </span>
            .
          </p>
          <div className="d-flex">👋</div>
          <div className="my-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4283112739014!2d106.7346096597612!3d-6.3013588570233745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1202c227c7f%3A0x55b285547291a43f!2sDumbWays%20Indonesia!5e0!3m2!1sid!2sid!4v1675169060282!5m2!1sid!2sid"
              width="450"
              height="300"
              className="contact-location"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </Col>
        <Col>
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <FloatingLabel className="my-4" controlId="Name" label="Your Name">
              <Form.Control
                onChange={handleOnChange}
                name="Name"
                type="text"
                placeholder="Your Name"
              />
            </FloatingLabel>
            <FloatingLabel className="my-4" controlId="Email" label="Email">
              <Form.Control
                onChange={handleOnChange}
                name="Email"
                type="email"
                placeholder="Email"
              />
            </FloatingLabel>
            <FloatingLabel className="my-4" controlId="Subject" label="Subject">
              <Form.Control
                onChange={handleOnChange}
                name="Subject"
                type="text"
                placeholder="Subject"
              />
            </FloatingLabel>
            <FloatingLabel className="my-4" controlId="Message" label="Message">
              <Form.Control
                as="textarea"
                onChange={handleOnChange}
                name="Message"
                placeholder="Leave a comment here"
                className="contact-textarea"
              />
            </FloatingLabel>
            <div className="d-flex">
              <Button className="py-2 px-5 contact-button" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
