import ImageGalleryItem from "components/imagegalleryitem";
import { List } from './ImageGallery.styled';

const ImageGallery = ({images}) => {
    return (
        <List>
            {images && images.map(({id, tags, webformatURL}) =>
                <ImageGalleryItem key={id} tag={tags} url={webformatURL} />
                )}
        </List>
    )
};

export default ImageGallery;