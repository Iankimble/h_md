import React from "react";
import { Jumbotron, Container, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainImg from "../images/organizer-791939_1920.jpg";

const Main = () => (
  <div style={{ fontFamily: "IBM Plex Serif" }}>
    <Jumbotron
      fluid
      style={{
        height: "70vh",
        backgroundImage: `url(${mainImg})`,
        backgroundSize: "cover",
        marginLeft: "20px",
        marginRight: "20px"
      }}
    >
      <Container>
        <h1 style={{ textAlign: "center" }}>Welcome to My Day</h1>
        <h5 style={{ textAlign: "center" }}>
          {" "}
          <i>Plan, Achieve, fight another day</i>{" "}
        </h5>
      </Container>
    </Jumbotron>

    <Container>
      <Row>
        <Col
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <div
            style={{
              margin: "auto",
              width: "300px",
              marginTop: "1px",
              fontFamily: "IBM Plex Serif"
            }}
          >
            <Link to="/signup">
              <Button
                variant="primary"
                style={{
                  margin: "auto",
                  width: "300px",
                  marginTop: "1px",
                  backgroundColor: "#6e6e6dff",
                  border: "none"
                }}
              >
                Sign up
              </Button>
            </Link>
          </div>
        </Col>

        <Col
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <div
            style={{
              margin: "auto",
              width: "300px",
              marginTop: "1px",
              fontFamily: "IBM Plex Serif"
            }}
          >
            <Link to="/signin">
              <Button
                variant="primary"
                style={{
                  margin: "auto",
                  width: "300px",
                  marginTop: "1px",
                  backgroundColor: "#6e6e6dff",
                  border: "none"
                }}
              >
                Sign in
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Main;
