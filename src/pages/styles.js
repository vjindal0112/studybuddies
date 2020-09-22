import styled from 'styled-components';


export const Headshot = styled.img`
  border-radius: 50%;
  height: 200px;
  width: 200px;
`;

export const ContentDiv = styled.div`
  max-width: 40em;
  margin: 0 auto;
`

export const SchoolLink = styled.a`
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  display: block;
  color: #333;
  text-decoration: none;

`