import Banner from '../components/Banner'
import ImageWithTextSection from '../components/ImageWithTextSection'
import SliderSection from '../components/SliderSection'
import GallerySection from '../components/GallerySection'

// DATAS
let aboutDatas = {
    "title": "Lorem ipsum",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet aliquet ligula, id pharetra nulla. Nam id tempus ante. Nullam vehicula arcu ac eros condimentum ornare. Fusce venenatis bibendum sagittis. Aenean fermentum porttitor fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ultricies, metus sit amet ornare consectetur, erat massa auctor arcu, hendrerit lacinia arcu lorem a justo."
}

  
function Home() {
    return (
      <div className="Home">
        <Banner />
        <ImageWithTextSection title={aboutDatas.title} text={aboutDatas.text} />
        <SliderSection />
        <GallerySection />
      </div>
    );
  }
  
  export default Home;