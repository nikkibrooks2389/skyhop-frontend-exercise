import React, { useState, useRef } from 'react';
import './FileUploader.css';
import Button from '../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage } from '@fortawesome/free-regular-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

/**
 * Component: FileUploader
 * Purpose: Allows users to upload files through drag and drop or by browsing.
 * Props:
 *   - onFileUpload (Function): Callback function to handle file upload.
 */
const FileUploader = ({ onFileUpload }) => {
    // State to manage the current file being uploaded
    const [currentFile, setCurrentFile] = useState(null);
    const fileInputRef = useRef(); // Reference to the file input element

    // Handles file selection from the file input
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            prepareFileForUpload(file);
        }
    };

    // Handles drag over event
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // Handles file drop event
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            prepareFileForUpload(file);
        }
    };

    // Prepares the file for upload
    const prepareFileForUpload = (file) => {
        const fileDetails = {
            file,
            progress: 0,
            name: file.name,
            size: (file.size / 1024 / 1024).toFixed(2),
            isReady: true
        };
        setCurrentFile(fileDetails);
        uploadFile(fileDetails);
        onFileUpload(fileDetails); // Call the function passed from DocumentUpload
    };

    // Handles browsing for files
    const handleBrowseFiles = () => {
        fileInputRef.current.click();
    };

    // Simulates file upload progress
    const uploadFile = () => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            if (progress <= 100) {
                setCurrentFile(current => current ? { ...current, progress } : current);
            } else {
                clearInterval(interval);
            }
        }, 500);
    };


    return (
        <div className='file-uploader-wrapper'>

            <div className="upload-area-wrapper">
                <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className='upload-area'
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                >
                    <FontAwesomeIcon className="file-uploader-icons" icon={faFileAlt} />
                    <span> <span>Drag & Drop Or </span><b>Browse</b></span>
                </div>

                <Button type="primary" onClick={handleBrowseFiles} style={{ padding: ".5rem 3rem", width: "14rem" }}>
                    Upload Manifest
                </Button>
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
            </div>
            <HorizontalLine color="rgb(231, 231, 231)" />
            {currentFile && (
                <div className='file-details'>
                    <div className="file-icon-container">
                        <FontAwesomeIcon className="file-uploader-icons" icon={faFileImage} />
                    </div>
                    <div className="file-details-info-container">
                        <div className="file-details-info">
                            <span>{currentFile.name}</span>
                            <span>{currentFile.size} MB</span>
                        </div>
                        <div className='progress-bar-background'>
                            <div style={{ background: '#ff9e19', height: '100%', width: `${currentFile.progress}%` }}></div>
                        </div>
                    </div>
                </div>
            )}
            {!currentFile && (
                <div className='file-details'>
                    <div className="file-icon-container">
                        <FontAwesomeIcon className="file-uploader-icons" icon={faFileImage} />
                    </div>
                    <div className="file-details-info-container">
                        <div className="file-details-info">
                            <span>No file selected</span>
                            <span>0.0MB</span>
                        </div>
                        <div className='progress-bar-background'></div>
                    </div>
                </div>
            )}
            <HorizontalLine color="rgb(231, 231, 231)" />
        </div>
    );
};

export default FileUploader;