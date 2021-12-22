import styled from "styled-components"

export const KeyBoxWrapper = styled.div`
width:80%;
display:flex;
flex-direction: column;
`

export const KeyBoxBody = styled.div`
margin-right:10px;
display:flex;
flex-flow: row wrap;
justify-content:center;
align-items:stretch;
align-content:flex-start;
`
export const HiddenComponent = styled.div` //Tworzy niewidzialny obiekt który uzupełnia przestrzeń w ostatnim rzędzie jeżeli jest nie peły.
  visibility: hidden;
  margin: 10px; //Musi być taki sam jak ma SingleKeyBody
  height: 0;
  width:200px; //Musi być taki sam jak ma SingleKeyBody
`

