import { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import arrow_right from '../assets/arrow-right.svg'
import '../styles/Slider.scss'


function Slider({data}){
    const swiperRef = useRef(null);

    useEffect(() => {
        register();

        const params = {
            slidesPerView: 1,
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                1100: {
                    slidesPerView: 3
                }
            }
        };

        Object.assign(swiperRef.current, params);

        swiperRef.current.initialize();
    }, []);

    return (
        <swiper-container init="false" ref={swiperRef}>
            {data.map((slide, index) => (
                <swiper-slide key={index} className="slide">
                    <div className="slide__header">
                        {Array.isArray(slide.tags) ? (
                            <div className="slide__tags">
                            {slide.tags.map((tag, tagIndex) => (
                                <div className="slide__tag tag" key={tagIndex}>{tag}</div>
                            ))}
                            </div>
                        ) : (
                            <div className="slide__tags tag">{slide.tags}</div>
                        )}
                        <img className="slide__image" src={slide.image} alt="titre test"></img>
                    </div>
                    <div className="slide__infos">
                        <div className="slide__infos-header">
                            <h3 className="slide__title">{slide.title}</h3>
                            <p className="slide__year">{slide.year}</p>
                        </div>
                        <p className="slide__description">{slide.description}</p>
                        <a href={slide.link} className="slide__button"><img src={arrow_right} alt="arrow-right"></img></a>
                    </div>

                </swiper-slide>
            ))}
        </swiper-container>
    )

}

export default Slider