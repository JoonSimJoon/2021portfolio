import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import {createGlobalStyle} from 'styled-components';

const Wrapper = styled.div`
width: 13%;
height: 90%;
box-sizing: border-box;
position: fixed;
margin-right: 10px;
bottom: 3%;
border: 1px solid #3f3f46;
left: 4px;
`;
const Line = styled.div`
width:100%;
height:100%;
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
      <Nav>
      <Blueline>s</Blueline>
    
        <NavTextItem>1</NavTextItem>
        <NavTextItem>2</NavTextItem>
        <NavTextItem>2</NavTextItem>
    </Nav>
    
    </Wrapper>
  </>
);
};
export default Index;