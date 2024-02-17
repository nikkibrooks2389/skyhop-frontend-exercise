import React from 'react';
import RadioSelect from '../../UI/RadioSelect/RadioSelect';

/**
 * SplitSchedule Component
 * 
 * This component represents a split schedule selector, allowing users to choose between different options using radio buttons.
 * 
 * Props:
 *   - options (Array): Options for the split schedule.
 *   - value (String): Selected value of the split schedule.
 *   - handleChange (Function): Callback function for handling changes in the selected value.
 */
const SplitSchedule = ({ options, value, handleChange }) => {
    return (
        <div className='split-schedule-wrapper'>
            <RadioSelect
                options={options}
                selectedOption={value}
                onChange={handleChange}
            />
        </div>
    );
}

export default SplitSchedule;