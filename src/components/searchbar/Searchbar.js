import { Component } from 'react';
import { Formik } from 'formik';
import { ImSearch } from 'react-icons/im';
import { Header, SearchForm, Button, Label, Input } from './Searchbar.styled';

class SearchBar extends Component{
  initialValues = {
    query: '',
  }
state = this.initialValues;

  hendleSubmit = (values, { resetForm }) => {
    const searchQuery = values.query.split(" ").join("+");
    if (searchQuery !== '') {
      // values.query = searchQuery;
      this.props.onSubmit(searchQuery);
      resetForm();
    };
  }
  render() {
    return (
      <Header>
        <Formik initialValues={this.initialValues}
          onSubmit={this.hendleSubmit}
        >
          <SearchForm>
            <Button type="submit">
              <ImSearch />
              <Label>Search</Label>
            </Button>
            <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
              name="query"
              required
            />
          </SearchForm>
        </Formik>
      </Header>
    )
  }
}

export default SearchBar;