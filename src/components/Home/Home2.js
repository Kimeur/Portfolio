import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import { SiCodewars } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I discovered my passion for programming and have been steadily enhancing my expertise ever since.
              <br />
              <br />Proficient in 
              <i>
                <b className="purple"> Python and SQL, </b>
              </i>
              I rely on these languages as my main tools.
              <br />
              <br />
              My primary interests lie in 
              <i>
                <b className="purple"> data analysis, data ETL processes, and pipeline construction. </b> I am dedicated to crafting effective and scalable data solutions.{" "}
                
              </i>
              <br />
              <br />
              Whenever possible, I channel my enthusiasm for data engineering into utilizing tools such as <b className="purple">Pandas</b>, <b className="purple">SQLAlchemy</b>, <b className="purple">PySpark</b>, and <b className="purple">Apache Airflow</b>. 
              <br />
              <br />
              I also leverage cloud computing services on <b className="purple">Google Cloud Platform (GCP)</b> to boost scalability and performance. Additionally, I employ modern data visualization libraries like <b className="purple">Matplotlib</b>, as well as <b className="purple">Looker Studio</b> Looker, to bring insights to life.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: "50%" }}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/Kimeur"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/marouane-gazouzi-57840b72/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.codewars.com/users/Kimeur"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiCodewars />
              </a>
            </li>
          </ul>
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
