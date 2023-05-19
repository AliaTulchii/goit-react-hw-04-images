import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types'

function ImageGalleryItem({ url, alt, showModal, largeImage})  {
    const newLargeImage = {
        largeImage: largeImage,
    }
   
    return (
        <li  className={css.ImageGalleryItem} onClick={()=>showModal(newLargeImage)}>
            
                <img
                    src={url}
                    alt={alt}                    
                    className={css.ImageGalleryItemImg} />
            
            </li>
    )
}

ImageGalleryItem.protoType = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    showModal: PropTypes.func.isRequired,
  };

export default ImageGalleryItem;