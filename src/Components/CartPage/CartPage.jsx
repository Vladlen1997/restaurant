import React from 'react';
import classes from './CartPage.module.scss';


const CartPage = (props) => {
    return (

            <div className={classes.overlay}>
                <div className={classes.cart}>
                        <div className={classes.header}>
                            <h2>Корзина</h2>
                            <img onClick={props.onClose} src="/img/cancel.svg" alt="cancel"/>
                        </div>
                </div>
            </div>

    )
}



export default CartPage