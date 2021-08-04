import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import {createGlobalStyle} from 'styled-components';

const Logo = styled.img`
height: 30px;
margin-right: 0px;

`;

const Wrapper = styled.div`
width: 10%;
height: 100%;
box-sizing: border-box;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 9000;
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

const Left_nav = props => {
return (
  <>
    <Wrapper >
    <div style={{ marginTop: '0%'}}>업</div>
    <div style={{ marginTop: '0%'}}>업</div>
    <div style={{ marginTop: '0%'}}>업</div>
    </Wrapper>
  </>
);
};
export default Left_nav;