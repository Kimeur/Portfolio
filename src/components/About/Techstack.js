import React from "react";
import { Col, Row } from "react-bootstrap";
import { PiFileSqlLight } from "react-icons/pi";
import {
  SiGooglecloud,
  SiApachespark,
  SiTeradata,
  SiInformatica,
  SiMysql,
  SiApachehive,
  SiApachekafka,
  SiRabbitmq,
  SiLinux,
} from "react-icons/si";
import { GrOracle } from "react-icons/gr";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { SiGooglebigquery } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <span className="tooltip-text">Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <PiFileSqlLight />
        <span className="tooltip-text">SQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="tooltip-text">Javascript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span className="tooltip-text">NodeJS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className="tooltip-text">Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglebigquery />
        <span className="tooltip-text">BigQuery</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrOracle />
        <span className="tooltip-text">Oracle</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <span className="tooltip-text">Google Cloud Platform</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span className="tooltip-text">MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
        <span className="tooltip-text">Spark</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTeradata />
        <span className="tooltip-text">Teradata</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInformatica />
        <span className="tooltip-text">Informatica</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <span className="tooltip-text">PostgreSQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <span className="tooltip-text">MySQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehive />
        <span className="tooltip-text">Hive</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
        <span className="tooltip-text">Kafka</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="tooltip-text">React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq />
        <span className="tooltip-text">RabbitMQ</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <span className="tooltip-text">Linux</span>
      </Col>
    </Row>
  );
}

export default Techstack;
