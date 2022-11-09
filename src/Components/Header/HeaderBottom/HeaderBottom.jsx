import React from 'react';
import classes from './HeaderBottom.module.scss';


const HeaderBottom = () => {
    return (
        <div className={classes.bottom}>
            <div className={classes.title}>
                Добро пожаловать в

                <div className={classes.subtitle}>
                    Наш ресторан
                </div>

                <div className={classes.subhead}>
                    дом лучшей еды
                </div>

                <div className={classes.button}>
                    <a href="#">Наше меню</a>
                </div>


            </div>
        </div>
    )
}


export default HeaderBottom;