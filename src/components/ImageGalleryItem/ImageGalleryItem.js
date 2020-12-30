import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ image, onToggleModal }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        onClick={onToggleModal}
        src={image.webformatURL}
        data-large-img-for-modal={image.largeImageURL}
        alt=""
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
}

export default ImageGalleryItem;
