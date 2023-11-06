import React from 'react';

function Image({ src, size, isSelected, onToggleSelection }) {
    const imageContainerStyle = {
        position: 'relative',
    };

    const checkboxStyle = {
        position: 'absolute',
        top: '5px',
        left: '5px',
    };

    return (
        <div className={`image ${size === 'large' ? 'large' : ''}`} style={imageContainerStyle}>
            <input
                type="checkbox"
                className="select-checkbox"
                style={checkboxStyle}
                onChange={onToggleSelection}
                checked={isSelected}
            />
            <img src={src} alt="Gallery Image" />
        </div>
    );
}

export default Image;
