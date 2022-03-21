import styled from "styled-components";

export const DashboardBody = styled.div `
  --name:"DashboardBody";
  display:flex;
  flex-direction:column-reverse;
  align-items:center;
  width:90%;
  justify-content:space-between;

@media (min-width: 768px) {
  flex-direction:row;
  align-items:flex-start;
  width:80%;
    

  }
`

export const DashboardWrapper = styled.div `
--name:"DashboardWrapper";
width:100%;
display:flex;
justify-content:center;
align-items:center;
`