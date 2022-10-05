import SearchBar from './searchbar';
import ImageGallery from './imagegallery';
import Modal from './modal/Modal';
import { Component } from 'react';
import { Section } from './App.styled';
import axios from 'axios';
import { BASE_URL, encodeURIComponent } from '../base/constants';
class App extends Component {
  PER_PAGE = 12;
  state = {
    images: [],
    query: '',
    page: 1,
  }

async componentDidMount() {
  try {
    const URL = `${BASE_URL}&${encodeURIComponent}&q=${this.query}&page=${this.page}&per_page=${this.PER_PAGE}`;
    console.log(URL);
    const {data} = await axios.get(URL);
    return data;
  } catch (error) {
console.error(error);
}
}
  render() {
    const { query } = this.state;
    return (
      <Section>
        <SearchBar onSearch={query} />
        <ImageGallery query={query} />
        <Modal />
      </Section>
    );
  }
};

export default App;