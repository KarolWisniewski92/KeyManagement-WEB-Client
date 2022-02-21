import styled from "styled-components";

const backgroundToShow = (type) => {
    switch (type) {
        case "error":
            return "linear-gradient(0deg, rgba(255,0,79,1) 0%, rgba(255,0,104,1) 57%)"
        case "success":
            return "linear-gradient(0deg, rgba(83,173,59,1) 0%, rgba(117,178,49,1) 100%)"
        case "alert":
            return "linear-gradient(0deg, rgba(255,198,0,1) 0%, rgba(255,170,0,1) 100%)"
        default:
            return "linear-gradient(0deg, rgba(255,0,79,1) 0%, rgba(255,0,104,1) 57%)"
    }
};

export const NotificationBoxBody = styled.div `
background: ${({type})=>backgroundToShow(type)};
width:400px;
border-radius:10px;
height:100px;
position: absolute;
top:20%;
right:50px;
padding:20px;
box-shadow:2px 2px 10px -2px gray;
color:white;

display:flex;
justify-content:flex-start;
align-items:center;
`

export const CloseBTN = styled.button `
background:none;
border: none;
font-size:30px;
position:absolute;
top:10px;
right:10px;
color:rgba(0,0,0,0.5);
cursor: pointer;
transition: transform 0.5s;
:hover{
    transform:scale(1.1);
}

`

export const NotificationIcon = styled.div `
font-size:50px;
margin-right:25px;
`

export const TextWrapper = styled.div `
display:flex;
flex-direction:column;
`

export const NotificationHeader = styled.h3 `
text-transform:uppercase;
margin:0;
margin-bottom:5px;
`