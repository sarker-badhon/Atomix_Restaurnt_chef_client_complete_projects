import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from './FoodCard/FoodCard';

const ChefRecipes = () => {
    const [foods, setFoods] = useState([])
    const chefData = useLoaderData()

    const { id, chefName, yearsOfExperience, recipe, numRecipes, numAwards, like, imgLink } = chefData;

    useEffect(() => {
        fetch('https://atomix-server-sarker-badhon.vercel.app/recipesData')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])





    return (
        <div className='mx-20'>
            <div className="card card-side bg-base-100 shadow-xl  h-auto lg:h-80 w-full lg:w-4/7  mt-20 mb-10 lg:mb-0 lg:ml-10 lg:mr-auto lg:my-20">
                <figure>
                    <img className="h-80 lg:h-auto w-full lg:w-5/8 object-cover" src={imgLink} alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p className="lg:text-lg">
                        Chef {chefName} has over 39 years of experience cooking Chinese cuisine.
                        He is easily considered to be one of the top Szechuan chefs in the Bay Area.
                        He has owned and operated four restaurants in Albany and Belmont, California.
                        Chef John mastered Mandarin and Cantonese cuisines early on in his career.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 mt-2 lg:mt-4">
                        <p className="text-center lg:text-left">Experience: {yearsOfExperience} years</p>
                        <p className="text-center lg:text-left">Total Recipes: {numRecipes}</p>
                        <p className="text-center lg:text-left">Likes: {like}</p>
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