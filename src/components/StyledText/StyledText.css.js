import styled from "styled-components";

export const StyledHeaderText = styled.h1`
color: ${({ color }) => color ? color : null};
Font-size: ${({ size }) => size ? `${size}` : null};
text-align: ${({ align }) => align ? `${align}` : null};
margin: ${({ marginVertical }) => marginVertical ? `${marginVertical} 0px` : null};
margin: ${({ marginHorizontal }) => marginHorizontal ? `0px ${marginHorizontal}` : null};
margin: ${({ margin }) => margin ? `${margin}` : null};
text-transform: ${({ textTransform }) => textTransform ? textTransform : null};
word-break: break-word;

@media (max-width: 600px) {
    Font-size: ${({ s_size }) => s_size ? `${s_size}` : null};
  }

@media (min-width: 600px) and (max-width: 768px) {
    Font-size: ${({ m_size }) => m_size ? `${m_size}` : null};
  }

@media (min-width: 768px) and (max-width: 992px) {
    Font-size: ${({ l_size }) => l_size ? `${l_size}` : null};
  }
  
@media (min-width: 992px) and (max-width: 1200px) {
    Font-size: ${({ xl_size }) => xl_size ? `${xl_size}` : null};
  } 
`

export const StyledRegularText = styled.p`
color: ${({ color }) => color ? color : null};
Font-size: ${({ size }) => size ? `${size}` : null};
text-align: ${({ align }) => align ? `${align}` : null};
margin: ${({ marginVertical }) => marginVertical ? `${marginVertical} 0px` : null};
margin: ${({ marginHorizontal }) => marginHorizontal ? `0px ${marginHorizontal}` : null};
margin: ${({ margin }) => margin ? `${margin}` : null};
text-transform: ${({ textTransform }) => textTransform ? textTransform : null};
word-break: break-word;

@media (max-width: 600px) {
    Font-size: ${({ s_size }) => s_size ? `${s_size}` : null};
  }

@media (min-width: 600px) and (max-width: 768px) {
    Font-size: ${({ m_size }) => m_size ? `${m_size}` : null};
  }

@media (min-width: 768px) and (max-width: 992px) {
    Font-size: ${({ l_size }) => l_size ? `${l_size}` : null};
  } 

@media (min-width: 992px) and (max-width: 1200px) {
    Font-size: ${({ xl_size }) => xl_size ? `${xl_size}` : null};
  } 

`