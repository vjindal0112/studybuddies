import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../StudyBuddyLogo.png";
import { Helmet } from "react-helmet";
import { Row, Col } from "react-grid-system";
import Person from "./Person";
import { Headshot, ContentDiv, SchoolLink } from "./styles";

const Button = styled.a`
  border: 4px solid #ffcb05;
  padding: 12px;
  margin: 24px;
  color: #fafafa;

  transition: all 0.5s;
  &:hover {
    background-color: #ffcb05;
  }
`;

const Heading = styled.h1`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  padding: 10px;
  font-weight: 300;
  margin-top: 0px;
`;

const Logo = styled.img`
  max-height: 30vh;
  margin-top: 20px;
`;

const SchoolLogo = styled.img`
  max-height: 16vh;
`;

const Section = styled.section`
  text-align: center;
  padding: 50px;
  color: #333;
  background-color: ${(props) => props.backgroundColor};
`;

const TextDiv = styled.div`
  max-width: 40em;
  margin: 0 auto;
  font-size: 18px;
  text-align: justify;
  text-justify: inter-word;
`;

const UserCount = styled.div`
  margin: 0px 8px;
  color: #ffcb05;
  font-weight: 800;
`;

const drop = keyframes`
  0% {
    height: 0px;
    opacity: 0;
  }

  20% {
    height: 40px;
    opacity: 1;
  }

  90% {
    height: 40px;
    opacity: 1;
  }

  100% {
    height: 0px;
    opacity: 0;
    display: none;
  }
`;

const Banner = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  background-color: #ffcb05;
  color: #00274c;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  animation: ${drop} 6s ease-out;
  opacity: 0;
`;

const Subtitle = styled.h2`
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  padding: 10px;
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const Card = styled.div`
//   box-shadow: 3px 3px 3px #999;
//   border-radius: 4px;
//   padding: 10px;
//   /* border: 2px solid #333; */

// `

export default function Home() {
  return (
    <>
      <Helmet
        title="StudyBuddies"
        meta={[
          {
            name: "description",
            content:
              "Get paired with study buddies in your class. We only match you with people we know you will vibe with.",
          },
          {
            name: "og:title",
            content: "StudyBuddies",
          },
          {
            name: "og:description",
            content:
              "Get paired with study buddies in your class. We only match you with people we know you will vibe with.",
          },
          { name: "og:url", content: "https://studybuddies.ai" },
          // {
          //   name: "og:image",
          //   content: "https://studybuddies.ai/SocialSharing.png",
          // },
          {
            name: "twitter:url",
            content: "https://studybuddies.ai",
          },
          {
            name: "twitter:title",
            content: "StudyBuddies",
          },
          {
            name: "twitter:description",
            content: "Find study buddies in your classes",
          },
          // {
          //   name: "twitter:image",
          //   content: "https://ucla.studybuddies.ai/SocialSharing.png",
          // },
        ]}
      >
        {/* <link rel="canonical" href="https://umichstudybuddies.com/" /> */}
      </Helmet>
      {/* <Banner>Only Open for SM 203!</Banner> */}
      <div className="header" style={{ height: "50vh", minHeight: "50vh" }}>
        <Logo src={logo} />
        <Heading>StudyBuddies</Heading>
      </div>

      <Section backgroundColor="#fefefe">
        <ContentDiv>
          <Row>
            <Col>
              <SchoolLogo src="/StudyBuddyLogo.png" />
            </Col>
            <Col>
              <Center>
                <SchoolLink href="https://umichstudybuddies.com">
                  UMich
                </SchoolLink>
              </Center>
            </Col>
          </Row>
          <Row>
            <Col>
              <SchoolLogo src="/UChicagoStudyBuddyLogo.png" />
            </Col>
            <Col>
              <Center>
                <SchoolLink href="https://uchicago.studybuddies.ai">
                  UChicago
                </SchoolLink>
              </Center>
            </Col>
          </Row>
          <Row>
            <Col>
              <SchoolLogo src="/UCLAStudyBuddyLogo.png" />
            </Col>
            <Col>
              <Center>
                <SchoolLink href="https://ucla.studybuddies.ai">
                  UCLA
                </SchoolLink>
              </Center>
            </Col>
          </Row>
        </ContentDiv>
      </Section>
      <Section backgroundColor="#f2f2f2">
        <ContentDiv>
          <Subtitle>The Team</Subtitle>
          <Row>
            <Person picUrl="./Varun.jpg" title="Varun Jindal" />
            <Person picUrl="./Sam.jpg" title="Sam Forman" />
          </Row>
          <br />

          <Subtitle>Marketing Directors</Subtitle>
          <Row>
            <Person picUrl="./Tarika.jpg" title="Tarika Mane" />
            <Person picUrl="./Ankita.jpg" title="Ankita Katukota" />
          </Row>
        </ContentDiv>
      </Section>
    </>
  );
}
