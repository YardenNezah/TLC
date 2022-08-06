import React from 'react';
import NavButton from '../../../layout/button/NavButton';

import './MobileNav.scss';
const MobileNav: React.FC= () => {
  return (
    <div className='nav-btns'>
        <NavButton content={'Volunteer now'} component={'/volunteering/1'}></NavButton>
        <NavButton content={'Associations'} component={'/associations'}></NavButton>
    </div>

  )
}

export default MobileNav;