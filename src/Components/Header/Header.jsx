import React from 'react';
import classes from './Header.module.scss';
import HeaderBottom from "./HeaderBottom/HeaderBottom";


const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.header_block}>
                    <div className={classes.logo}>
                        <img src="/img/logo.png" alt="logo"/>
                    </div>

                    <div className={classes.nav}>
                        <a href="#">Главная</a>
                        <a href="#">Меню</a>
                        <a href="#">О нас</a>
                        <a href="#">Бронь</a>
                    </div>

                    <div className={classes.cart}>
                            <img onClick={props.onClickCart} src="/img/cart.png" alt="cart"/>
                    </div>

                    <div className={classes.phone}>
                        <div className={classes.phone_holder}>
                            <div className={classes.phone_logo}>
                                <a href="#"><img src="/img/phone.png" alt="phone"/></a>
                            </div>
                            <div className={classes.number}>
                                <a href="#">+999-888-76-54</a>
                            </div>
                        </div>

                        <div className={classes.text}>
                            Свяжитесь с нами для<br/>бронирования
                        </div>
                    </div>

                    <div className={classes.btn}>
                        <a href="#">Заказ столика</a>
                    </div>
                </div>

                <HeaderBottom />

                </div>
        </div>
    )
}


export default Header;