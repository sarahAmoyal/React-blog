import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className='footer'>
      <div className='social'>
        <a href='https://www.instagram.com/' target='_blank'>
          <i className='bi bi-instagram'></i>
        </a>
        <a href='https://www.snapchat.com/' target='_blank'>
          <i className='bi bi-snapchat'></i>
        </a>
        <a href='https://twitter.com/' target='_blank'>
          <i className='bi bi-twitter'></i>
        </a>
        <a href='https://www.facebook.com/' target='_blank'>
          <i className='bi bi-facebook'></i>
        </a>
      </div>
      <ul className='list'>
        <li>
          <Link className='footerLink' to='/'>
            Home
          </Link>
          {/* <a href="">Home</a> */}
        </li>

        <li>
          <Link className='footerLink' to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link className='footerLink' to='/'>
            Terms
          </Link>
        </li>
        <li>
          <Link className='footerLink' to='/'>
            Privacy Policy
          </Link>
        </li>
      </ul>
      <p className='copyright'>
        Liiy's <i class='bi bi-egg-fried'></i>Food App @ 2022
      </p>
    </section>
  );
};
export default Footer;
