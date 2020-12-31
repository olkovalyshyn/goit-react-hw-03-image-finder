import PropTypes from "prop-types";

import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";

function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map((image) => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onOpenModal={onOpenModal}
          />
        );
      })}
    </ul>
  );
}
// }

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
  onOpenModal: PropTypes.func,
};
