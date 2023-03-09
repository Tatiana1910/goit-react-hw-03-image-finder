import { Component } from 'react';

import 'modern-normalize';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GlobalStyle } from './GlobalStyles';
import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    page: 1,
    query: '',
  };

  handleSubmit = ({ query }, { resetForm }) => {
    this.setState({ query, page: 1 });
    resetForm();
  };

  handleCilck = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { query, page } = this.state;
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          query={query}
          page={page}
          handleCilck={this.handleCilck}
        />
        <GlobalStyle />
      </StyledApp>
    );
  }
}
