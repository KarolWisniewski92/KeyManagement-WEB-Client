import { MainWrapperDiv, MainWrapperHeroImage } from './MainWrapper.css';
import { useState, useEffect } from 'react';
import backgrounds from "./../../image/jpg/background/index.js";
import { StyledText } from 'components';
import { useLocation } from 'react-router-dom'

const MainWrapper = ({ children }) => {

    const [actualImage, setActualImage] = useState(0);
    const location = useLocation();

    setTimeout(() => {
        let test;
        if (actualImage < 3) {
            test = actualImage + 1;
        } else {
            test = 0;
        }
        setActualImage(test);

    }, 5000);

    return <MainWrapperDiv backgrounds={`url(${backgrounds[actualImage]})`}>
        {location.pathname === "/" &&
            <MainWrapperHeroImage>
                <StyledText
                    size="70px"
                    type="header"
                    align="center"
                    color="white"
                    s_size="30px"
                    m_size="45px"
                    l_size="55px"
                >
                    Potrzebujesz dostępu do aplikacji?
                </StyledText>
                <StyledText
                    size="30px"
                    align="center"
                    color="white"
                    s_size="20px">
                    Skontaktuj się bezpośrednio z:<br />
                    Karol Wiśniewski<br />
                    tel. 516 105 675<br />
                    karolwisniewski92@gmail.com<br />
                </StyledText>
            </MainWrapperHeroImage>
        }

        {children}
    </MainWrapperDiv>

}

export default MainWrapper;