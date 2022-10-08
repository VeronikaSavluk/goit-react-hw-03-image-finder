import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

const per_page = 12;
const getImages = async (query, page) => {
    const { data } = await axios.get(`?q=${query}&page=${page}&key=${process.env.REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`);
    return await data.hits;
}

export default getImages;