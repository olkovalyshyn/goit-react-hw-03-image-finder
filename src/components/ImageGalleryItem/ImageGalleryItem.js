import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ image, onOpenModal }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        onClick={onOpenModal}
        src={image.webformatURL}
        data-large-img-for-modal={image.largeImageURL}
        alt=""
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
}

export default ImageGalleryItem;
