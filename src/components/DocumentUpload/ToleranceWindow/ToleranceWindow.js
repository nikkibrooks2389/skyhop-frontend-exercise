import React from 'react';
import './ToleranceWindow.css';
import Toggle from '../../UI/Toggle/Toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';


/**
 * ToleranceWindow Component
 * 
 * This component represents a tolerance window with a toggle switch.
 * It allows users to toggle between two states and select a tolerance level.
 * 
 * Props:
 *   - isOpen (Boolean): Indicates whether the tolerance window is open or closed.
 *   - onToggle (Function): A function to handle toggle state changes.
 
 */

const ToleranceWindow = ({ isOpen, onToggle }) => {

    const commonContent = (
        <>
            <FontAwesomeIcon className="clock-icon" icon={faClock} />
            Select Tolerance Level
        </>
    );

    return (
        <div className="tolerance-window-wrapper">
            <Toggle checked={isOpen} onChange={onToggle} />
            <span>
                {isOpen ? (
                    <>
                        Toggle ON | {commonContent}
                    </>
                ) : (
                    <>
                        Toggle OFF | {commonContent}
                    </>
                )}
            </span>
        </div>
    );
};

export default ToleranceWindow;