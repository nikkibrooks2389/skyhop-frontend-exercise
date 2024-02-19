import React, { useState } from 'react';
import './CustomSelect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

/**
 * Component: CustomSelect
 * Purpose: Provides a customizable select dropdown component using React and FontAwesome for consistent select presentations across the application. It is designed to be fully controlled with an external state.
 * Props:
 *   label (String): An optional label displayed above the select dropdown. Useful for providing context to the user about the choices presented.
 *   options (Array of Strings): The options to be displayed within the dropdown. Each option is a string that serves as both the display label and the value.
 *   placeholder (String): A placeholder text displayed when no option is selected. Helps guide the user on what to select.
 *   value (String): The currently selected value. This prop makes the component a controlled element, requiring an external state to manage the selection.
 *   onChange (Function): A callback function that is called when an option is selected. The selected option's value is passed as a parameter.
*   style (Object): An optional object that allows you to pass custom styles to the select dropdown.
 */

const CustomSelect = ({ label, options, placeholder, value, onChange, style }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (value) => {
        onChange(value);
        setIsOpen(false);
    };

    return (
        <div className="custom-select">
            {label && <label className="custom-select-label">{label}</label>}
            <div className="custom-select-control" style={style} onClick={() => setIsOpen(!isOpen)}>
                <div className="select-value">{value || placeholder}</div>
                <FontAwesomeIcon icon={faChevronDown} className="chevron" />
                {isOpen && (
                    <div className="custom-options">
                        {options.map((option) => (
                            <div
                                key={option}
                                className="custom-option"
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomSelect;