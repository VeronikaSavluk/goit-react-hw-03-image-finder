import { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { Header, SearchForm, Button, Label, Input } from './Searchbar.styled';

class SearchBar extends Component{
  initialValues = {
    query: '',
  }
  state = this.initialValues;

  schema = yup.string().required()

  hendleSubmit = (values, { resetForm }) => {
    const searchQuery = values.query.split(" ").join("+");
    if (searchQuery !== '') {
      this.props.onSubmit(searchQuery);
      resetForm();
    };
  }
  render() {
    const {initialValues, schema, hendleSubmit} = this;
    return (
      <Header>
        <Formik initialValues={initialValues}
          validationSchema={schema}
          onSubmit={hendleSubmit}
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

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
}

export default SearchBar;