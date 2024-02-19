// RadioSelect Component
import React, { useState, useEffect } from 'react';
import './RadioSelect.css';
import RadioOption from './RadioOption/RadioOption';

/**
 * Component: RadioSelect
 * 
 * Purpose: Renders a group of radio options allowing the user to select one option from the provided list.
 * 
 * Props:
 *   - options (Array of Strings): The list of options to render as radio buttons.
 *   - onChange (Function): Callback function triggered when an option is selected. It receives the selected option as a parameter.
 *   - selectedOption (String): The currently selected option. This prop controls the selected state of the radio group.
 * 
 * This component manages the selected state internally using the useState hook. When an option is selected, it updates the selected state and triggers the onChange callback to handle the selection logic.
 */


const RadioSelect = ({ options = [], onChange, selectedOption }) => {
    const [selected, setSelected] = useState(selectedOption);

    // Update the selected state when selectedOption prop changes
    useEffect(() => {
        setSelected(selectedOption);
    }, [selectedOption]);

    const handleClick = (option) => {
        setSelected(option);
        onChange && onChange(option);
    };

    return (
        <div className="radio-select">
            {options && options.map((option, index) => (
                <span key={index}>
                    <RadioOption
                        key={index}
                        option={option}
                        selected={option === selected}
                        onClick={handleClick}
                    />
                </span>
            ))}
        </div>
    );
};

export default RadioSelect;