import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';

const API_KEY = '26815523-fce97669ecba6a5ffa2a6f920';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;



// export async function getImages(name, page, perPage) {
//     const params = new URLSearchParams({
//         key: API_KEY,
//         per_Page: perPage,
//         page: page,
//         q: name,
//         image_tupe: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//     })
//     try {
//         const response = await axios.get(`?${params}`);
//         console.log(response);
//         return response.data;
//     } catch (error) {
//         Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
//     }
// }

