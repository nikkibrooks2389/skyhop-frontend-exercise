import React from 'react';


const HorizontalLine = ({ width = '100%', height = '1px', color = '#ccc', margin = '1rem  0' }) => {
    const lineStyle = {
        width: width,
        height: height,
        backgroundColor: color,
        margin: margin,
    };

    return <div style={lineStyle} />;
};

export default HorizontalLine;