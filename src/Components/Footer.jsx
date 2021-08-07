import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import {createGlobalStyle} from 'styled-components';


const Foot = styled.footer`
width: 100%;
height: 2.3%;
bottom : 0;
box-sizing: border-box;
position:fixed; 
box-sizing: border-box;
background-color: #68217a;
`;

const Wrapper = styled.div`
width: 80%;
height: 30%;
bottom: 3%;
right: 0;
position:fixed; 
background-color:#252526;
border: 1px solid white;
color:#fff;
`;

const Graytag = styled.div`
background-color: #2d2d30;
color:white;

`;

const Footer = props => {
return (
  <>
    <Foot>
        Since 2021
    </Foot>
    <Wrapper>
      <Graytag>
        아니
      </Graytag>
      엄
    </Wrapper>
  </>
);
};
export default Footer;