import { ImageWrapperDiv, ImageWrapperHeroImage } from './ImageWrapper.css';
import { useState } from 'react';
import backgrounds from "../../image/jpg/background/index.js";
import { StyledText } from 'components';
import { useLocation } from 'react-router-dom'

const ImageWrapper = ({ children }) => {

    const [actualImage, setActualImage] = useState(0);
    const location = useLocation();

    setTimeout(() => {
        let counter;
        if (actualImage < 3) {
            counter = actualImage + 1;
        } else {
            counter = 0;
        }
        setActualImage(counter);

    }, 5000);

    return <ImageWrapperDiv backgrounds={`url(${backgrounds[actualImage]})`}>
        {location.pathname === "/" &&
            <ImageWrapperHeroImage>
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
            </ImageWrapperHeroImage>
        }

        {children}
    </ImageWrapperDiv>

}

export default ImageWrapper;