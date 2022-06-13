import React from 'react';
import NavButton from '../../../layout/button/NavButton';
import GreyCard from '../../../layout/card/GreyCard';

import './MobileNav.scss';
const MobileNav: React.FC= () => {
  return (
    <GreyCard>
    <div className='nav-btns'>
        <NavButton content={'Volunteer now'} component={'/volunteering'}></NavButton>
        <NavButton content={'associations'} component={'/associations'}></NavButton>
    </div>
    </GreyCard>

  )
}

export default MobileNav;