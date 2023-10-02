import double_stars from '../assets/double-stars.svg'
import simple_star from '../assets/simple-star.svg'

function Gallery({data}){
    return(
        <div className="gallery__items">
            <img className="gallery__stickers gallery__stickers--double-stars" src={double_stars} alt="sticker with stars"></img>
            <img className="gallery__stickers gallery__stickers--simple-star" src={simple_star} alt="sticker with star"></img>
            {data.map(({image, position, alt}) => (
                <div className="gallery__item">
                    <img className="image" key={position} src={image} alt={alt}></img>
                </div>
            ))}
        </div>
    )
}

export default Gallery