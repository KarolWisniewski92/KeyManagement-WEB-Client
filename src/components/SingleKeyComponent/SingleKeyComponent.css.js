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
--name:"SingleKeyBody";
display:flex;
flex-direction:column;
width:200px;
height: auto;
background: ${({ set, theme }) => handleSet(set, theme)};
position:relative;
margin:20px 10px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,28%);
transition-property: transform, box-shadow;
transition-duration:0.6s;

&:hover{
    transform: scale(1.05);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,50%);
}
`

export const SingleKeyAddon = styled.div`
--name:"SingleKeyAddon";
display:flex;
justify-content:center;
align-content: center;
position: relative;
flex-flow: column wrap;
min-height:40px;
background: ${({ set, theme }) => handleSet(set, theme)};
`

export const SingleKeyHeader = styled.div`
--name:"SingleKeyHeader";
height:25px;
background:white;
`

export const SingleKeyIconBox = styled.div`
height:150px;
background:white;
position: relative;
`

export const SingleKeyNavigation = styled(SingleKeyAddon)
    `
--name:SingleKeyNavigation;
flex-direction:row;
padding-bottom:15px;
justify-content:space-evenly;
`

export const SingleKeyFooter = styled(SingleKeyAddon)
    `
--name:"SingleKeyFooter";
justify-content:flex-start;
padding:15px;
bottom:0px;
word-break: break-word;
text-align:center;
flex-grow:1;

`

export const SingleKeyIcon = styled.img`
--name:"SingleKeyIcon";
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
--name:"SingleKeyInfoBox";
background: white;
display:flex;
justify-content: center;
align-items:center;
min-height:150px;

`


export const SigleKeyInfo = styled.div`
--name:"SigleKeyInfo";
position: relative;
margin:10px;
box-shadow:2px 2px 10px -2px gray;
padding:10px;

background: ${({ set, theme }) => handleSet(set, theme)};

p{
    text-align: center;
    margin: 5px 0px;
    }
`

export const SingleKeyButton = styled.button`
--name:"SingleKeyButton";
border:none;
width:80px;
margin-bottom:10px;
padding: 5px;
box-shadow: 0px 2px 5px -2px #7a7a7a;
cursor: pointer;
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(205,205,205,1) 100%);
transition: transform 0.5s;

&:hover{
transform:scale(1.05)
}

@media (max-width: 768px) {
width:70px;
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

export const MiniBox = styled.div`
padding:10px 20px;
height:40px;
background: ${({ set, theme }) => handleSet(set, theme)};
position:absolute;
top:-15px;
left:15px;
display:flex;
justify-content:center;
align-items: center;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,28%);

`