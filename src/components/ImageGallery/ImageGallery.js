import React, { Component } from "react";

import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputValue !== this.props.inputValue) {
      console.log("!!!Змінився запит");
      console.log("!!!prevProps.inputValue", prevProps.inputValue);
      console.log("!!!this.props.inputValue", this.props.inputValue);
    }
  }
  render() {
    return (
      <ul className={s.ImageGallery}>
        {/* <div>!!!ImageGalleryItem RENDER!!!</div> */}
        <ImageGalleryItem />
      </ul>
    );
  }
}

export default ImageGallery;
