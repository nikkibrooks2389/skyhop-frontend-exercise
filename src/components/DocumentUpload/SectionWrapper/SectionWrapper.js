import React from "react";
import "./SectionWrapper.css";

/**
 * SectionWrapper Component
 * 
 * This component wraps a section with a header.
 * 
 * Props:
 *   - children (ReactNode): Content to be wrapped.
 *   - header (String): Header for the section.
 */
const SectionWrapper = ({ children, header, style }) => {
    return (
        <section className="document-upload-section-wrapper" style={style}>
            <h2>{header}</h2>
            {children}
        </section>
    );
}

export default SectionWrapper;