import React from 'react';
import classes from './Cards.module.scss';


const Cards = () => {
    return (
        <div className={classes.cards}>
            <div className={classes.container}>
                <div className={classes.card_holder}>
                    <div className={classes.card}>
                        <div className={classes.card_image}>
                            <img src="/img/card.png" alt="kitchen"/>
                        </div>


                        <div className={classes.card_title}>
                            магическая <span>атмосфера</span>
                        </div>

                        <div className={classes.card_desc}>
                            В нашем заведении царит магическая атмосфера
                            наполненная вкусными ароматами
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.card_image}>
                            <img src="/img/card.png" alt="kitchen"/>
                        </div>


                        <div className={classes.card_title}>
                            Лучшее качество <span>Еды</span>
                        </div>

                        <div className={classes.card_desc}>
                            Качество нашей<br/>
                            Еды - отменное!
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.card_image}>
                            <img src="/img/card.png" alt="kitchen"/>
                        </div>


                        <div className={classes.card_title}>
                            недорогая <span>еда</span>
                        </div>

                        <div className={classes.card_desc}>
                            Стоимость нашей Еды
                            зависит только от ее
                            количества. Качество
                            всегда на высоте!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cards;