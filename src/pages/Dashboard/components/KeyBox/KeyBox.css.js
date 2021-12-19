import styled from "styled-components"

export const KeyBoxBody = styled.div`
/* background-color:pink; */
/* border: 2px solid black; */

width:100%;
height: 100%;
margin:20px 0px;
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