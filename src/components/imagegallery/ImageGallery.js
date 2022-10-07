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

export default ImageGallery;