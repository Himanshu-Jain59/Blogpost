import React, { useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState(null);

  // List of categories
  const categories = [
    { name: "All", path: "/" },
    { name: "Life", path: "/?cat=Life" },
    { name: "Social", path: "/?cat=Social" },
    { name: "Sports", path: "/?cat=Sports" },
    { name: "Music", path: "/?cat=Music" },
    { name: "Food", path: "/?cat=Food" },
    { name: "Fashion", path: "/?cat=Fashion" },
  ];

  // Handle click and set active category
  const handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex items-center justify-between w-auto px-5 mx-30 my-7">
      <span className=" p-2 font-varela text-3xl color-[#222] font-semibold text-center">
        Category
      </span>
      <ul className="flex items-center justify-around w-3/4 p-3 font-varela text-lg color-[#222] cursor-pointer">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            onClick={() => handleClick(category.name)}
            className={`outline-0 px-6 py-2 rounded-full ${
              activeCategory === category.name
                ? "bg-amber-200"
                : "hover:bg-amber-200"
            }`}
          >
            {category.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Category;
