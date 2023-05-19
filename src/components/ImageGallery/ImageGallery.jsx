import PropTypes from 'prop-types'
import css from './ImageGallery.module.css'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';






function ImageGallery({images, showModal}) {
    return (
        <ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
                key={id}
                url={webformatURL}
                alt={tags}
                largeImage={largeImageURL}
                showModal={showModal}
            />
        
        ))}
      </ul>
    )
}


ImageGallery.protoTypes = {
    showModal: PropTypes.func.isRequired,
    images: PropTypes.array.isRequired,
  };

export default ImageGallery;