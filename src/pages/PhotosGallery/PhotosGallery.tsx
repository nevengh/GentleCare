import './PhotosGallery.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../assets/images/diana-polekhina-F68HtpYHu_w-unsplash.jpg';
// import slide2 from '../../assets/images/another-image.jpg';

const PhotosGallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div className='PhotosGallery'>
            <h1 className='gallery_head'>Gallery</h1>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='slider_con'>
                        <div className='top_section'>
                            <span className='section_text'>Before</span>
                            <img src={slide1} alt="Top Section Image" />
                        </div>
                        <div className='bottom_section'>
                            <span className='section_text'>After</span>
                            <img src={slide1} alt="Bottom Section Image" />
                        </div>
                    </div>
                    <div className='slider_con'>
                        <div className='top_section'>
                            <span className='section_text'>Before</span>
                            <img src={slide1} alt="Top Section Image" />
                        </div>
                        <div className='bottom_section'>
                            <span className='section_text'>After</span>
                            <img src={slide1} alt="Bottom Section Image" />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default PhotosGallery;
