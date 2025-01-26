import React from 'react';

const NewEdits = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mb-4">NEW EDITS</h2>
      <div className="grid gap-4">
        <div className="relative">
          <img
            src="path/to/spring-preview-image.jpg"
            alt="Spring Preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white p-2">
            <p className="text-black">SPRING PREVIEW</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="path/to/transitional-styles-image.jpg"
            alt="Transitional Styles"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white p-2">
            <p className="text-black">TRANSITIONAL STYLES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEdits;
