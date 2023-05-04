import React from 'react';
import {FaStarHalfAlt } from 'react-icons/fa';
import Swal from 'sweetalert2'
const FoodCard = ({ food }) => {
  const { recipe_name, ingredients, cooking_method, rating, image_link } = food;


const handlerBtnFv = ()=>{
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
        <p> <span className='underline font-bold'>ingredients:</span> <br />
           {ingredients} </p>
        <p > <span className='underline font-bold'>cooking method:</span> {cooking_method} </p>
        <p className='flex gap-2 items-center'>{rating}  <FaStarHalfAlt/>   </p>
        <div className="card-actions justify-end">
          
          
          <button onClick={handlerBtnFv} className="btn blue-outline">Favourite</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
