// Your API key: 19034439-608cc2a9f2617ed99a498289b

function fetchGallery(name, pageNumber) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${pageNumber}&key=19034439-608cc2a9f2617ed99a498289b&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => console.log(response.json()));
}

const api = { fetchGallery };
export default api;
