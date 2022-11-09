import React from 'react';
import classes from './Cook.module.scss';


const Cook = () => {

    return (
        <div className={classes.cook}>
            <div className={classes.container}>
                <div className={classes.cook_title}>
                    Наши <span>Повара</span>
                </div>

                <div className={classes.cook_image}>
                    <img src="/img/cook_1.png" alt="cook"/>
                    <img src="/img/cook_2.png" alt="cook"/>
                    <img src="/img/cook_3.png" alt="cook"/>
                </div>
            </div>
        </div>
    )
}


export default Cook;
