import { REQUEST_URL } from '../constants/news';
import { converter } from './converter';

export const getNews = () => (
  fetch(REQUEST_URL)
    .then((response) => (response.json()))
    .then((data) => converter(data['response'].results)) 
)