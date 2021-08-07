import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import {createGlobalStyle} from 'styled-components';

const Wrapper = styled.div`
width: 18%;
height: 75px;
box-sizing: inherit;
position: fixed;
margin-right: 10px;
top: 6%;
left: 0;
`;
const Line = styled.div`
width:100%;
height:100%;
border: 1px solid white;
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
      <Line>
      <Blueline>s</Blueline>
    <Nav>
        <NavTextItem>1</NavTextItem>
        <NavTextItem>2</NavTextItem>
        <NavTextItem>2</NavTextItem>
    </Nav>
      </Line>
    
    </Wrapper>
  </>
);
};
export default Index;