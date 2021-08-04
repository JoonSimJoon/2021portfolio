import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import {createGlobalStyle} from 'styled-components';


const Wrapper = styled.footer`
width: 100%;
bottom : 0;
position:fixed; 
box-sizing: border-box;
background-color: #68217a;
`;


const Footer = props => {
return (
  <>
    <Wrapper>
        Since 2021
    </Wrapper>
  </>
);
};
export default Footer;