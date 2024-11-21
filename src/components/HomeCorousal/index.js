
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


const HomeCorousal = (props) => {
    const {eachBookView} = props
    console.log(eachBookView)
    return(
        <SwiperSlide>{eachBookView.title}</SwiperSlide>
    )

}

export default HomeCorousal

<Swiper className="mySwiper" spaceBetween={30} slidesPerView={3}>
                            {
                            booksList.map(eachBook => (
                                <HomeCorousal eachBookView={eachBook} key={eachBook.isbn13} />)
                            )}