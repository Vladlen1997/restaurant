import React from 'react';
import classes from './Footer.module.scss';


const Footer = () => {
    return (
        <div className={classes.footer}>
                <div className={classes.container}>
                    <div className={classes.footer_title}>Copyright 2022.</div>

                    <div className={classes.footer_links}>
                        <a href="#"><img src="/img/insta.svg" alt="instagram"/></a>
                    </div>
                </div>
        </div>
    )
}


export default Footer;