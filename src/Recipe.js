import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, images, calories, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={images} alt=""></img>
            <p className={style.p}>Total calories: {calories}</p> 
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
                       
        </div>
    )
};

export default Recipe;