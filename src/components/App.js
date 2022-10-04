import SearchBar from "./searchbar";
import ImageGallery from "./imagegallery";
import Modal from "./modal/Modal";
import { Component } from "react";

class App extends Component {
  state = {

  }
  render() {
    return (
      <div>
        <SearchBar
          // onSearch={ }
        />
        <ImageGallery />
        <Modal />
      </div>
    );
  }
};

export default App;