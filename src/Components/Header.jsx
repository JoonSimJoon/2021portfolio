import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import {createGlobalStyle} from 'styled-components';

const Logo = styled.img`
height: 30px;
margin-right: 0px;

`;

const Wrapper = styled.div`
width: 100%;
height: 15px;
display: flex;
padding: 10px 8px;
box-sizing: border-box;
position: relative;
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

let before;
let cnt=0;
const setFont = event => {
if(cnt===0){
  let asd = document.getElementsByClassName("asd");
  before=asd[0];
  cnt=1;
}
before.style.fontWeight="normal";
before.style.color="#fff";
event.target.style.fontWeight = "bold";
event.target.style.color = "gray";
before=event.target;
console.log(before);
};

const Header = props => {
return (
  <>
    <Wrapper>
      <Logo src="./img/vs_logo.png" alt="sibal "></Logo>
      <NavText>
        <NavTextItem className="asd" onClick={setFont}>
          <Link to="/">Main</Link>
        </NavTextItem>
        <NavTextItem className="asd" onClick={setFont}>
          <Link to="/contact">Contact</Link>
        </NavTextItem>
      </NavText>
    </Wrapper>
  </>
);
};
export default Header;