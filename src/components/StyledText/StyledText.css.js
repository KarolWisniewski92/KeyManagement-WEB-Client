import styled from "styled-components";

export const StyledHeaderText = styled.h1`
color: ${({ color }) => `${color}`};
Font-size: ${({ size }) => size ? `${size}` : null};
text-align: ${({ align }) => align ? `${align}` : null};
margin: ${({ marginVertical }) => marginVertical ? `${marginVertical} 0px` : null};
margin: ${({ marginHorizontal }) => marginHorizontal ? `0px ${marginHorizontal}` : null};
margin: ${({ margin }) => margin ? `${margin}` : null};
`

export const StyledRegularText = styled.p`
color: ${({ color }) => `${color}`};
Font-size: ${({ size }) => size ? `${size}` : null};
text-align: ${({ align }) => align ? `${align}` : null};
margin: ${({ marginVertical }) => marginVertical ? `${marginVertical} 0px` : null};
margin: ${({ marginHorizontal }) => marginHorizontal ? `0px ${marginHorizontal}` : null};
margin: ${({ margin }) => margin ? `${margin}` : null};

`