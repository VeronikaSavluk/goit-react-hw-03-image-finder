import PropTypes from 'prop-types';
import ImageGalleryItem from "components/imagegalleryitem";
import { List } from './ImageGallery.styled';

const ImageGallery = ({ images, onSelect }) => {

    return (
        <List>
            {images && images.map(({id, tags, webformatURL, largeImageURL}) =>
                <ImageGalleryItem key={id} tag={tags} url={webformatURL} onClick={() => onSelect(largeImageURL)}>
                { largeImageURL }
                </ImageGalleryItem>
                )}
        </List>
    )
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            tags: PropTypes.string.isRequired,
            id: PropTypes.number,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }),
    ),
    onSelect: PropTypes.func,
}

export default ImageGallery;