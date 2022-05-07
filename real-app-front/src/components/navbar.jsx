import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ user }) => {
  return (
    <div className='top'>
      <div className='topLeft'>
        <a href='https://www.facebook.com/' target='_blank'>
          <i className='topIcon bi bi-facebook'></i>
        </a>
        <a href='https://twitter.com/' target='_blank'>
          <i className='topIcon bi bi-twitter'></i>
        </a>
        <a href='https://www.instagram.com/' target='_blank'>
          <i className='topIcon bi bi-instagram'></i>
        </a>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <NavLink className='link' to='/'>
              Home
            </NavLink>
          </li>
          <li className='topListItem'>
            <NavLink className='link' to='/about'>
              About
            </NavLink>
          </li>

          {user ? (
            <>
              <li className='topListItem'>
                <NavLink className='link' to='/create-cards'>
                  Create Card
                </NavLink>
              </li>
              <li className='topListItem'>
                <NavLink className='link' to='/my-cards'>
                  My Blog
                </NavLink>
              </li>
              <li className='topListItem'>
                <NavLink className='link' to='/my-favorite'>
                  My Favorite
                </NavLink>
              </li>

              <li className='topListItem logoutLink'>
                <NavLink to='/logout' className='link'>
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className='topListItem'>
                <NavLink to='/signin' className='link logoutLink'>
                  Sign In
                </NavLink>
              </li>
              <li className='topListItem'>
                <NavLink to='/signup' className='link'>
                  Sign up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
