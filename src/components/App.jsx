import { useEffect, useState } from "react"
import Searchbar from "./Searchbar/Searchbar"
import { getImages } from '../service/image-api.js'
import ImageGallery from './ImageGallery/ImageGallery';
import Button from "./Button/Button";
import Loader from './Loader/Loader'
import Modal from "./Modal/Modal";
import css from './App.module.css'


const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
      setLoading(true);
  
      getImages(query, page)
              .then(({ hits, totalHits }) => {
                if (!hits.length) {
                  setIsEmpty(true);
                  
                  return
                }
                setImages((prevImages) => [...prevImages, ...hits]);
                setShowLoadMore(page < Math.ceil(totalHits / 15));
                setLargeImage(hits.largeImageUrl);
              }).finally(() => setLoading(false));
    
  },[page, query])


  
      
    
    const  handleSubmit = (newQuery) => {
        if (query !== newQuery) {
          setQuery(newQuery );
          setImages( [] );
          setPage(1)
        }
        
      }
    
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
        
      }
    
  const toggleModal = () => {
    setIsShowModal(!isShowModal);

      }
    
  const showModal = (url) => {
    setLargeImage(url);
    console.log(url);
    toggleModal();
      }
    



  return <div className={css.ImageFinder}>
          <Searchbar onSubmit={handleSubmit} />
          <ImageGallery images={images} largeImage={largeImage} showModal={showModal} />
          {showLoadMore && <Button loadMore={handleLoadMore} />}
          {isEmpty  && <h1>Sorry, we didn't find any images... Try again!</h1>}
          {loading && <Loader />}
          {isShowModal && <Modal onClose={showModal} largeImage={largeImage} />}
        </div>
}

export default App;


