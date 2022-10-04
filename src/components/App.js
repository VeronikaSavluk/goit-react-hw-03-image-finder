import SearchBar from './searchbar';
import ImageGallery from './imagegallery';
import Modal from './modal/Modal';
import { Component } from 'react';
import { Section } from './App.styled';

class App extends Component {
  state = {

  }
  render() {
    return (
      <Section>
        <SearchBar
          // onSearch={ }
        />
        <ImageGallery />
        <Modal />
      </Section>
    );
  }
};

export default App;