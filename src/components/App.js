import { Component } from 'react';
import { ImSad } from "react-icons/im";
import SearchBar from './searchbar';
import Loader from './loader';
import ImageGallery from './imagegallery';
import Button from "./button";
import Modal from './modal'
import { Section, Gallery } from './App.styled';
import getImages from './api';

class App extends Component {
    state = {
    query: '',
    images: [],
    loading: false,
    page: 1,
    disabled: false,
    showModal: false,
    largeImage: null,
    error: null,
  }

  async componentDidUpdate(_, prevState) {
    const {images} = this.state;
    const { query, page } = this.state;
    if (prevState.query !== query ||
      prevState.page !== page) {
      this.setState({ loading: true,  disabled: false});
      try {
        const newImages = await getImages(query, page);
        if (newImages.length < 12) {
          this.setState({ disabled: true });
        };
          return this.setState({ images: [...images, ...newImages] });
      } catch (error) {
          this.setState({ error: 'Faild to load images and photos' });
      } finally {
       this.setState({ loading: false });
      }
    }
  }

  handleSearchForm = (query) => {
    this.setState({query, images: [], page: 1 });
  }

  handlePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  toggleShowModal = () => {
    this.setState(({showModal}) => ({ showModal: !showModal }));
  }

  handleLargeImage = (largeImageUrl) => {
    this.setState({ largeImage: largeImageUrl, showModal: !this.showModal });
}

  render() {
    const { loading, images, disabled, showModal, largeImage, error } = this.state;
    const { handleSearchForm, handleLargeImage, toggleShowModal, handlePage } = this;

    return (
    <Section>
      <SearchBar onSubmit={handleSearchForm} />
        <Gallery>
          {error && <div><ImSad color="IndianRed" font-size="25px" /> <span>{error}</span></div>}
          <ImageGallery images={images} onSelect={handleLargeImage} />
          {showModal && (<Modal onClose={toggleShowModal} >
          <img src={largeImage} alt="" />
        </Modal>)}
        {loading && <Loader />}
        {images.length > 0 && !loading && !disabled && <Button onClick={handlePage} />}
      </Gallery>
    </Section>
    );
  }
};

export default App;