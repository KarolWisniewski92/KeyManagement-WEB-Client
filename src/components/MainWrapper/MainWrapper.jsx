import { MainWrapperDiv } from './MainWrapper.css';

const MainWrapper = ({ children }) => {
    return <MainWrapperDiv>
        {children}
    </MainWrapperDiv>

}

export default MainWrapper;