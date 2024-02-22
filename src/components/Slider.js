import arrow_right from '../assets/arrow-right.svg'
import '../styles/Slider.scss'
import Flickity from 'react-flickity-component'
import previous_arrow from '../assets/arrow-left.svg'
import next_arrow from '../assets/arrow-right.svg'




function Slider({data}){

    let flickityOptions;

    if (window.matchMedia("(min-width: 768px)").matches) {
        flickityOptions = {
            initialIndex: 0,
            groupCells: 1,
            cellAlign: 'center',
            prevNextButtons: false,
            freeScroll: true,
            pageDots: false,
            contain: true,
            arrowShape: 'M32.2929 50.2929C31.9024 50.6834 31.9024 51.3166 32.2929 51.7071L38.6569 58.0711C39.0474 58.4616 39.6805 58.4616 40.0711 58.0711C40.4616 57.6805 40.4616 57.0474 40.0711 56.6569L34.4142 51L40.0711 45.3431C40.4616 44.9526 40.4616 44.3195 40.0711 43.9289C39.6805 43.5384 39.0474 43.5384 38.6569 43.9289L32.2929 50.2929ZM70 50L33 50V52L70 52V50Z'
        }
    }else{
        flickityOptions = {
            initialIndex: 0,
            groupCells: '75%',
            cellAlign: 'center',
            prevNextButtons: false,
            freeScroll: true,
            pageDots: false,
            contain: true,
            arrowShape: 'M32.2929 50.2929C31.9024 50.6834 31.9024 51.3166 32.2929 51.7071L38.6569 58.0711C39.0474 58.4616 39.6805 58.4616 40.0711 58.0711C40.4616 57.6805 40.4616 57.0474 40.0711 56.6569L34.4142 51L40.0711 45.3431C40.4616 44.9526 40.4616 44.3195 40.0711 43.9289C39.6805 43.5384 39.0474 43.5384 38.6569 43.9289L32.2929 50.2929ZM70 50L33 50V52L70 52V50Z'
        }
    }

    
    return (
        <div className="slider-section">
            <Flickity className="slider-container" elementType={'div'} options={flickityOptions} disableImagesLoaded={false} reloadOnUpdate static>
                {data.map((slide, index) => (
                    <div className="slide" key={index}>
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

                    </div>
                ))}
            </Flickity>
            <div className="slider-container__prev-next-buttons">
                <div className="previous"><img src={previous_arrow} alt="arrow-left"></img></div>
                <div className="next"><img src={next_arrow} alt="arrow-right"></img></div>
            </div>
        </div>
    )

}

export default Slider