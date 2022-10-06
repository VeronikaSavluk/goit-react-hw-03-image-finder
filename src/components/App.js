import { Component } from 'react';
import axios from 'axios';
import SearchBar from './searchbar';
import Loader from './loader';
import ImageGallery from './imagegallery';
import Button from "./button";
import Modal from './modal'
import { Section, Gallery } from './App.styled';

axios.defaults.baseURL = 'https://pixabay.com/api';

class App extends Component {
  PER_PAGE = 12;

  state = {
    query: '',
    images: [],
    loading: false,
    page: 1,
    disabled: 'false',
  }

  handleSearchForm = (query) => {
    this.setState({query, images: [], page: 1 });
  }

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query ||
      prevState.page !== page) {
      this.setState({ loading: true });
      try {
        const { data } = await axios.get(`?q=${query}&page=${page}&key=${process.env.REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.PER_PAGE}`);
        if (prevState.query !== query) {
          return this.setState({ images: data.hits });
        } else {
          return this.setState({ images: [...prevState.images, ...data.hits] });
        };
      } catch (error) {
          console.error(error);
      } finally {
       this.setState({ loading: false });
      }
    }
  }

  handlePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
}

  render() {
    const { loading, images } = this.state;
      return (
      <Section>
        <SearchBar onSubmit={this.handleSearchForm} />
        <Gallery>
        <ImageGallery images={images} />
          {loading && <Loader />}
          {!loading && images.length > 0 ? <Button onClick={this.handlePage} /> : null}
        </Gallery>
        <Modal />
      </Section>
    );
  }
};

export default App;