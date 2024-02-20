import CustomSelect from "../../UI/CustomSelect/CustomSelect";
import './ImportNameSelector.css';

const ImportNameSelector = ({ options, value, onSelectImportName }) => {

    /**
 * ImportNameSelector Component
 *
 * This component provides a dropdown selector for importing names, utilizing the CustomSelect component.
 * It is designed to be a controlled component, with the selected import name managed by external state.
 * 
 * Props:
 *   - options (Array of Strings): The list of import name options to be displayed in the dropdown.
 *   - value (String): The currently selected import name. This prop makes the component a controlled element.
 *   - onSelectImportName (Function): Callback function that is called when an option is selected. The selected option's value is passed as a parameter.
 */

    return (
        <div className="import-name-selector-wrapper">
            <CustomSelect
                placeholder="Select Import Name:"
                value={value}
                onChange={onSelectImportName}
                options={options}
            />
        </div>
    );
};

export default ImportNameSelector;