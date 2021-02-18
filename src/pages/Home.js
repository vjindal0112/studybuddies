import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../StudyBuddyLogo.png";
import { Helmet } from "react-helmet";
import { Row, Col } from "react-grid-system";
import Person from "./Person";
import {
  Headshot,
  ContentDiv,
  SchoolLink,
  SchoolLogoDiv,
  Header,
} from "./styles";
import ReactGA from "react-ga";

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

const CenteredHeading = styled.h1`
  font-size: 48px;
  margin-bottom: 48px;
  margin-top: 40px;
  text-align: center;
`;

const Message = styled.h1`
  font-size: 48px;
  margin-bottom: 24px;
  margin-top: 40px;
  text-align: left;
  padding-left: 80px;
  padding-right: 80px;
  @media (max-width: 1200px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const WorkImg = styled.img`
  width: 40vw;
  margin: 20px;
  @media (max-width: 1200px) {
    width: 50vw;
  }
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const SubMessage = styled.p`
  padding-left: 80px;
  padding-right: 80px;
  @media (max-width: 1200px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 40px;
  text-align: left;
  color: #555;
`;

const Heading = styled.h1`
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  padding: 10px;
  font-weight: 300;
  margin: 0;
`;

const Logo = styled.img`
  max-height: 10vh;
  margin: 0 28px;
  margin-left: 90px;
  @media (max-width: 1200px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media (max-width: 768px) {
    margin-left: 0px;
    margin-right: 20px;
  }
  /* margin-top: 20px; */
`;

const SchoolLogo = styled.img`
  max-height: ${(props) => props.mheight};
`;

const Section = styled.section`
  text-align: center;
  padding: 50px;
  @media (max-width: 768px) {
    padding: 20px;
  }
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
          {
            name: "og:image",
            content: "https://studybuddies.ai/SocialSharing.png",
          },
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
      <Header>
        <Logo src={logo} />
        <Heading>StudyBuddies</Heading>
      </Header>

      <Section backgroundColor="#fff">
        <Row>
          <Col>
            <Message>Find Buddies to Study With</Message>
            <SubMessage>
              Zoom classes make it tough to find a study group. Sign up and get
              matched with people you vibe with.
            </SubMessage>
          </Col>
          <Col>
            <WorkImg src="work_time.svg" />
          </Col>
        </Row>
        <ContentDiv>
          <CenteredHeading>The Colleges</CenteredHeading>
          <Row>
            {/* <Col>
              <SchoolLogo src="/StudyBuddyLogo.png" />
            </Col> */}
            <Col>
              <Center>
                <SchoolLogoDiv
                  bgColor="#00274C"
                  hoverColor="#00577C"
                  target="_blank"
                  href="https://umichstudybuddies.com"
                  onClick={() => {
                    ReactGA.event({
                      category: "Navigation",
                      action: "Click",
                      label: "UMich",
                    });
                  }}
                >
                  <SchoolLogo mheight="60px" src="./blockM.png" />
                </SchoolLogoDiv>
              </Center>
            </Col>
            {/* <Col>
              <SchoolLogo src="/UChicagoStudyBuddyLogo.png" />
            </Col> */}
            <Col>
              <Center>
                <SchoolLogoDiv
                  bgColor="#D6D6CE"
                  hoverColor="#F6F6F2"
                  target="_blank"
                  href="https://uchicago.studybuddies.ai"
                  onClick={() => {
                    ReactGA.event({
                      category: "Navigation",
                      action: "Click",
                      label: "UChicago",
                    });
                  }}
                >
                  <SchoolLogo mheight="80px" src="./uchicagoShield.png" />
                </SchoolLogoDiv>
              </Center>
            </Col>
            {/* <Col>
              <SchoolLogo src="/UCLAStudyBuddyLogo.png" />
            </Col> */}
            <Col>
              <Center>
                <SchoolLogoDiv
                  bgColor="#2774AE"
                  hoverColor="#4794CE"
                  style={{
                    fontFamily: "Helvetica",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "24px",
                    color: "#fafafa",
                    letterSpacing: ".5px",
                  }}
                  target="_blank"
                  href="https://ucla.studybuddies.ai"
                  onClick={() => {
                    ReactGA.event({
                      category: "Navigation",
                      action: "Click",
                      label: "UCLA",
                    });
                  }}
                >
                  UCLA
                </SchoolLogoDiv>
              </Center>
            </Col>
          </Row>
        </ContentDiv>
      </Section>
      <Section backgroundColor="#f2f2f6">
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
          <Row>
            <Person picUrl="./Bradley.jpg" title="Bradley Harrison" />
          </Row>
          <Subtitle>Engineers</Subtitle>
          <Row>
            <Person picUrl="./Jacob.jpg" title="Jacob Stanley" />
          </Row>
        </ContentDiv>
      </Section>
    </>
  );
}
