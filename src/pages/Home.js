import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../StudyBuddyLogo.png";
import { Helmet } from "react-helmet";

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
`;

const Logo = styled.img`
  max-height: 40vh;
  margin-top: 30px;
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
  top:0%;
  width: 100%;
  background-color: #FFCB05;
  color: #00274C;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  animation: ${drop} 6s ease-out;
  opacity: 0;
`



export default function Home() {
  const [userCount, setUserCount] = useState(6000);

  // useEffect(() => {
  //   fetch(
  //     "https://script.google.com/macros/s/AKfycbxP3gykUXOcNunlc7uvzvwPiBcL1h44XzxSjsn3Vvu1vW0XB7U/exec"
  //   )
  //     .then((snapshot) => snapshot.json())
  //     .then((num) => setUserCount(parseInt(num.number)));
  // });

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
      <div className="App" style={{ height: "88vh", minHeight: "88vh" }}>
        <Logo src={logo} />
        <Heading>StudyBuddies</Heading>
        </div>
    </>
  );
}
