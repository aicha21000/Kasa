import React, { useState } from 'react';
import { ReactComponent as Open } from '../../assets/images/Open.svg';
import { ReactComponent as Close } from '../../assets/images/Close.svg';
import "./_index.scss";

function Drop({ label, contentLabel }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='dropdownDiv'>
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h3>{label}</h3>{isOpen ? <Open className="open" /> : <Close className="close" />}
            </div>
            {isOpen && <div className="dropdown-description"><div className='description-text'>{contentLabel}</div></div>}
        </div>
    );
}

export default Drop;