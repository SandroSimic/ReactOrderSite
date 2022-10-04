import React from 'react';
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>
{
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>OrderAppReact</h1>
                <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
            </header>
                <div className={classes['main-image']}>
                    <img src={mealsImage} alt='background food img'/>
                </div>
            
        </React.Fragment>
    )
}

export default Header;