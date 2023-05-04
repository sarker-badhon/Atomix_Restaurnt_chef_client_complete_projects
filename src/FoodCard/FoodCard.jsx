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
    <div className="card w-96 bg-base-100 shadow-xl my-10">
      <figure><img src={image_link} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {recipe_name}
        </h2>
        <li> <span className='underline font-bold'>ingredients:</span> <br />{ingredients} </li>
           
        <p > <span className='underline font-bold'>cooking method:</span> {cooking_method} </p>
        <p className='flex gap-2 items-center'> <Rating style={{ maxWidth: 90 }} value={Math.round(rating)} readOnly /> {rating}    </p>
        <div className="card-actions justify-end">
          
          
          <button disabled={isFavorite} onClick={handlerBtnFv} className="btn blue-outline">Favourite</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
