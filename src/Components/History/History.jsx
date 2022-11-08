import React from 'react';
import classes from './History.module.scss';


const History = () => {
    return (
        <div className={classes.history}>
            <div className={classes.container}>
                <div className={classes.history_holder}>
                    <div className={classes.history_info}>

                        <div className={classes.history_title}>
                            Наша<span>История</span>
                        </div>


                        <div className={classes.history_desc}>
                            Как и у любого другого самобытного места, у нас есть своя, особая история. Идея ресторана
                            пришла
                            основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана застрял в
                            сотнях
                            километров
                            от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось навремя
                            обустровать
                            себе
                            нехитрый быт, добывать и готовить себе еду.
                        </div>


                        <div className={classes.history_number}>
                            <div className={classes.number_item}>
                                93<span>Напитки</span>
                            </div>

                            <div className={classes.number_item}>
                                206<span>Еда</span>
                            </div>

                            <div className={classes.number_item}>
                                71<span>Закуски</span>
                            </div>
                        </div>
                    </div>

                    <div className={classes.history_images}>
                        <img src="/img/kitchen_1.png" alt="kitchen"/>
                        <img src="/img/kitchen_2.png" alt="kitchen"/>
                        <img src="/img/kitchen_3.png" alt="kitchen"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default History;