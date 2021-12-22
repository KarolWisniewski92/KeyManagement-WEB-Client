import styled from "styled-components";

export const MyKeyBox = styled.div`
display:flex;
box-shadow: 2px 2px 5px  gray;
flex-direction:column;
width:100%;
background: ${({ theme }) => theme.templateColors.blue};
padding:10px;
margin-bottom:20px;
transition: 0.5s;

&:hover{
    transform: scale(1.05)
}
`

export const HeaderBox = styled.div`
display:flex;
flex-direction:row;
margin-bottom:15px;
`

export const FotterBox = styled.div`
width:100%;
`

export const Navigation = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
margin:10px 0px;
`
export const KeyIconBox = styled.div`
background:white;
width:100px;
height:100px;
margin-right:10px;
`

export const SingleKeyIcon = styled.img`
position: relative;
height:100%;
transition: 0.5s;
&:hover{
    transform-origin: center;
    transform: scale(1.05) rotate(20deg) 
}
`

export const MySingleKeyButton = styled.button`
border:none;
padding: 5px 10px;
border-radius:5px;
margin: 0px 10px;
cursor: pointer;
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(205,205,205,1) 100%);
transition: transform 0.5s;
&:hover{
transform:scale(1.05)
}
`