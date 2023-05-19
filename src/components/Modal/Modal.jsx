import css from './Modal.module.css'
import { useEffect } from 'react';
import PropTypes from 'prop-types'


const Modal = ({largeImage,onClose}) => {

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

  
    
      
    
      const handleBackdrop = e => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          };

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


// class Modal extends Component {
//   componentDidMount = () => {
//     window.addEventListener('keydown', this.handleKeydown);
//   };

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeydown);
//   }

//   handleKeydown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//     handleBackdrop = e => {
//         if (e.target === e.currentTarget) {
//           this.props.onClose();
//         }
//       };
//     render() {
//         const { largeImage} = this.props.largeImage;
//         return (
//             <div className={css.Overlay} onClick={this.handleBackdrop}>
//             <img
//                 src={largeImage}
//                 alt=""
//                 className={css.Modal}
//             />
//         </div>
//         )
            
        
//     }
// }

// export default Modal;

