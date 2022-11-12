import './slider.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Slider = ({sliderType}) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const imgs = [
            "imgs/img1.jpg",
            "imgs/img2.jpg",
            "imgs/img3.jpg",
            "imgs/img4.jpg",
            "imgs/img5.jpg"


    ]
const nextSlide = () => {
    if(slideIndex !== imgs.length){
            setSlideIndex(slideIndex + 1);
    }else if(slideIndex === imgs.length){
            setSlideIndex(1);
    }

};
const prevSlide = () => {
    if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
    }else if (slideIndex === 1){
            setSlideIndex(imgs.length)
    }
};
const clickDot = (index) => {
    setSlideIndex(index)
}
    return(
        <div className={`carousel-slider ${sliderType}`}>
                {
                        imgs.map((img, index) =>{
                                return <div className={slideIndex === index + 1 ? "slide active-slide" : "slide"}>
                                <img src={img}/>

                                </div>
                        } )
                }
               
                <FontAwesomeIcon icon={faArrowLeft} className="btn-slide prev"  onClick={prevSlide}/>
                <FontAwesomeIcon icon={faArrowRight} className="btn-slide next" onClick={nextSlide} />

               
                <div className='dots-container'>
                {
                        Array.from({length: 5}).map((item, index) => (
                         <div className={slideIndex === index+1 ? "dot active" : "dot"} onClick={() => clickDot(index + 1)}></div>
                        ))
                }
                </div>
           </div> 
    )
}


export default Slider;