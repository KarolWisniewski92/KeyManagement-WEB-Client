import styled from "styled-components";

export const DashboardBody = styled.div`
display:flex;
flex-direction:column-reverse;
width:100%;
height:100%;
align-items:center;

@media (min-width: 768px) {
    flex-direction:row;
    align-items:flex-start;

  }
`