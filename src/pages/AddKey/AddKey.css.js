import styled from "styled-components";

export const AddKeyBody = styled.div `
--name: "AddKeyBody";
width:100%;
min-height:100%;
min-height:calc(100% - 80px - 60px); // - navigation - footer
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
`

export const AddKeyFormBody = styled.div `
--name: "AddKeyFormBody";
width:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:10px;
`

export const AddKeyFormButtonBar = styled.div `
--name: "AddKeyFormButtonBar";
display:flex;
justify-content:center;

`

export const Input = styled.input `
--name: "Input";
max-width:500px;
padding:5px;
margin-bottom:10px;
width:100%;
`
export const FormButton = styled.button `
--name: "FormButton";
padding:5px;
margin: 0px 10px;

`


export const CheckBoxGroup = styled.div `
--name: "CheckBoxGroup";
display: flex;
justify-content:space-evenly;
margin-bottom:10px;

`

export const CheckBoxSingleBody = styled.div `
--name: "CheckBoxSingleBody";
margin: 0px 10px;
`

export const SelectPhotoBody = styled.div `
--name: "SelectPhotoBody";
display:flex;
flex-wrap:wrap;
margin:20px 0px;

`

export const SelectPhotoSingleBody = styled.div `
--name: "SelectPhotoSingleBody";
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
`

export const KeyImage = styled.img `
--name: "KeyImage";
width:120px;
margin-bottom:10px;
`