import Banner from '../components/Banner'
import ImageWithTextSection from '../components/ImageWithTextSection'
/* import GallerySection from '../components/GallerySection' */
import ShortProjectsList from '../components/ShortProjectsList'

// DATAS
let aboutDatas = {
    "title": "Mon parcours",
    "text": ["Développeuse front-end spécialisée en e-commerce, je travaille aujourd’hui sur Shopify au sein de l’agence Lugus, où je conçois et développe des interfaces pour des boutiques en ligne. J’interviens aussi bien sur le développement front-end que sur la création de maquettes UI, du module spécifique à la refonte complète de sites.",
    "En plus du développement front-end, je conçois également les interfaces que je développe, ce qui me permet de garder une vision globale du projet, du design à l’intégration. Je porte une attention particulière aux parcours utilisateurs, avec l’objectif de créer des expériences claires, fluides et orientées conversion.", 
    "J’aime travailler sur des projets e-commerce où chaque détail compte : réduire les frictions, guider l’utilisateur naturellement et traduire l’identité d’une marque en une expérience simple, efficace et engageante."]
}

  
function Home() {
    return (
      <div className="Home">
        <Banner />
        <ShortProjectsList />
        <ImageWithTextSection title={aboutDatas.title} text={aboutDatas.text} />
        {/* <GallerySection /> */}
      </div>
    );
  }
  
  export default Home;
  