import '../styles/LegalPage.scss'

function LegalNotice() {
  return (
    <div className="legal-page">
      <h1>Mentions légales</h1>

      <div className="legal-page__group">
        <p>Éditeur du site :</p>
        <p>Nom : Charlène Villiette</p>
        <p>Adresse : Belfort 90000, France</p>
        <p>Email : charlenevilliette70@gmail.com</p>
      </div>


      <div className="legal-page__group">
        <p>Directrice de publication : Charlène Villiette</p>
      </div>

      <div className="legal-page__group">
        <p>Hébergeur du site :</p>
        <p>Hébergement assuré par IONOS SARL,</p>
        <p>7 Place de la Gare, BP 70109,</p>
        <p>57200 Sarreguemines Cedex, France</p>
      </div>

      <div className="legal-page__group">
        <p>Email : info@ionos.fr</p>
        <p>Téléphone : 09 70 80 89 11</p>
      </div>

      <div className="legal-page__group">
        <p>Conformément à la loi n°2004‑575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN), toute personne accédant au site doit accepter ces mentions légales.</p>
      </div>
    </div>
  );
}

export default LegalNotice;
