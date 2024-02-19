import React, { useState } from 'react';
import './DocumentUpload.css';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import HorizontalLine from './HorizontalLine/HorizontalLine';
import FileUploader from "./FileUploader/FileUploader";
import SectionWrapper from './SectionWrapper/SectionWrapper';
import ElapseDataChecking from './ElapseDataChecking/ElapseDataChecking';
import ToleranceWindow from './ToleranceWindow/ToleranceWindow';
import ClientSelector from './ClientSelector/ClientSelector';
import SplitSchedule from './SplitSchedule/SplitSchedule';
import LocationChecker from './LocationChecker/LocationChecker';
import Button from '../UI/Button/Button';
import { Alert } from '@mui/material';

const DocumentUpload = ({ onClose }) => {
    // State variables
    const [selectedValue, setSelectedValue] = useState('');
    const [fileDetails, setFileDetails] = useState(null); // State for file details
    const [elapseData, setElapseData] = useState("No Elapsed Dates!"); // State for elapse data
    const [isOpen, setIsOpen] = useState(false); // State for tolerance window
    const [splitScheduleValue, setSplitScheduleValue] = useState("No"); // State for SplitSchedule value
    const [clientSelectRadioValue, setClientSelectRadioValue] = useState("Single"); // State for ClientSelector value
    const [clientSelectValues, setClientSelectValues] = useState([ // State for ClientSelector values
        { key: "Testing Center 1", value: "" },
        { key: "Testing Center 2", value: "" },
        { key: "Testing Center 3", value: "" },
        { key: "Testing Center 4", value: "" },
    ]);
    const [locationCheckerData, setLocationCheckerData] = useState("All Available"); // State for LocationChecker value

    // Options for select inputs
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const splitSchoolOptions = ['Yes', 'No'];
    const clientOptions = ['Single', 'Multiple'];
    const clientOptions2 = [
        { key: "Testing Center 1", values: ["client1", "client2"] },
        { key: "Testing Center 2", values: ["client3", "client4"] },
        { key: "Testing Center 3", values: ["client5", "client6"] },
        { key: "Testing Center 4", values: ["client7", "client8"] },
    ];


    // Event handlers
    const handleChange = (value) => {
        setSelectedValue(value);
    };

    const handleFileUpload = (details) => {
        setFileDetails(details);
    };

    const toggleToleranceWindow = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectRadioChange = (value) => {
        setClientSelectRadioValue(value);
    };

    const handleSplitScheduleChange = (value) => {
        setSplitScheduleValue(value);
    };

    const handleClientSelectChange = (value, index) => {
        setClientSelectValues(prevState => {
            const updatedValues = [...prevState];
            updatedValues[index].value = value;
            return updatedValues;
        });
    };

    const handleContinueImport = () => {
        // Close the modal first
        onClose();

        // Then show the alert after a very short delay
        setTimeout(() => {
            alert("Imported Successfully");
        }, 100); // 100 milliseconds delay
    }
    return (
        <div className="document-upload">
            <span></span>
            <h1>Document Upload
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <HorizontalLine />
                </div>
            </h1>

            <div className="document-upload-form">
                <div className="form-content-top">
                    <div className="form-section-top-left">
                        <CustomSelect
                            placeholder="Select Import Name:"
                            value={selectedValue}
                            onChange={handleChange}
                            options={options}
                        />
                        <HorizontalLine width="275px" />
                        <SectionWrapper header="Select a manifest that you'd like to import">
                            <FileUploader onFileUpload={handleFileUpload} />
                        </SectionWrapper>
                        <HorizontalLine width="275px" margin="0 0 1rem 0" />
                        <SectionWrapper header="Elapse Data Checking:">
                            <ElapseDataChecking elapseData={elapseData} />
                        </SectionWrapper>
                        <HorizontalLine width="275px" />
                        <SectionWrapper header="Tolerance Window:">
                            <ToleranceWindow isOpen={isOpen} onToggle={toggleToleranceWindow} />
                        </SectionWrapper>

                    </div>
                    <div className="form-section-top-right">
                        <SectionWrapper header="Split schedule using socal distancing?">
                            <SplitSchedule options={splitSchoolOptions} value={splitScheduleValue} handleChange={handleSplitScheduleChange} />
                        </SectionWrapper>


                        <HorizontalLine width="275px" />
                        <SectionWrapper header="Location Checking:">
                            <LocationChecker locationCheckerData={locationCheckerData} />
                        </SectionWrapper>
                        <HorizontalLine width="275px" />
                        <SectionWrapper header="Client:">

                            <ClientSelector
                                options={clientOptions}
                                options2={clientOptions2}
                                radioValue={clientSelectRadioValue}
                                selectValues={clientSelectValues}
                                handleRadioChange={handleSelectRadioChange}
                                handleSelectChange={handleClientSelectChange}
                            />

                        </SectionWrapper>

                    </div>
                </div>
                <SectionWrapper style={{ marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} header="Data in the import file is correct. Please press Continue to import.">
                    <div className="form-section-bottom">
                        <div className="buttons-wrapper">

                            <Button type="primary" style={{ margin: ".5rem" }} onClick={handleContinueImport}>
                                Continue Import
                            </Button>
                            <Button type="outlined" style={{ margin: ".5rem" }} onClick={onClose}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </SectionWrapper>
            </div>
        </div>
    );
};

export default DocumentUpload;