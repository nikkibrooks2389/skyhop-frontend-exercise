import React from 'react';
import './RadioOption.css';

/**
 * Component: RadioOption
 * 
 * Purpose: Represents a single radio option within a radio group.
 * 
 * Props:
 *   - option (String): The label or value of the radio option.
 *   - selected (Boolean): Indicates whether the option is currently selected.
 *   - onClick (Function): Callback function triggered when the option is clicked. It usually updates the selected option.
 * 
 * This component renders a single radio option with a label. It provides visual feedback to indicate whether the option is selected.
 * Clicking on the label triggers the `onClick` callback to handle the selection logic.

 */

const RadioOption = ({ option, selected, onClick }) => {

    const inputId = `radio-option-${option}`;

    return (
        <li className="radio-option">
            <input
                id={inputId}
                type="radio"
                value={option}
                checked={selected}
                onChange={() => { }}
                className="radio-input"
            />

            <label htmlFor={inputId} className={`radio-label ${selected ? 'selected' : ''}`} onClick={() => onClick(option)}>
                {option}
            </label>
        </li>
    );
};

export default RadioOption;