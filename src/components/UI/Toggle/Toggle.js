import React, { useState } from 'react';
import './Toggle.css';

/**
 * Toggle Component
 * 
 * This component represents a toggle switch.
 * 
 * Props:
 *   - onChange (Function): A function to handle toggle state changes.
 *   - checked (Boolean): Indicates whether the toggle is checked or unchecked.
 */

const Toggle = ({ onChange, checked }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleClick = () => {
        setIsChecked(!isChecked);
        onChange && onChange(!isChecked);
    };

    return (
        <div className={`toggle ${isChecked ? 'checked' : ''}`} onClick={handleClick}>
            <div className="track">
                <div className="thumb" />
            </div>
        </div>
    );
};

export default Toggle;