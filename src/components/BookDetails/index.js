import { useState, useEffect } from "react"
import Header from "../Header"

const BookDetails = (props) => {
    const {match} = props
    const {params} = match
    const {id} = params

    const [theBookDetail, setTheBookDetail] = useState([])
    
    useEffect(() => {
        const retreivingBookDetails = async () => {
            const url = `https://api.itbook.store/1.0/books/${id}`
            const response = await fetch(url)
            const fetchedBookDetails = await response.json()
            setTheBookDetail(fetchedBookDetails)
        }

        retreivingBookDetails()
    }, [])

    console.log(theBookDetail)
    
    return(
        <div>
            <Header />
            <div>
                <img src='' alt='' />

            </div>
        </div>
    )
}

export default BookDetails