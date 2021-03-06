import styled from 'styled-components';

const Wrapper = styled.div `
--name: 'Wrapper';
margin: 0 auto;
width: 80%;
min-height:calc(100% - 140px);
flex-grow:1;
display:flex;
flex-direction: ${({ direction }) => direction};
justify-content: ${({ justify }) => justify};
align-items: center;
align-content: center;
flex-wrap: wrap;
`

export default Wrapper;