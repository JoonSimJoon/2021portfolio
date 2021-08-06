import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import {createGlobalStyle} from 'styled-components';

const Wrapper = styled.div`
width: 20%;
height: 91%;
box-sizing: border-box;
position: fixed;
padding: 11px 10px;
bottom: 4%;
left: 0;
`;

const Blueline = styled.div`
    background-color:#007acc;
    color:#fff;
`;
const Nav = styled.ul`
    height : 100%;
    background-color:#252526;
    color:#fff;
`;
const NavText = styled.ul`
display: flex;
padding: 15px;
align-items: center;
flex: 1;
`;

const NavTextItem = styled.li`
color: white;
list-style: none;
margin-right: 10px;
&:hover {
  font-weight: normal;
  color: #b3b3b3;
}
`;

const NavItem = styled.img`
width:100%;
margin-right: 0px;
`;

const Index = props => {
return (
  <>
    <Wrapper >
    <Blueline>s</Blueline>
    <Nav>
        <NavTextItem>1</NavTextItem>
        <NavTextItem>2</NavTextItem>
    </Nav>
    </Wrapper>
  </>
);
};
export default Index;