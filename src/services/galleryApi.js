// Your API key: 19034439-608cc2a9f2617ed99a498289b

async function fetchGallery(name, pageNumber) {
  const response = await fetch(
    `https://pixabay.com/api/?q=${name}&page=${pageNumber}&key=19034439-608cc2a9f2617ed99a498289b&image_type=photo&orientation=horizontal&per_page=12`
  );
  const newImages = await response.json();
  return newImages.hits;
}

const api = { fetchGallery };
export default api;
