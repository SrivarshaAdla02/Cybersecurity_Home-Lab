import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Incident Response – Apex Financials"
              description="Investigated two cyberattacks targeting Apex Financials using Splunk, IDS, firewall logs, and MITRE ATT&CK. Covered phishing to ransomware and web shell-based intrusion scenarios with a detailed forensic timeline."
              ghLink="https://github.com/SrivarshaAdla02/Incident-Response-Analysis-Apex-Financials-Spring-2025"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SCADA & OT Cybersecurity Labs"
              description="Built and analyzed a virtual industrial cybersecurity lab using pfSense, Snort, Wazuh, ELK stack, and Security Onion. Simulated attacks and defense mechanisms for SCADA systems with network segmentation and monitoring."
              ghLink="https://github.com/SrivarshaAdla02/Cybersecurity-Lab-Series-for-SCADA-OT-Network-Monitoring-and-Defense"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor built with React.js. Supports HTML, CSS, JS editing and preview with auto-save using Local Storage."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Plant disease classification model using CNN and PyTorch. Trained on Kaggle data with 98% accuracy using ResNet34 to classify 38 types of leaf conditions."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI For Social Good"
              description="Natural Language Processing for suicide-related content detection on social media platforms to aid early mental health intervention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Detection with CNN"
              description="Used OpenCV and CNN (FER-2013 dataset) to predict facial emotions. Achieved ~60% accuracy and integrated with face detection for real-time emotion classification."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
