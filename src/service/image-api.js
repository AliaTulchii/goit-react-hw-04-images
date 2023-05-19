import axios from 'axios';

const key = '34679822-1c5a5d4931a74610a4cbe01cd';
const url = 'https://pixabay.com/api/';
const filter = `&image_type=photo&orientation=horizontal&safesearch=true`;


export const getImages = async(query, page) => {
    const { data } = await axios.get(`${url}?key=${key}&q=${query}&${filter}&&page=${page}`);

    return data;
};