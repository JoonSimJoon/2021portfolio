import React,{memo} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import {createGlobalStyle} from 'styled-components';



const Wrapper = styled.div`
width: 86%;
height: 58.6%;
bottom: 34%;
right: 0.3%;
position:fixed; 
display: flex;
flex-direction: row;

background-color:#252526;
border: 1px solid #3f3f46;
color:#fff;
`;

const Left_box = styled.div`
background-color:#333333;
width:13px;
display: inline-block;
border: 1px solid #3f3f46;
`;

const Text_box = styled.div`
display: inline-block;
padding: 15px;
width: 100%;
border-color: #333333;
border-width: 10px; 
border-style: solid;


color:#fff;
overflow: auto;
   &::-webkit-scrollbar{
      width: 10px;
      height : 15px;
      background-color: rgba(0,0,0,0.3)

   }
   &::-webkit-scrollbar-thumb{
      background: rgba(255,255,255,0.4);
     ;
   }
`;

const Year_box = styled.ol`
   left: 30px;
`;


const Section_Main = props => {  
    return (
     <>
        <Wrapper>
        <Text_box>
            <h1> 수상 목록</h1> <br/>
            <>
            <ol>
               <li>asd</li>
            </ol>
            </>
         </Text_box>
        
        </Wrapper>      
     </>
);
};
export default Section_Main;