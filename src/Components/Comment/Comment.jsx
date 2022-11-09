import React from 'react';
import classes from './Comment.module.scss';


const Comment = () => {
    return (
        <div className={classes.comment}>
            <div className={classes.container}>

                <div className={classes.comment_text}>
                    Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной <br/> Армении!!!
                    Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем <br/> рекомендовать этот ресторан своим
                    друзьям и родственникам также за рубежом, <br/> путешествующих в Санкт-Петербург!!!
                </div>

                <div className={classes.comment_image}>
                    <img src="/img/ava.png" alt="#"/>
                </div>

                <div className={classes.comment_type}>Посетитель</div>
                <div className={classes.comment_name}>Илья</div>

            </div>
        </div>
    )
}


export default Comment;