import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import {createGlobalStyle} from 'styled-components';



const Wrapper = styled.div`
width: 80%;
height: 58.6%;
bottom: 34%;
right: 0.3%;
position:fixed; 
overflow: auto;
flex-direction: row;
background-color:#252526;
border: 1px solid #3f3f46;
color:#fff;
`;

const Left_box = styled.div`
flex : 1;
height: auto;
float: left;
display: inline-block;
background-color:#333333;
border: 1px solid #3f3f46;
`;

const Text_box = styled.div`
color:#fff;
float: right;
height: 3px;
display: inline-block;
flex: 1;
`;


const Section = props => {  
    return (
     <>
        <Wrapper>
        <Left_box></Left_box>
        <Text_box>왜안되는데</Text_box>
        
        </Wrapper>      
     </>
);
};
export default Section;