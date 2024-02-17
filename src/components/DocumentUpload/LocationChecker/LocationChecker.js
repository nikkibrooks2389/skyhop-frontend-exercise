import React from "react";
import "./LocationChecker.css";

/**
 * LocationChecker Component
 * 
 * This component displays location checking information.
 * 
 * Props:
 *   - locationCheckerData (String): Data for location checking.
 */
const LocationChecker = ({ locationCheckerData }) => {
    return (
        <div className="location-checker-wrapper">
            <span style={{ color: "green" }}>{locationCheckerData}</span>
        </div>
    );
}

export default LocationChecker;