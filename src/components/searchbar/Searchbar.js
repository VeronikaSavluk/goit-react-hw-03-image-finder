import { Component } from 'react';

class SearchBar extends Component{
    state = {

    }
    render() {
        return (
            <header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}

export default SearchBar;