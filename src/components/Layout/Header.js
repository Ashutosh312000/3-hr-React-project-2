import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import medicineImage from '../../assets/medicineimg.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Medicine Shop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={medicineImage} alt='Many Medicine Packets' />
      </div>
    </Fragment>
  );
};

export default Header;
