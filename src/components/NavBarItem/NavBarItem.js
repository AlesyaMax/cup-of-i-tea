import GearIcon from '../../images/gear.svg';

function NavBarItem(props) {
  return(
    <li className={`navbar__item navbar__item_content_${props.contentClass}`} data-firstTitle={props.primaryTitle} data-secondTitle={props.alternativeTitle} >
      <a className='navbar__link' href={props.link}></a>
      {props.isInProcess 
        && 
        <div className='navbar__status' data-title="I'm not ready yet... Could you please wait for me?">
          <img className='navbar__status-icon' src={GearIcon} alt='chapter is in process'/>
        </div>}

    </li>
  )
}

export default NavBarItem;