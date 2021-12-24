import styled from "styled-components";


export const SingleKeyBody = styled.div`
display:flex;
flex-direction:column;
width:200px;
height: auto;
background-color:white;
box-shadow: 2px 2px 5px  gray;
position:relative;
overflow: hidden;
margin:10px;
transition: transform 0.6s;

&:hover{
    transform: scale(1.05);
}
`

export const SingleKeyAddon = styled.div`
display:flex;
justify-content:center;
align-content: center;
position: relative;
flex-flow: column wrap;
min-height:40px;
background-color: ${({ theme }) => theme.templateColors.blue};
`

export const SingleKeyHeader = styled(SingleKeyAddon)`
top:0px;

`


export const SingleKeyIconBox = styled.div`
position: relative;
/* padding: 20px 0px; */
`

export const SingleKeyNavigation = styled(SingleKeyAddon)`
padding-bottom:15px;
`

export const SingleKeyFooter = styled(SingleKeyAddon)`
padding:0px 15px;
bottom:0px;
word-break: break-word;
text-align:center;
flex-grow:1;
padding-bottom:15px;

`

export const SingleKeyIcon = styled.img`
position: relative;
left:50%;
transform: translate(-50%, 0%);
width:150px;
transition: 0.5s;
&:hover{
    transform-origin: center;
    transform: scale(1.05) translate(-50%, 0%) rotate(20deg) 
}
`


export const SigleKeyInfo = styled.div`
position: relative;
margin:0px 10px;
box-shadow:2px 2px 10px -2px gray;
margin-top:50px;
margin-bottom: 20px;
padding:10px;

background-color: ${({ theme }) => theme.templateColors.blue};
p{
    text-align: center;
    margin: 5px;
}
`

export const SingleKeyButton = styled.button`
border:none;
padding: 5px;
border-radius:5px;
cursor: pointer;
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(205,205,205,1) 100%);
transition: transform 0.5s;
&:hover{
transform:scale(1.05)
}
`

export const NavigationWrapper = styled.div`
display:flex;
flex-direction: column;
`
export const ButtonWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
`

export const SingleKeyButtonYes = styled(SingleKeyButton)`
background:#63ba30;
color:#345c1d;
padding:7px 15px;
`

export const SingleKeyButtonNo = styled(SingleKeyButton)`
background:#e52828;
color:#601919;
padding:7px 15px;
`