import styled from "styled-components";

export const ConfirmButton = styled.button`
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

export const NavigationWrapper = styled.div`
display:flex;
flex-direction: column;
`
export const ButtonWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
`

export const ConfirmButtonYes = styled(ConfirmButton)`
background: linear-gradient(180deg, rgba(42,204,3,1) 0%, rgba(67,143,51,1) 100%);
color:#345c1d;
padding:7px 15px;
`

export const ConfirmButtonNo = styled(ConfirmButton)`
background: linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(228,30,30,1) 100%);
color:#601919;
padding:7px 15px;
`