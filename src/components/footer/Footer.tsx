import './Footer.scss';
import NavLinkTemplate from '../layout/button/NavLinkTemplate';
import facebook from "../../assets/facebook.png";

const Footer= () => {
    return (
        <footer className='footer'>
            <li><a href="https://m.facebook.com/TLC-Volunteering-102457102485206/" target="_blank" rel="noopener noreferrer"><img src={facebook} className="facebook" alt="facebook"></img></a></li>
            <li><NavLinkTemplate content={'Contact us'} to={'/ContactUs'}></NavLinkTemplate></li>
            <li><NavLinkTemplate content={'Terms of Use'} to={'/TermsOfUse'}></NavLinkTemplate></li>
            <li><NavLinkTemplate content={'Privacy Policy'} to={'/PrivacyPolicy'}></NavLinkTemplate></li>
        </footer>
    )
}

export default Footer;

