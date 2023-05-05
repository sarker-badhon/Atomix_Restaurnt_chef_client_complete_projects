import React from 'react';
import {FaStarHalfAlt } from 'react-icons/fa';
import Swal from 'sweetalert2'
import { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const FoodCard = ({ food }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const { recipe_name, ingredients, cooking_method, rating, image_link } = food;


const handlerBtnFv = ()=>{
  setIsFavorite(true);

  return Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'The recipe is your favorited',
    showConfirmButton: false,
    timer: 2000
  })
}


  return (
    <div className="card md:w-96 bg-base-100 shadow-xl my-10 mx-2">
    <figure><img src={image_link} alt="Shoes" /></figure>
    <div className="card-body p-4">
      <h2 className="card-title text-lg md:text-xl font-medium mb-2">
        {recipe_name}
      </h2>
      <li className="text-sm md:text-base"> <span className='underline font-bold'>ingredients:</span> <br />{ingredients} </li>
         
      <p className="text-sm md:text-base mt-2"> <span className='underline font-bold'>cooking method:</span> {cooking_method} </p>
      <p className='flex gap-2 items-center text-sm md:text-base mt-2'> <Rating style={{ maxWidth: 90 }} value={Math.round(rating)} readOnly /> {rating}    </p>
      <div className="card-actions justify-end mt-4">
        
        
        <button disabled={isFavorite} onClick={handlerBtnFv} className="btn blue-outline text-sm md:text-base">{isFavorite ? 'Favourited' : 'Add to Favourites'}</button>
      </div>
    </div>
  </div>
  );
};

export default FoodCard;
