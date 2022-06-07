import React from "react";
import headerImage from '../../assets/FF.jpg'
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return <React.Fragment>
      <header className={classes.header}>
          <h1>React Test Order App</h1>
          <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
          <img src={headerImage} alt="A header for our app"/>
      </div>
  </React.Fragment>;
};

export default Header;
