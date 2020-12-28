import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ image }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt=""
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
}

export default ImageGalleryItem;
