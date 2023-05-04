import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from './FoodCard/FoodCard';

const ChefRecipes = () => {
    const [foods, setFoods] = useState([])
    const chefData = useLoaderData()
    
    const { id, chefName, yearsOfExperience, recipe, numRecipes, numAwards, like, imgLink } = chefData;

    useEffect(() => {
        fetch('http://localhost:5500/recipesData')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])





    return (
        <div className='mx-20'>
            <div className="card card-side bg-base-100 shadow-xl  h-80 w-4/7  mt-20 mb-10">
                <figure><img className="h-80 w-5/8" src={imgLink} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p>Chef <p>{chefName}</p> has over 39 years of experience cooking Chinese cuisine.<br />  He is easily 
                        considered to be one of the top Szechuan chefs in the Bay  Area.<br /> He has
                        owned and operated four restaurants in Albany and Belmont, California. <br />
                        Chef John mastered Mandarin and Cantonese cuisines early on in his career. <br /> However, over time </p>
                    <div className='grid lg:grid-cols-3'>
                        <p>Experience: {yearsOfExperience} years</p>
                        <p>Total Recipes: {numRecipes} </p>
                        <p>like: {like} </p>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-3'>

                {
                    foods.map(food => <FoodCard

                        key={food.id}
                        food={food}

                    ></FoodCard>)
                }
            </div>

        </div>
    );
};

export default ChefRecipes;