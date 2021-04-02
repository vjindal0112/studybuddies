import styled from "styled-components";
import { Blue } from "../constants";
import { Link } from "react-router-dom";

export const Header = styled.div`
  background-image: ${`linear-gradient(${Blue}, ${Blue})`}; /*#00a0f9); */
  color: #fafafa;
  /* display: flex;
  align-items:center; */
  font-family: Futura;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding: 0px 40px;
  height: 14vh;
  min-height: 14vh;
`;

export const Headshot = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
`;

export const ContentDiv = styled.div`
  max-width: 40em;
  margin: 0 auto;
`;

export const SchoolLink = styled.a`
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  display: block;
  color: #333;
  text-decoration: none;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.25);
  padding: 24px;
  border-radius: 8px;
  width: 120px;
  margin: 12px;
`;

export const SchoolLogoDiv = styled.a`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-color: ${(props) => props.bgColor};
  box-shadow: 3px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.25);
  transition: .2s background-color;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;


// STARTING PRIVACY AND TERMS STYLES

export const Logo = styled.img`
  max-height: 30vh;
  margin-top: 18px;
`;

export const Texth1 = styled.h1`
  font-size: 32px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 32px;
    font-weight: 300;
  }
`;

export const Button = styled(Link)`
  border: 4px solid ${Blue};
  padding: 4px 8px;
  color: #333;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;

  transition: all 0.2s;
  &:hover {
    background-color: ${Blue};
    color: white;
  }
`;

export const List = styled.li`
  font-size: 20px;
  text-align: left;
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 50%;
  width: 50%;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;