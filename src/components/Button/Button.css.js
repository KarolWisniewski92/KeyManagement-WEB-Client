import styled from "styled-components";

export const PrimaryButton = styled.button`
color: ${({ theme }) => `${theme.colors.red.normal}`};
padding: ${({ theme }) => `${theme.spacing.sm}px`};
margin: ${({ theme }) => `${theme.spacing.sm}px`};
`