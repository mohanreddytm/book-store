
import {Link} from 'react-router-dom'

import './index.css'


const BookItem = (props) => {
    const {book} = props
    const {isbn13} = book

    return(
        <Link to={`/book/${isbn13}`} className='link-normal'>
            <li className='every-book-item'>
                <div className='book-item-content'>
                    <img className='book-item-image' src={book.image} alt={book.title} />
                    <h1 className='book-item-title'>{book.title}</h1>
                    
                </div>
                <div className='book-item-content'>
                    <p className='book-item-price'>{book.price}</p>
                    <p className='book-item-view-details-one'>View Detials</p>
                </div>
            </li>
        </Link>
        
    )
} 

export default BookItem