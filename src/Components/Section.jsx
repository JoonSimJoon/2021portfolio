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
box-sizing: border-box;
overflow: auto;
display : inline-block;
background-color:#252526;
border: 1px solid #3f3f46;
color:#fff;
`;

const Left_box = styled.div`
height: 40%;
width: 1%;
background-color:#333333;
position: fixed;
border: 1px solid #3f3f46;
display : inline-block;
`;

const Text_box = styled.div`
color:#fff;
display : inline-block;
position:static;
`;


const Section = props => {  
    return (
     <>
     

        <Wrapper>
        <Left_box></Left_box>
        <Text_box>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aspernatur, assumenda perferendis laudantium distinctio nihil voluptatem rerum deleniti corrupti consequuntur earum quod numquam! 
            Autem, esse cumque? Laboriosam consequuntur veritatis asperiores!</Text_box>
        
        </Wrapper>      
     </>
);
};
export default Section;