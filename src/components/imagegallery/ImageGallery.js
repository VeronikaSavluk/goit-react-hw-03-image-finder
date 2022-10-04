import ImageGalleryItem from "components/imagegalleryitem/ImageGalleryItem";
import Button from "./button/Button";
import { List } from './ImageGallery.styled';

const ImageGallery = ({ props }) => {
    return (
        <List>
            <ImageGalleryItem />
            <Button />
        </List>
    )
};

export default ImageGallery;