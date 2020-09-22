import React from "react";
import { Row, Col } from "react-grid-system";
import { Headshot } from "./styles";
import styled from "styled-components";

const ContentDiv = styled.div`
  margin: 20px;
`;

const Title = styled.p`
  font-weight: bold;
`;

const Person = ({ picUrl, title }) => {
  return (
    <Col>
      <Headshot src={picUrl} />
      <Title>{title}</Title>
    </Col>
  );
};

export default Person;
