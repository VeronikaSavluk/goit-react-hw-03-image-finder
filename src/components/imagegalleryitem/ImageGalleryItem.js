import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ url, tag, onClick }) => {
  return (
    <Item>
      <Image src={url} alt={tag} onClick={() => {onClick()}} />
    </Item>
  )
}

ImageGalleryItem.propTypes = {
  tag: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default ImageGalleryItem;