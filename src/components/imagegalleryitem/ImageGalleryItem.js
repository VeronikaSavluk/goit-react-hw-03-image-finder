import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({url, tag}) => {
  return (
    <Item>
      <Image src={url} alt={tag} />
    </Item>
  )
}
export default ImageGalleryItem;