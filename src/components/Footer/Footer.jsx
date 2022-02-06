import { StyledText } from 'components';
import { FooterBody, MailLink } from './Footer.css';

const Footer = () => {

    return (<FooterBody>
        <StyledText color="white" align="center">Masz uwagi do aplikacji?<br />Zgłoś je na adres <MailLink  href="mailto:karol.wisniewski92@gmail.com">karol.wisniewski92@gmail.com</MailLink></StyledText>
    </FooterBody>)
}

export default Footer;