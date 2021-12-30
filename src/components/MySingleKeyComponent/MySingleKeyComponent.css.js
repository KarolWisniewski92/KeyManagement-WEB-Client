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

export const MyKeyBox = styled.div`
display:flex;
box-shadow: 2px 2px 5px  gray;
flex-direction:column;
width:100%;
padding:10px;
margin-bottom:20px;
background: ${({ set, theme }) => handleSet(set, theme)};
transition: 0.5s;

&:hover{
    transform: scale(1.05)
}
`

export const HeaderBox = styled.div`
width: 100%;
display:flex;
flex-direction:column;
margin-bottom:15px;
font-size:14px;
overflow-wrap: break-word;

@media (min-width: 1200px) {
    flex-direction:row;
    font-size:1em;
  }
`

export const KeyIconBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
background:white;
width:100%;
height:120px;
padding:5px;

margin-right:10px;

@media (min-width: 1400px) {
    width:100px;
    height:100px;
    
  }
`

export const InfoBox = styled.div`
width:100%;
`

export const Navigation = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
margin:10px 0px;
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

export const TransferedInput = styled.input`
width: calc(100% - 20px);
padding:5px;
margin:10px;
`

export const Ul = styled.ul`
padding-left:20px;
margin-top:5px;
`


export const Li = styled.li`

background:${props => props.isSelected ? '#45a5d3' : null};
padding:${props => props.isSelected ? '5px' : null};
padding-left:${props => props.isSelected ? '10px' : null};
margin-bottom: 5px;
list-style-type: none;
cursor: pointer;
transition: transform 0.5s;
&:hover{
    transform: scale(1.05);
}
`