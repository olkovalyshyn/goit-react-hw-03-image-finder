import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ image }) {
  return (
    <li className={s.ImageGalleryItem}>
      <div>!!!Тест від ImageGalleryItem!!!</div>
      <img
        src={image.webformatURL}
        alt=""
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
}

export default ImageGalleryItem;
