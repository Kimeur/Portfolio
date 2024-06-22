import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImCloud } from "react-icons/im";
import { IoMdCodeWorking } from "react-icons/io";
import { TbDatabaseShare } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

function AboutCard() {
  const handleEmailClick = () => {
    window.location.href = "mailto:marouanegazouzi@gmail.com";
  };
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            <p style={{ textAlign: "left" }}>
              Hi Everyone, I am <span className="purple">Marouane</span> from{" "}
              <span className="purple">
                the world of Retail and Telecommunications.<br />
              </span>
              I am a <span className="purple">Senior Data Engineer</span> with over 6 years of experience.
              <br />
              <br />
              🤵 <b>I specialize in addressing various challenges:</b>
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Assisting in defining your needs
              </li>
              <li className="about-activity">
                <ImPointRight /> Designing and writing Technical Specifications
              </li>
              <li className="about-activity">
                <ImPointRight /> Designing data models and processes
              </li>
              <li className="about-activity">
                <ImPointRight /> Developing Data Pipelines
              </li>
              <li className="about-activity">
                <ImPointRight /> Testing solutions (Unit, End-to-End)
              </li>
              <li className="about-activity">
                <ImPointRight /> Creating and orchestrating scheduled jobs
              </li>
              <li className="about-activity">
                <ImPointRight /> Build & Run
              </li>
              <li className="about-activity">
                <ImPointRight /> Maintaining tools
              </li>
            </ul>
            <p style={{ textAlign: "justify" }}>
              🦾 Here are some of the tools I am proficient in:
            </p>
            <ul>
              <li className="about-activity">
                <IoMdCodeWorking />{" "}
                <span className="purple">Data Analysis</span>: Python, SQL,
                Excel VBA
              </li>
              <li className="about-activity">
                <ImCloud /> <span className="purple">Cloud</span> : GCP, AWS
              </li>
              <li className="about-activity">
                <TbDatabaseShare /> <span className="purple">Databases</span>:
                Teradata, BigQuery, CloudSQL, MySQL, MariaDB, Hive, Oracle,
                PostgreSQL
              </li>
              <li className="about-activity">
                <CiGlobe /> <span className="purple">BigData</span>: Hadoop,
                Spark, Kafka, RabbitMQ
              </li>
              <li className="about-activity">
                <HiOutlineComputerDesktop /> <span className="purple">BI</span>:
                ETL, Informatica PowerCenter, Dataiku
              </li>
              <li className="about-activity">
                <FaChartLine /> <span className="purple">Visualization</span>:
                PowerBI, ChartJS, Looker
              </li>
            </ul>
            <p style={{ textAlign: "justify" }}>
              📞 Contact me through the messaging system with your projects to
              arrange a session to discuss your needs.
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  onClick={handleEmailClick}
                  className="fork-btn-inner"
                  style={{
                    justifyContent: "center",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    backgroundColor: "#6200EA",
                  }}
                >
                  Contact me <MdOutlineMail />
                </button>
              </div>
            </p>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
