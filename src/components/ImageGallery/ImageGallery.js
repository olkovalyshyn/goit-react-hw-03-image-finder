import React, { Component } from "react";

import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";

function ImageGallery({ images, onToggleModal }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map((image) => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onToggleModal={onToggleModal}
          />
        );
      })}
    </ul>
  );
}
// }

export default ImageGallery;
