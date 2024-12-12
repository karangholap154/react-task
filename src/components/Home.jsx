import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const tasks = [
    { id: 1, name: "Counter App", path: "/counter" },
    { id: 2, name: "Todo List", path: "/todo" },
    { id: 3, name: "Fetch Data", path: "/fetch-data" },
    { id: 4, name: "Toggle Visibility", path: "/toggle" },
    { id: 5, name: "Search Filter", path: "/search" },
    { id: 6, name: "Multi-Page Navigation", path: "/multi-page" },
    { id: 7, name: "Color Switcher", path: "/color-switcher" },
    { id: 8, name: "Accordion Component", path: "/accordion" },
    { id: 9, name: "Image Carousel", path: "/carousel" },
    { id: 10, name: "Weather App", path: "/weather" },
    { id: 11, name: "Light Dark Mode App", path: "/lightdarkmode"},
    { id: 12, name: "Click Tracker", path: "/clicktracker"},
    { id: 13, name: "Addition App", path: "/addition" },
  ];

  return (
    <div className="home">
      <h1>React Tasks</h1>
      <div className="task-cards">
        {tasks.map((task) => (
          <Link key={task.id} to={task.path} className="task-card">
            {task.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
