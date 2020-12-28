import React, { Component } from "react";

import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";

function ImageGallery({ images }) {
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.inputValue !== this.props.inputValue) {
  //     console.log("!!!Змінився запит");
  //     console.log("!!!prevProps.inputValue", prevProps.inputValue);
  //     console.log("!!!this.props.inputValue", this.props.inputValue);
  //   }
  // }
  // render() {
  return (
    <ul className={s.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem key={image.key} image={image} />
      ))}
      {/* {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} />
      ))} */}

      {/* <div>!!!ImageGalleryItem RENDER!!!</div> */}
      {/* <ImageGalleryItem /> */}
    </ul>
  );
}
// }

export default ImageGallery;
