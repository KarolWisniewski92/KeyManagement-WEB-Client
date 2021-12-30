import styled from "styled-components";

const handleSet = (set, theme) => {
    switch (set) {
        case "KP":
            return theme.templateColors.blue;
        case "NOC":
            return theme.templateColors.green;
        case "DUS":
            return theme.templateColors.yellow;
        default:
            return theme.templateColors.blue;
    }

}


export const SingleKeyBody = styled.div`
display:flex;
flex-direction:column;
width:200px;
height: auto;
background: ${({ set, theme }) => handleSet(set, theme)};
position:relative;
overflow: hidden;
margin:10px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,28%);
transition-property: transform, box-shadow;
transition-duration:0.6s;


&:hover{
    transform: scale(1.05);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,50%);
}
`

export const SingleKeyAddon = styled.div`
display:flex;
justify-content:center;
align-content: center;
position: relative;
flex-flow: column wrap;
min-height:40px;
background: ${({ set, theme }) => handleSet(set, theme)};
`

export const SingleKeyHeader = styled(SingleKeyAddon)`
top:0px;
`

export const SingleKeyIconBox = styled.div`
height:150px;
background:white;
position: relative;
/* padding: 20px 0px; */
`

export const SingleKeyNavigation = styled(SingleKeyAddon)`
padding-bottom:15px;
`

export const SingleKeyFooter = styled(SingleKeyAddon)`
justify-content:flex-start;
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

export const SingleKeyInfoBox = styled.div`
background: white;
display:flex;
justify-content: center;
align-items:center;
height:150px;

`


export const SigleKeyInfo = styled.div`
position: relative;
margin:0px 10px;
box-shadow:2px 2px 10px -2px gray;
padding:10px;

background: ${({ set, theme }) => handleSet(set, theme)};

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