import '../styles/Footer.scss'
import bg from '../assets/footer-bg.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import soundcloud from '../assets/soundcloud.png'
import github from '../assets/github.png'
import dribbble from '../assets/dribbble.png'


function Footer(){
    return (
        <footer className="footer">
            <img src={bg} className="footer__bg" alt="background"></img>
            <div className="footer__content">
                <div className="footer__contact">
                    <div className="footer__item">
                        <h2 className="footer__title">Contact</h2>
                        <p className="footer__link">charlene.villiette70@gmail.com</p>
                    </div>

                    <div className="footer__item">
                        <h2 className="footer__title">Social media</h2>
                        <div className="footer__social-media">
                            <a className="footer__social-media-link" href='https://github.com/chavlt'><img className="footer__social-icon" src={github} alt="Github icon"></img></a>
                            <a className="footer__social-media-link" href='https://www.instagram.com/chaaa.design/'><img className="footer__social-icon" src={instagram} alt="instagram icon"></img></a>
                            <a className="footer__social-media-link" href='https://www.linkedin.com/in/charlene-villiette/'><img className="footer__social-icon" src={linkedin} alt="linkedin icon"></img></a>
                            <a className="footer__social-media-link" href='https://dribbble.com/cha_vlt'><img className="footer__social-icon" src={dribbble} alt="dribbble icon"></img></a>
                            <a className="footer__social-media-link" href='https://soundcloud.com/cha-vlt'><img className="footer__social-icon" src={soundcloud} alt="soundcloud icon"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer