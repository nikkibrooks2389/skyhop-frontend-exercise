import React from 'react';
import './ClientSelector.css';
import RadioSelect from '../../UI/RadioSelect/RadioSelect';
import CustomSelect from '../../UI/CustomSelect/CustomSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

/**
 * ClientSelector Component
 * 
 * This component represents a client selector with radio buttons and custom selects.
 * 
 * Props:
 *   - label (String): Label for the client selector.
 *   - options (Array): Options for the radio buttons.
 *   - options2 (Array): Options for the custom selects.
 *   - radioValue (String): Selected value of radio buttons.
 *   - selectValues (Array): Selected values of custom selects.
 *   - handleRadioChange (Function): Callback function for radio button change.
 *   - handleSelectChange (Function): Callback function for custom select change.
 */
const ClientSelector = ({ label, options = [], options2 = [], radioValue, selectValues, handleRadioChange, handleSelectChange }) => {
    // Callback function to handle change in radio buttons
    const handleRadioInputChange = (value) => {
        handleRadioChange(value);
    };

    // Callback function to handle change in select dropdown
    const handleSelectInputChange = (value, index) => {
        handleSelectChange(value, index);
    };

    return (
        <div>
            <div className="client-selector-label">{label}</div>
            <RadioSelect
                options={options}
                selectedOption={radioValue}
                onChange={handleRadioInputChange}
            />
            {options2.map((option, index) => (
                <div key={index} className="client-options">
                    <span>{option.key}</span>
                    <div className="client-option-select-icon-wrapper">
                        <CustomSelect
                            placeholder="Select Client"
                            options={option.values}
                            value={selectValues[index].value} // Access value based on index
                            onChange={(selectedValue) => handleSelectInputChange(selectedValue, index)}
                            style={{ width: "150px" }}
                        />
                        <FontAwesomeIcon className="clock-icon" icon={faClock} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClientSelector;