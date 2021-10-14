import styled from "styled-components";

export const StyledInput = styled.input`
width: ${({ type }) => type === 'checkbox' ? 'auto' : '300px'};
margin-right: ${({ type }) => type === 'checkbox' ? '10px' : '0'};
padding: 10px;
margin-bottom: 15px;
border-radius: ${({ type }) => type === 'checkbox' ? '0' : '5px'};
border:none;
box-shadow: 0px 0px 5px #5f5f5f;
`