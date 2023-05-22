import css from './Modal.module.css'
import { useEffect } from 'react';
import PropTypes from 'prop-types'


const Modal = ({largeImage,onClose}) => {
  
  const handleBackdrop = e => {
    if (e.target !== e.currentTarget) {
      onClose();
    }
  };


  useEffect(() => {
    
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    }
  }, [onClose]);
  

  
    
      
    
      

  return ( <div className={css.Overlay} onClick={handleBackdrop}>
                <img
                    src={largeImage}
                    alt=""
                    className={css.Modal}
                />
            </div>)
}

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
  };


