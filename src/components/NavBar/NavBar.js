function NavBar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar_list'>
        <li className='navbar__item navbar__item_content_books' ><a className='navbar__link'></a></li>
        <li className='navbar__item navbar__item_content_chemistry'><a className='navbar__link'></a></li>
        <li className='navbar__item navbar__item_content_news'><a className='navbar__link'></a></li>
      </ul>
    </nav>
  )
}

export default NavBar;