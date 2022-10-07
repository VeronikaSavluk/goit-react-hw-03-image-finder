import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ url, tag, onClick }) => {
  return (
    <Item>
      <Image src={url} alt={tag} onClick={() => {onClick()}} />
    </Item>
  )
}
export default ImageGalleryItem;