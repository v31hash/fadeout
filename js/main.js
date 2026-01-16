
import { loadMovies } from './movies.js';
import { loadTV } from './tv.js';

const API_KEY = 'cb7c7779c5c4232012594c012cf9a701';
const BASE_URL = 'https://api.themoviedb.org/3/';
const MAX_TRENDS = 6;

window.addEventListener('DOMContentLoaded', () => {
  loadMovies({ apiKey: API_KEY, baseUrl: BASE_URL, max: MAX_TRENDS }); // from file
  loadTV({ apiKey: API_KEY, baseUrl: BASE_URL, max: MAX_TRENDS });     // from file
  
  // const searchBtn = document.querySelector('.search_action');
  // if (searchBtn) {
  //   searchBtn.addEventListener('click', () => {
  //     window.location.href = 'search.html';
  //   });
  //   searchBtn.addEventListener('keydown', (e) => {
  //     if (e.key === 'Enter' || e.key === ' ') {
  //       e.preventDefault();
  //       searchBtn.click();
  //     }
  //   });
  // }
});
