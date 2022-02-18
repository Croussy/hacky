import React from 'react';
import '../../styles/popup.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const Popup = ({content, extraClass, handleClose}) => {
    return (
        <div className={`popup-container ${extraClass}`}>
            <div className={'popup-close'} onClick={handleClose}>
                <FontAwesomeIcon className={'close-icon'} icon={faTimes}/>
            </div>
            {content}
        </div>
    );
};

export default Popup;