import "../styles/header.css";

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitle'>
        <span className='headerTitleLogo'>
          Lily's <i class='bi bi-flower1'></i>Food Blog
        </span>
      </div>
      <img
        className='headerImg'
        src='https://images.pexels.com/photos/1675211/pexels-photo-1675211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt='grass'
      />
    </div>
  );
}
