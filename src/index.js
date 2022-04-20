import './sass/main.scss';
import Notiflix from 'notiflix';

// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// import * as ImageApiservice from './js/service/api-service';
import ImageApiService from './js/service/image-api';

// import {renderImage} from './js/renderImage'; //or
import markup from './templates/image';

// import { fetchImages } from './js/fetch-images';

import { getRefs } from './js/refs';
// const refs = getRefs(); //or
const {formEl, buttonEl, galleryEl} = getRefs();
const imageApiservice = new ImageApiservice();

// const options = {
//         totalItems: 0,
//         itemsPerPage: 40,
//         visiblePages: 5,
//         page: 1,
    // simpleLightBox: {
    //   captions: true,
    //   captionsData: 'alt',
    //   captionDelay: 250,
    // },
    // intersectionObserver: {
    //   root: null,
    //   threshold: 1,
    // },
//   };
//   const pagination = new Pagination('.tui-pagination', options);

// const BASE_URL = `https://pixabay.com/api/?key=26815523-fce97669ecba6a5ffa2a6f920`;
// fetch(BASE_URL).then(response => {
//     console.log(response);
//     if(!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json();
// });
// const API_KEY = '26815523-fce97669ecba6a5ffa2a6f920';
// const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;

// const page = pagination.getCurrentPage();

// import
//  async function fetchImages(page) {
//     const url = `${BASE_URL}&q=sun&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

//     try {
//         const responce = await fetch(url);
//         const img = await responce.json();

//         // console.log(responce);
//         // console.log(img);

//         return img;
//     } catch (error) {
//         console.log(error.message);
//     }
// }


async function initPage() {
   try {
    const data = await fetchImages(page);
    pagination.reset(data.totalHits);
    renderImages(data.hits);
} catch (error) {
    
} 
};

initPage();

//or
// fetchImages(page).then(data => {
//     pagination.reset(data.totalHits)
//     renderImages(data.hits)
// });

async function popular(event) {
    const data = await fetchImages(event.page);
    renderImages(data.hits);
}

async function afterUserInput(event) {
    const data = await fetchImages(event.page);
    renderImages(data.hits);
}

pagination.on('afterMove', popular);
// console.dir(pagination);
function renderImages(images) {
    galleryEl.insertAdjacentHTML('beforeend', markup(images))
}

formEl.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
    event.preventDefault();
    galleryEl.innerHTML = '';
    const inputValue = event.currentTarget.elements.searchQuery.value;
    // console.log(inputValue);
    // if(inputValue) {
    //     // buttonEl.disabled = true;
    //     galleryEl.innerHTML = '';
    // } else if(inputValue === '') {
    //     document.innerHTML = '';
    // }
    // ImageApiService.searchQuery = inputValue;
    pagination.off('afterMove', popular);
    pagination.on('afterMove', afterUserInput);

    const data = await searchBySubmit(inputValue);
    console.log(data);
    renderImages(data.hits);
    

    pagination.reset(data.totalHits);
    formEl.reset()
}

async function searchBySubmit(searchQuery) {
    const url = `${BASE_URL}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

        try {
            const responce = await fetch(url);
            const img = await responce.json();
    
            // console.log(responce);
            // console.log(img);
    
            return img;
        } catch (error) {
            console.log(error.message);
        }
}
