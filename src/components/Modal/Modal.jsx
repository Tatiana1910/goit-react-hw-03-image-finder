import { Component } from 'react';

import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';
let scrollPosition = 0;

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    this.disableScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    this.enableScroll();
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({ top: scrollPosition });
    document.documentElement.style.scrollBehavior = '';
  };

  disableScroll = () => {
    scrollPosition = window.scrollY;
    document.body.style.cssText = `
      position: fixed;
      top: -${scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
    document.documentElement.style.scrollBehavior = 'unset';
  };

  render() {
    const { largeImageURL, tags } = this.props;

    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow src={largeImageURL} alt={tags} />
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
