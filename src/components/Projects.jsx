import React from "react";
import quizApp from "../assets/projects/questionMark.jpg";
import restaurantFinder from "../assets/projects/restaurant.jpg";
import toDoList from "../assets/projects/todoList.jpg";
import weatherApp from "../assets/projects/weatherApp.jpg";
import kanban from "../assets/projects/kanban.jpeg";
import foodHub from "../assets/projects/foodhub.jpeg";
import promptWorld from "../assets/projects/promptworld.jpeg";
import foodRecipe from "../assets/projects/foodrecipe.jpeg";
const projDetails = [
  {
    name: "Kanban Mock Board",
    icon: kanban,
    source: "https://kanban-todo-bala-e.vercel.app/",
    isVisible: true,
  },
  {
    name: "Food Hub",
    icon: foodHub,
    source: "https://next-food-hub-balass.netlify.app/meals",
    isVisible: true,
  },
  {
    name: "Prompt World",
    icon: promptWorld,
    source: "https://balae-promptworld.vercel.app/",
    isVisible: true,
  },
  {
    name: "Food Recipe World",
    icon: foodRecipe,
    source: "https://foodifybalass.netlify.app/",
    isVisible: true,
  },
  {
    name: "Weather App",
    icon: weatherApp,
    source: "https://sivasurender.github.io/MyWeatherApp/",
    isVisible: false,
  },
  {
    name: "To Do List",
    icon: toDoList,
    source: "https://sivasurender.github.io/Simple_ToDo_List/",
    isVisible: false,
  },
  {
    name: "Weather App",
    icon: weatherApp,
    source: "https://sivasurender.github.io/MyWeatherApp/",
    isVisible: false,
  },
  {
    name: "Quiz App",
    icon: quizApp,
    source: "https://sivasurender.github.io/Quiz_Template/",
    isVisible: false,
  },
  {
    name: "Restaurant Finder",
    icon: restaurantFinder,
    source: "https://sivasurender.github.io/Restaurant-Finder/",
    isVisible: false,
  },
].filter((item) => item.isVisible);

const Projects = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            Portfolio{" "}
          </p>
          <p className="py-6">Check out some of my works right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projDetails.map(({ source, name, icon }) => (
            <div className="shadow-md shadow-gray-600 rounded-lg" key={name}>
              <img
                src={icon}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <p className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {" "}
                  {name}
                </p>
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-1xl bg-gray-600 hover:bg-gray-700"
                  href={source}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
