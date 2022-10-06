import SearchBar from './searchbar';
import ImageGallery from './imagegallery';
import Modal from './modal/Modal';
import { Component } from 'react';
import { Section } from './App.styled';

class App extends Component {
  PER_PAGE = 12;
  state = {
    query: '',
  }

  handleSearchForm = (query) => {
    this.setState({query});
}
  render() {
    const { query } = this.state;
    return (
      <Section>
        <SearchBar onSubmit={this.handleSearchForm} />
        <ImageGallery query={query} />
        <Modal />
      </Section>
    );
  }
};

export default App;