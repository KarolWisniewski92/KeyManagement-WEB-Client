import styled from "styled-components";

export const StyledHeaderText = styled.h1`
color: ${({ color }) => `${color}`};
Font-size: ${({ size }) => size ? `${size}` : null};
`

export const StyledRegularText = styled.p`
color: ${({ color }) => `${color}`};
Font-size: ${({ size }) => size ? `${size}` : null};
`