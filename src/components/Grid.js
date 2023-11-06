// Grid.js
import React, { useState } from 'react';
import Image from './Image';
import DraggableImage from './DraggableImage'; // Import DraggableImage
import Header from './Header';

function Grid({ selectedImagesCount, setSelectedImagesCount }) {
    const [images, setImages] = useState([]);
    const [firstImageIndex, setFirstImageIndex] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        const newImage = {
            src: URL.createObjectURL(file),
            size: firstImageIndex === null ? 'large' : 'small',
            id: Date.now(),
            isSelected: false,
        };

        setImages([...images, newImage]);

        if (firstImageIndex === null) {
            setFirstImageIndex(images.length);
        }
    }

    const toggleImageSelection = (imageId) => {
        const newSelectedImages = images.map((image) =>
            image.id === imageId ? { ...image, isSelected: !image.isSelected } : image
        );
        const selectedCount = newSelectedImages.filter((image) => image.isSelected).length;
        setSelectedImagesCount(selectedCount);
        setImages(newSelectedImages);
    };

    const onDeleteSelectedImages = () => {
        const remainingImages = images.filter((image) => !image.isSelected);
        setImages(remainingImages);
        setSelectedImagesCount(0);
    };

    const moveImage = (fromId, toId) => {
        const fromIndex = images.findIndex((image) => image.id === fromId);
        const toIndex = images.findIndex((image) => image.id === toId);

        const newImages = [...images];
        [newImages[fromIndex], newImages[toIndex]] = [newImages[toIndex], newImages[fromIndex]];

        // Determine the index of the image that should be "large"
        const indexOfLargeImage = toIndex;

        // Update the size property for each image
        newImages.forEach((image, index) => {
            image.size = index === indexOfLargeImage ? 'large' : 'small';
        });

        setImages(newImages);
    };

    return (
        <div>
            <Header selectedImagesCount={selectedImagesCount} onDeleteSelectedImages={onDeleteSelectedImages} />
            <div className="grid">
                {images.map((image, index) => (
                    <DraggableImage
                        key={image.id}
                        id={image.id}
                        src={image.src}
                        size={index === firstImageIndex ? 'large' : 'small'}
                        isSelected={image.isSelected}
                        onToggleSelection={() => toggleImageSelection(image.id)}
                        moveImage={moveImage}
                    />
                ))}
                <label className="add-image-label">
                    <input type="file" accept="image/jpeg, image/webp, image/jpg" onChange={handleImageUpload} />
                    Add Image
                </label>
            </div>
        </div>
    );
}

export default Grid;
