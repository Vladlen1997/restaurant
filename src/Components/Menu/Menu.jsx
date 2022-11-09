import React from 'react';
import classes from './Menu.module.scss';


const Menu = () => {
    return (
        <div className={classes.menu}>
            <div className={classes.container}>
                <div className={classes.menu_title}>
                    Наше меню
                </div>

                <div className={classes.menu_items}>

                    <div className={classes.menu_item}>
                        <div className={classes.menu_image}>
                            <img src="/img/menu_item.png" alt="menu-img"/>
                            <div className={classes.menu_price}>
                                <img src="/img/price.png" alt="price"/>
                                <div className={classes.price}>420</div>
                            </div>

                        </div>

                        <div className={classes.menu_text}>Гамбургер макси</div>

                        <div className={classes.menu_subtext}>
                            Максимально толстый <br/> слой мяса
                        </div>


                        <div className={classes.menu_button}>
                            <a href="#">Заказать</a>
                        </div>
                    </div>



                    <div className={classes.menu_item}>
                        <div className={classes.menu_image}>
                            <img src="/img/menu_item.png" alt="menu-img"/>
                            <div className={classes.menu_price}>
                                <img src="/img/price.png" alt="price"/>
                                <div className={classes.price}>420</div>
                            </div>

                        </div>

                        <div className={classes.menu_text}>Гамбургер макси</div>

                        <div className={classes.menu_subtext}>
                            Максимально толстый <br/> слой мяса
                        </div>


                        <div className={classes.menu_button}>
                            <a href="#">Заказать</a>
                        </div>
                    </div>




                    <div className={classes.menu_item}>
                        <div className={classes.menu_image}>
                            <img src="/img/menu_item.png" alt="menu-img"/>
                            <div className={classes.menu_price}>
                                <img src="/img/price.png" alt="price"/>
                                <div className={classes.price}>420</div>
                            </div>

                        </div>

                        <div className={classes.menu_text}>Гамбургер макси</div>

                        <div className={classes.menu_subtext}>
                            Максимально толстый <br/> слой мяса
                        </div>


                        <div className={classes.menu_button}>
                            <a href="#">Заказать</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Menu;