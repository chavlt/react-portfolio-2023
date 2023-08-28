import Header from './Header'
import Banner from './Banner'
import ImageWithTextSection from './ImageWithTextSection'
import SliderSection from './SliderSection'


// DATAS
let aboutDatas = {
  "title": "Lorem ipsum",
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet aliquet ligula, id pharetra nulla. Nam id tempus ante. Nullam vehicula arcu ac eros condimentum ornare. Fusce venenatis bibendum sagittis. Aenean fermentum porttitor fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ultricies, metus sit amet ornare consectetur, erat massa auctor arcu, hendrerit lacinia arcu lorem a justo."
}



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ImageWithTextSection title={aboutDatas.title} text={aboutDatas.text} />
      <SliderSection />
    </div>
  );
}

export default App;
