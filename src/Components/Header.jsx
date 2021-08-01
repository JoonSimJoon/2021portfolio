import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import {createGlobalStyle} from 'styled-components';
const Wrapper = styled.div`
width: 100%;
height: 50px;
display: flex;
padding: 20px 58px;
box-sizing: border-box;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 9000;
`;

const NavText = styled.ul`
display: flex;
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

const setFont = event => {
let asd = document.getElementsByClassName("asd");
for (let a = 0; a < asd.length; a++) {
  asd[a].style.fontWeight = "normal";
  asd[a].style.color = "#fff";
}

event.target.style.fontWeight = "bold";
event.target.style.color = "#b3b3b3";
};

const Header = props => {
return (
  <>
    <Wrapper>
     
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