import React from 'react';
import './Button.css'; // Make sure this path is correct

/**
 * Component: Button
 * Purpose: Renders a generic button that can be reused throughout the application.
 * Props:
 *   type (String): Specifies the button style/type.
 *   onClick (Function): Function to call when the button is clicked.
 *   children (Node): The content to be displayed inside the button.
 *   disabled (Boolean): If true, disables the button.
 *   ...props (Object): Additional props to pass to the button element.
 */
const Button = ({ type = "primary", onClick, children, disabled, ...props }) => {

    const className = `button ${type}-button`;

    return (
        <button className={className} onClick={onClick} disabled={disabled} {...props}>
            {children}
        </button>
    );
};

export default Button;