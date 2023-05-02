import React from 'react';
import Lottie from "lottie-react";
import Cards from './Cards/Cards';
const Home = () => {
    return (

        <div>
            <div className="carousel w-full h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/chinese-food-chinese-traditional-cuisine-dishes-dark-background-top-view-copy-space_233226-910.jpg?w=740" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <h2 className="text-6xl font-bold text-white">The best way to celebrate
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
                    <img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <h2 className="text-7xl font-bold text-white">Restaurant Fresh Dishes For <br />
                            Home Desh lover</h2>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-w/17/83/50/b8/doudou-food-chinese-beirut.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <h2 className="text-6xl font-bold text-white">Good food is to be enjoyed food very beautiful in itse</h2>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <Cards></Cards>
            </div>
        </div>
    );
};

export default Home;