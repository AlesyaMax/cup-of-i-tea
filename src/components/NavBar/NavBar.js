import NavBarItem from '../NavBarItem/NavBarItem';
import {navItems} from '../utils/constants';

function NavBar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar_list'>
        <NavBarItem contentClass='books' isInProcess={true} primaryTitle={navItems.books[0]} alternativeTitle={navItems.books[1]}/>
        <NavBarItem contentClass='chemistry' isInProcess={true} primaryTitle={navItems.chemistry[0]} alternativeTitle={navItems.chemistry[1]}/>
        <NavBarItem contentClass='news' isInProcess={true} primaryTitle={navItems.news[0]} alternativeTitle={navItems.news[1]}/>
      </ul>
    </nav>
  )
}

export default NavBar;