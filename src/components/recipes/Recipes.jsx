import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = ({ data }) => {
    const { id,chefName,yearsOfExperience, numRecipes,numAwards,like,imgLink} = data;
    // console.log(id)
    return (

        <div className="card w-96 glass mb-4">
            <figure><img className='img-fluid h-80  w-full' src={imgLink} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{chefName}</h2>
                <p>Experience : {yearsOfExperience} years</p>
                <p>Recipes : {numRecipes}</p>
                <p>Awards : {numAwards}</p>
                <p>like :❤️ {like}</p>
                <div className="card-actions justify-end">
                   
                        <Link to={`/data/${id}`} className="btn btn-primary">
                        <button> View Recipes</button>
                        </Link>
                         
                         
                </div>
            </div>
        </div>

    );
};

export default Recipes;