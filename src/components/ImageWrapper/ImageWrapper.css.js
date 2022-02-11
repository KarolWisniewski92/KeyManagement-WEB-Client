import styled from "styled-components";

export const ImageWrapperDiv = styled.div `
--name: "ImageWrapperDiv";
height: 100%;
background-image: ${props => props.backgrounds};
transition: 2s linear;
display:flex;
background-size: cover;
flex-direction:column;
justify-content:flex-start;
align-content:center;
flex:1;
`

export const ImageWrapperHeroImage = styled.div `
--name: ImageWrapperHeroImage;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
width:70%;
height:60%;
background:rgba(0,0,0,0.5);
padding:20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`