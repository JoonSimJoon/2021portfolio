import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import {createGlobalStyle} from 'styled-components';

const Wrapper = styled.div`
width: 80%;
height: 58.6%;
bottom: 34%;
right: 2px;
position:fixed; 
background-color:#252526;
border: 1px solid #3f3f46;
color:#fff;
`;


const Section = props => {  
    return (
     <>
        <Wrapper>
        섹션
        </Wrapper>      
     </>
);
};
export default Section;