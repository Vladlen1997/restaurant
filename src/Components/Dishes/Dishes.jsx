import React from 'react';
import classes from './Dishes.module.scss';


const Dishes = () => {
    return (
        <div className={classes.dishes}>
            <div className={classes.container}>
                <div className={classes.dishes_title}>
                    Наши <span>Блюда</span>
                </div>


                <div className={classes.burgers}>
                    <div className={classes.burgers_image}>
                        <img src="/img/pizza.png" alt="pizza"/>
                    </div>


                    <div className={classes.burgers_items}>


                        <div className={classes.burger_item}>
                            <img src="/img/burger.png" alt="burger"/>
                            <div className={classes.burger_text}>
                                Гамбургер мини -------------------- 220 р.
                            </div>
                        </div>

                        <div className={classes.burger_item}>
                            <img src="/img/burger.png" alt="burger"/>
                            <div className={classes.burger_text}>
                                Гамбургер мини -------------------- 220 р.
                            </div>
                        </div>

                        <div className={classes.burger_item}>
                            <img src="/img/burger.png" alt="burger"/>
                            <div className={classes.burger_text}>
                                Гамбургер мини -------------------- 220 р.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dishes;