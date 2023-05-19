import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Searchbar = ({onSubmit}) => {
  const [query, setQuery] = useState('');


  const handleTextChange = e => {
        setQuery( e.currentTarget.value.toLowerCase());
      }
    
  const handleSubmit = e => {
        e.preventDefault();
    
        if (query.trim() === '') {
          toast.error('Enter what image you are looking for!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
              });
          return;
      }
    
        onSubmit(query);
        setQuery('');
      };
    
    
    
         return (
           <header className={css.Searchbar}>
           <form onSubmit={handleSubmit} className={css.SearchForm }>
             <input
               className={css.SearchFormInput}
               type="text"
              
               placeholder="Search images and photos..."
               value={query}
               onChange={handleTextChange}
             />
             <button type="submit" className={css.SearchFormButton}>
             <span className={css.SearchFormButtonLabel}> <FaSearch /></span>
             </button>
           </form>
         </header>
           )
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

// export default class Searchbar extends Component{
//   state = {
//     query: '',
//   };

  

//   handleTextChange = e => {
//     this.setState({ query: e.currentTarget.value.toLowerCase() });
//   }

//   handleSubmit = e => {
//     e.preventDefault();

//     if (this.state.query.trim() === '') {
//       toast.error('Enter what image you are looking for!', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//           });
//       return;
//   }

//     this.props.onSubmit(this.state.query);
//     this.setState({ query: '' });
//   };


//   render() {
//     return (
//       <header className={css.Searchbar}>
//       <form onSubmit={this.handleSubmit} className={css.SearchForm }>
//         <input
//           className={css.SearchFormInput}
//           type="text"
          
//           placeholder="Search images and photos..."
//           value={this.state.query}
//           onChange={this.handleTextChange}
//         />
//         <button type="submit" className={css.SearchFormButton}>
//         <span className={css.SearchFormButtonLabel}> <FaSearch /></span>
//         </button>
//       </form>
//     </header>
//       )
//   }

  
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }