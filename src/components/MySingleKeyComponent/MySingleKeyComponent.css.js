import styled from "styled-components";

// xs: 0,
// sm: 576px,
// md: 768px,
// lg: 992px,
// xl: 1200px,
// xxl: 1400px

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

export const MyKeyBox = styled.div `
--name: "MyKeyBox";
position:relative;
display:flex;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,28%);
transition-property: transform, box-shadow;
transition-duration:0.6s;
flex-direction:column;
width:200px;
margin:10px;
margin-bottom: 40px;
background: ${({ set, theme }) => handleSet(set, theme)};

&:hover{
    transform: scale(1.05)
}

@media (min-width: 768px) {
    width:100%;
  }
`
export const MySingleKeyHeader = styled.div `
--name:"MySingleKeyHeader";
height:25px;
background:white;
`

export const HeaderBox = styled.div `
--name: "HeaderBox";
width: 100%;
display:flex;
flex-direction:column;
padding:15px;
font-size:14px;
overflow-wrap: break-word;
background:white;

@media (min-width: 1200px) {
    flex-direction:row;
    font-size:1em;
  }
`

export const KeyIconBox = styled.div `
--name: "KeyIconBox";
position: relative;
display:flex;
justify-content:center;
align-items:center;
background:white;
width:100%;
height:150px;
margin-right:10px;

@media (min-width: 1200px) {
    width:120px;
    height:120px;
    
  }
`

export const SingleKeyIcon = styled.img `
--name: "SingleKeyIcon";
position: relative;
height:100%;
transition: 0.5s;
&:hover{
    transform-origin: center;
    transform: scale(1.05) rotate(20deg) 
}
`
export const InfoBox = styled.div `
--name: "InfoBox";
width:100%;
`

export const Navigation = styled.div `
--name: "Navigation";
display:flex;
flex-direction: row;
justify-content: center;
padding:15px 0px;
background: ${({ set, theme }) => handleSet(set, theme)};
`
export const TransferredBoxConfirmButtonBox = styled.div `
display:flex;
justify-content:center;
`

export const MySingleKeyButton = styled.button `
--name:"MySingleKeyButton";
border:none;
padding: 5px 10px;
box-shadow: 0px 2px 5px -2px #7a7a7a;
margin: 0px 10px;
cursor: pointer;
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(205,205,205,1) 100%);
transition: transform 0.5s;
&:hover{
transform:scale(1.05)
}
`
export const MySingleKeyButtonTransfer = styled(MySingleKeyButton)
`
--name:"MySingleKeyButtonTransfer";
margin: 10px;
`


export const TransferedInput = styled.input `
--name:"TransferedInput";
width: calc(100% - 20px);
text-align:center;
padding:5px;
margin:10px;

`

export const TransferredBox = styled.div `
--name: "TransferredBox";
background: ${({ set, theme }) => handleSet(set, theme)};
padding-bottom:20px;

`

export const Ul = styled.ul `
padding-left:20px;
margin-top:5px;
`


export const Li = styled.li `

background:${props => props.isSelected ? '#00000024' : null};
padding:${props => props.isSelected ? '5px' : null};
padding-left:${props => props.isSelected ? '10px' : null};
margin-bottom: 5px;
width: calc(100% - 20px);
list-style-type: none;
cursor: pointer;
transition: transform 0.5s;
&:hover{
    transform: scale(1.05);
}
`

export const CancelButton = styled.button `
--name:"CancelButton";
background: #df1d1d;
color:white;
padding:5px 10px;
margin-left:10px;
border: none;
font-size:14px;
border-radius:5px;
transition: background 0.5s;
cursor:pointer;
&:hover{
    background: #a91212;
}
`


export const MiniBox = styled.div `
--name: "MiniBox";
padding:10px 20px;
height:40px;
background: ${({ set, theme }) => handleSet(set, theme)};
position:absolute;
top:-15px;
right:40px;
display:flex;
justify-content:center;
align-items: center;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,28%);
z-index:0;
`