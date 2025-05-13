// src/components/ReviewCard.jsx
import React from "react";

export const ReviewCard = ({ review }) => {
  const { avatar, name, rating, title, comment, date } = review;
  const formattedDate = new Date(date).toLocaleDateString("ru-RU");

  return (
    <div className="w-[220px] h-[310px] bg-white bg-opacity-10 backdrop-blur-sm p-4 flex flex-col justify-between relative overflow-hidden shadow-yellow-review">
      <div className="relative w-full h-[140px] rounded-lg overflow-hidden mb-3">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1">
        <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">
          {title}
        </h5>
        <p className="text-gray-200 text-xs mb-2 line-clamp-3">
          {comment}
        </p>
      </div>

      <div className="flex items-center justify-between text-[10px] text-gray-300">
        <span>{name}</span>
        <span>
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </span>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
