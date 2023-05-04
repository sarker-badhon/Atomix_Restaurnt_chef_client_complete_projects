import React, { useEffect, useState } from 'react';
import Recipes from './recipes/recipes';

const Home = () => {
    const [chefData, setChefData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5500/data/")
            .then(res => res.json())
            .then(data =>setChefData(data))
    }, [])



   
    return (
        <div>
            <div className="carousel w-full h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src=" https://media-cdn.tripadvisor.com/media/photo-w/17/83/50/b8/doudou-food-chinese-beirut.jpg" className="w-full h-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <h2 className="text-8xl font-bold text-white">The best way to celebrate
                            the some <br /> <span className="text-blue-800">delicious food.</span> </h2>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/chinese-food-chinese-traditional-cuisine-dishes-dark-background-top-view-copy-space_233226-910.jpg?w=740" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div>
                            <h2 className="text-6xl font-bold text-white ">Good food is to be enjoyed food very <span className="text-blue-800">beautiful in itse</span> </h2>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80" className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <h2 className="text-7xl font-bold text-white">Restaurant Fresh Dishes For <br />
                            Home Desh lover</h2>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/chinese-food-chinese-traditional-cuisine-dishes-dark-background-top-view-copy-space_233226-910.jpg?w=740" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <h2 className="text-6xl font-bold text-white">Good food is to be enjoyed food very beautiful in itse</h2>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

                {/* Recipes cards  */}

            <div>
                <h2 className='text-center text-4xl font-bold mt-20'>Check Our Delicious Menu</h2>

                <div className='grid lg:grid-cols-3 my-20 mx-20'>

                    {
                        chefData.map(data => <Recipes
                            key={data.id}
                            data={data}

                        ></Recipes>)
                    }
                </div>
            </div>

                        {/* food Gallery */}

            <div>
                <h2 className='text-4xl text-center font-bold mb-14 '>Our Food Gallery</h2>
                <marquee  behavior="" direction="">
                   <div  className="lg:flex">
                   <img className='h-60 rounded-2xl mx-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5ZUBhGGQ_5hOJXJncLnRJeqG1vEvRz_NVA&usqp=CAU" alt="" />
                    <img className='h-60 rounded-2xl mx-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxwVpteTmftXxHY60rhPtBZHKe56RSpYsSg&usqp=CAU" alt="" />

                    <img className='h-60 rounded-2xl mx-2' src="https://post.greatist.com/wp-content/uploads/sites/2/2021/03/311521-grt-Keto-Chinese-Food-732x549-thumbnail.jpg" alt="" />
                   
                    <img className='h-60 rounded-2xl mx-2' src="https://npr.brightspotcdn.com/dims4/default/90c76e6/2147483647/strip/true/crop/960x640+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkcur%2Ffiles%2F201801%2FCashew-Chicken-Dish-Chinese-Food-1273256.jpg" alt="" />

                    <img className='h-60 rounded-2xl mx-2' src="https://media.newyorker.com/photos/59097261019dfc3494ea24a5/master/w_2560%2Cc_limit/Hsu-Changing-Meanings-of-Asian-Food-in-America.jpg" alt="" />
                    <img className='h-60 rounded-2xl mx-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxwVpteTmftXxHY60rhPtBZHKe56RSpYsSg&usqp=CAU" alt="" />
                    <img className='h-60 rounded-2xl mx-2' src="https://post.greatist.com/wp-content/uploads/sites/2/2021/03/311521-grt-Keto-Chinese-Food-732x549-thumbnail.jpg" alt="" />

                    <img className='h-60 rounded-2xl mx-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5ZUBhGGQ_5hOJXJncLnRJeqG1vEvRz_NVA&usqp=CAU" alt="" />
                   </div>
                </marquee>
            </div>





{/* //booking section */}
            <div className='bg-zinc-900'>
                <div className='w-2/5 mx-20 my-24 p-10'>
                    <h1 className='text-4xl text-center text-white font-bold mb-4'>BOOK YOUR TABLE</h1>
                    <form className="mb-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white font-bold mb-2 ">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white font-bold mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="checkInDate"
                                className="block text-white font-bold mb-2"
                            >
                                Check-in date:
                            </label>
                            <input
                                type="date"
                                id="checkInDate"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="checkOutDate"
                                className="block text-white font-bold mb-2"
                            >
                                Check-out date:
                            </label>
                            <input
                                type="date"
                                id="checkOutDate"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Book Now
                        </button>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Home;