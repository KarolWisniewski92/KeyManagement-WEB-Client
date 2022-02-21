import { NotificationBoxBody, CloseBTN, NotificationIcon, TextWrapper, NotificationHeader } from './NotificationBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck, faTriangleExclamation, faXmark } from "@fortawesome/free-solid-svg-icons";
import { StyledText } from 'components';
import PropTypes from 'prop-types';
import { removeNotification } from 'Data/actions/notification.action';
import { useDispatch } from 'react-redux';

const NotificationBox = ({ type, title, message }) => {

    const dispatch = useDispatch();

    const iconToShow = ((type) => {
        switch (type) {
            case "error":
                return faCircleXmark
            case "success":
                return faCircleCheck
            case "alert":
                return faTriangleExclamation
            default:
                return faCircleXmark
        }
    })(type);


    return (
        <NotificationBoxBody type={type}>
            <NotificationIcon>
                <FontAwesomeIcon icon={iconToShow} />
            </NotificationIcon>
            <TextWrapper>
                <NotificationHeader>{title}</NotificationHeader>
                <StyledText margin="0">{message}</StyledText>
            </TextWrapper>

            <CloseBTN onClick={() => {
                removeNotification(dispatch, {
                    type: type,
                    title: title,
                    message: message
                })
            }}><FontAwesomeIcon icon={faXmark} /></CloseBTN>
        </NotificationBoxBody>
    )
}

export default NotificationBox;

NotificationBox.propTypes = {
    type: PropTypes.oneOf(['error', 'alert', 'success'])

}