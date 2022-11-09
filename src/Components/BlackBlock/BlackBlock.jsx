import React from 'react';
import classes from './BlackBlock.module.scss';


const BlackBlock = () => {
    return (
        <div className={classes.black}>
            <div className={classes.container}>
                <div className={classes.black_holder}>
                <div className={classes.black_left}>

                    <div className={classes.left_title}>
                        Отпразднуйте в одном из <br/>
                        самых лучших ресторанов.
                    </div>

                    <div className={classes.left_text}>
                        Только в этом месяце бизнес-ланч от 250 ₽
                    </div>

                </div>


                <div className={classes.black_right}>

                    <div className={classes.black_btn}>
                        <a href="#">заказ столика</a>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}


export default BlackBlock;