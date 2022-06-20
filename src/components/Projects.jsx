import React from "react";
import quizApp from "../assets/projects/questionMark.jpg";
import restaurantFinder from "../assets/projects/restaurant.jpg";
import toDoList from "../assets/projects/todoList.jpg";
import weatherApp from "../assets/projects/weatherApp.jpg";

const Projects = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"> Portfolio </p>
          <p className="py-6">Check out some of my works right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={weatherApp} alt=""className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <p className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> Weather App</p>
              <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-1xl bg-gray-600 hover:bg-gray-700"href="https://sivasurender.github.io/MyWeatherApp/"target="_blank"rel="noreferrer">Demo Link</a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={toDoList} alt=""className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <p className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> ToDo List</p>
              <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-1xl bg-gray-600 hover:bg-gray-700"href="https://sivasurender.github.io/Simple_ToDo_List/"target="_blank"rel="noreferrer">Demo Link</a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={quizApp} alt=""className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <p className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> Quiz App</p>
              <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-1xl bg-gray-600 hover:bg-gray-700"href="https://sivasurender.github.io/Quiz_Template/"target="_blank"rel="noreferrer">Demo Link</a>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={restaurantFinder} alt=""className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <p className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> Restaurant Finder</p>
              <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-1xl bg-gray-600 hover:bg-gray-700"href="https://sivasurender.github.io/Restaurant-Finder/"target="_blank"rel="noreferrer">Demo Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
