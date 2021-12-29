import styled from 'styled-components';

const Wrapper = styled.div`
margin: 0 auto;
width: 80%;
flex-grow:1;
display:flex;
flex-direction: ${({ direction }) => direction};
justify-content: center;
align-items: center;
align-content: center;
`

export default Wrapper;