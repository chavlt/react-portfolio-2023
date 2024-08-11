import Banner from '../components/Banner'
import ImageWithTextSection from '../components/ImageWithTextSection'
/* import GallerySection from '../components/GallerySection' */
import ShortProjectsList from '../components/ShortProjectsList'

// DATAS
let aboutDatas = {
    "title": "Lorem ipsum",
    "text": "Je suis développeuse front-end chez Lugus, une agence d'experts Shopify. Avec un parcours académique solide en MMI à l'IUT de Belfort-Montbéliard (DUT et Licence) et une spécialisation à Nancy, j'ai acquis une double compétence unique : une licence en webdesign et une licence en développement web. Cette combinaison me permet d'allier créativité graphique et expertise technique pour concevoir des interfaces utilisateur attrayantes et performantes. Passionnée par le développement front-end, je m'efforce de toujours améliorer mes compétences et de relever de nouveaux défis."
}

  
function Home() {
    return (
      <div className="Home">
        <Banner />
        <ImageWithTextSection title={aboutDatas.title} text={aboutDatas.text} />
        <ShortProjectsList />
        {/* <GallerySection /> */}
      </div>
    );
  }
  
  export default Home;
  