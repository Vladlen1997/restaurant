import React from 'react';
import classes from './Gallery.module.scss';


const Gallery = () => {
    return (
        <div className={classes.gallery}>
            <div className={classes.container}>
                <div className={classes.gallery_title}>
                    Галерея <span>Блюд</span>
                </div>

                <div className={classes.gallery_content}>

                    <div className={classes.gallery_left}>

                        <div className={classes.gallery_up}>
                            <img src="/img/gallery_1.png" alt="gallery"/>
                        </div>
                        <div className={classes.gallery_down}>
                            <img src="/img/gallery_4.png" alt="cup"/>
                            <img src="/img/gallery_3.png" alt="soup"/>
                        </div>

                    </div>
                    <div className={classes.gallery_right}>

                        <div className={classes.gallery_up}>
                            <img src="/img/gallery_4.png" alt="cup"/>
                            <img src="/img/gallery_3.png" alt="soup"/>
                        </div>
                        <div className={classes.gallery_down}>
                            <img src="/img/gallery_6.png" alt="gallery"/>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}


export default Gallery;