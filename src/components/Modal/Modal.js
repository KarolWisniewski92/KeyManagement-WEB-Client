import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {

    return ReactDOM.createPortal(
        <Fragment>{props.children}</Fragment>, document.querySelector("#modal"));
}

export default Modal;