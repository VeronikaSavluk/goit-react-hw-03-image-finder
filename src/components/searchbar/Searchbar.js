import { Component } from 'react';
import { Header, SearchForm, Button, Label, Input } from './Searchbar.styled';

class SearchBar extends Component{
  state = {
    query: '',
  }

  render() {
    return (
    <Header>
      <SearchForm>
        <Button type="submit">
          <Label>Search</Label>
        </Button>
        <Input
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
    )
  }
}

export default SearchBar;