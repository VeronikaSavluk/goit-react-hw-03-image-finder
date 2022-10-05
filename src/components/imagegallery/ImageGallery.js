import ImageGalleryItem from "components/imagegalleryitem/ImageGalleryItem";
import Button from "../button/Button";
import { List } from './ImageGallery.styled';

const ImageGallery = ({ query }) => {
    return (
        <List>
            {{query} !== '' && <ImageGalleryItem />}
            <Button text="Load more"/>
        </List>
    )
};

export default ImageGallery;