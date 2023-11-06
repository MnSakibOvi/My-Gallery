// DraggableImage.js
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes'; // Create this file for defining item types

const DraggableImage = ({ id, src, size, isSelected, onToggleSelection, moveImage }) => {
    const [, ref] = useDrag({
        type: ItemTypes.IMAGE,
        item: { id },
    });

    const [, drop] = useDrop({
        accept: ItemTypes.IMAGE,
        hover(item) {
            if (item.id !== id) {
                moveImage(item.id, id);
                item.id = id;
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} className={`image ${size === 'large' ? 'large' : ''}`}>
            <input type="checkbox" className="select-checkbox" onChange={onToggleSelection} checked={isSelected} />
            <img src={src} alt="Gallery Image" />
        </div>
    );
};

export default DraggableImage;
