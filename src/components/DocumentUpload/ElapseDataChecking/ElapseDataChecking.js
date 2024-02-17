import React from "react";
import "./ElapseDataChecking.css";

/**
 * ElapseDataChecking Component
 * 
 * This component displays elapse data information.
 * 
 * Props:
 *   - elapseData (String): Data for elapse checking.
 */
const ElapseDataChecking = ({ elapseData }) => {
    return (
        <div className="elapse-data-checking-wrapper">
            <span style={{ color: "green" }}>{elapseData}</span>
        </div>
    );
}

export default ElapseDataChecking;