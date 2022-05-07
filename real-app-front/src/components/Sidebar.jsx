import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>About Me</span>
        <img
          src='https://images.pexels.com/photos/2825977/pexels-photo-2825977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='me'
        />
        <p className='sidebarText'>
          My name is Sarah and I created this food blog so everyone can share
          their Favorites dishes,So many of our memories, good and bad related
          to food, I welcome you to enjoy this blog and share some of your best
          memories
        </p>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>Follow Us</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon bi bi-facebook'></i>
          <i className='sidebarIcon bi bi-twitter'></i>
          <i className='sidebarIcon bi bi-instagram'></i>
        </div>
      </div>
    </div>
  );
}
