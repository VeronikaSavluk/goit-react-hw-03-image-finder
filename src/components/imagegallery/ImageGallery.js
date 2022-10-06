import axios from 'axios';
import ImageGalleryItem from "components/imagegalleryitem/ImageGalleryItem";
import { Component } from "react";
// import Loader from 'components/loader';
import Button from "../button/Button";
import { List } from './ImageGallery.styled';

axios.defaults.baseURL = 'https://pixabay.com/api';

class ImageGallery extends Component {
    PER_PAGE = 12;
    state = {
        images: null,
        page: 1,
        loading: false,
    }
    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.query !== this.props.query) {
            this.setState({ loading: true });
            try {
                const { data } = await axios.get(`?q=${this.props.query}&page=${this.state.page}&key=${process.env.REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.PER_PAGE}`);
                return this.setState({ images: data.hits });
            } catch (error) {
                console.error(error);
            } finally {
             this.setState({ loading: false });
            }
        }
    }

    render() {
        const { images } = this.state;
        return (
            <List>
                {/* {loading && <Loader />} */}
                {images && images.map(({id, tags, webformatURL}) =>
                    <ImageGalleryItem key={id} tag={tags} url={webformatURL} />
                )}
                {images && <Button text="Load more" />}
            </List>
        )
    }
};

export default ImageGallery;