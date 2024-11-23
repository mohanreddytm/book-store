
import './index.css'

const BookItem = (props) => {
    const {book} = props

    return(
        <li className='every-book-item'>
            <div className='book-item-content'>
                <img className='book-item-image' src={book.image} alt={book.title} />
                <h1 className='book-item-title'>{book.title}</h1>
                
            </div>
            <div>
                <p className='book-item-price'>{book.price}</p>
                <p className='book-item-view-details-one'>View Detials</p>
            </div>
        </li>
    )
} 

export default BookItem