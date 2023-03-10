import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ smallImg, tags, largeImg, onClick }) => {
  return (
    <GalleryItem
      onClick={() => {
        onClick(largeImg, tags);
      }}
    >
      <GalleryItemImage src={smallImg} alt={tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
