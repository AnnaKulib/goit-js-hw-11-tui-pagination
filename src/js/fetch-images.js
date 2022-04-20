const API_KEY = '26815523-fce97669ecba6a5ffa2a6f920';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;

export async function fetchImages(page) {
    const url = `${BASE_URL}&q=city&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
    try {
        const responce = await fetch(url);
        const img = await responce.json();
        return img;
    } catch (error) {
        console.log(error.message);
    }
}
