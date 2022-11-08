import React from 'react';
import classes from './Header.module.scss';
import HeaderBottom from "./HeaderBottom/HeaderBottom";


const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.header_block}>
                    <div className={classes.logo}>
                        <img src="/img/logo.png" alt="logo"/>
                    </div>

                    <div className={classes.nav}>
                        <a href="src/Components/Header/Header#">Главная</a>
                        <a href="src/Components/Header/Header#">Меню</a>
                        <a href="src/Components/Header/Header#">О нас</a>
                        <a href="src/Components/Header/Header#">Бронь</a>
                    </div>

                    <div className={classes.cart}>
                        <a href="src/Components/Header/Header#">
                            <img src="/img/cart.png" alt="cart"/>
                        </a>
                    </div>

                    <div className={classes.phone}>
                        <div className={classes.phone_holder}>
                            <div className={classes.phone_logo}>
                                <a href="src/Components/Header/Header#"><img src="/img/phone.png" alt="phone"/></a>
                            </div>
                            <div className={classes.number}>
                                <a href="src/Components/Header/Header#">+999-888-76-54</a>
                            </div>
                        </div>

                        <div className={classes.text}>
                            Свяжитесь с нами для<br/>бронирования
                        </div>
                    </div>

                    <div className={classes.btn}>
                        <a href="src/Components/Header/Header#">Заказ столика</a>
                    </div>
                </div>

                <HeaderBottom />

                </div>
        </div>
    )
}


export default Header;