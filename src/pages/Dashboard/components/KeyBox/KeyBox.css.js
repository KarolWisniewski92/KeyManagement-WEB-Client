import styled from "styled-components"

export const KeyBoxWrapper = styled.div `
--name:"KeyBoxWrapper";
width:70%;
display:flex;
flex-direction: column;
@media (min-width: 992px) {
    width:80%;
  }
`

export const KeyBoxBody = styled.div `
--name:"KeyBoxBody";
margin-right:10px;
display:flex;
flex-flow: row wrap;
justify-content:center;
align-items:stretch;
align-content:flex-start;
`
export const HiddenComponent = styled.div ` //Tworzy niewidzialny obiekt który uzupełnia przestrzeń w ostatnim rzędzie jeżeli jest nie peły.
--name:"HiddenComponent";
  visibility: hidden;
  margin: 10px; //Musi być taki sam jak ma SingleKeyBody
  height: 0;
  width:200px; //Musi być taki sam jak ma SingleKeyBody
`