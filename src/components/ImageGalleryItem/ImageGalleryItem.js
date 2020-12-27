import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem() {
  return (
    <li className={s.ImageGalleryItem}>
      <div>!!!Тест від ImageGalleryItem!!!</div>
      <img src="" alt="" className={s.ImageGalleryItemImage} />
    </li>
  );
}

export default ImageGalleryItem;
