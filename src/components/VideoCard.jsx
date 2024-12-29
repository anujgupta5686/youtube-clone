import React from "react";

const formatViewCount = (count) => {
  if (!count) return "0"; // Handle undefined or null values
  if (count >= 1000000) return (count / 1000000).toFixed(1) + "M"; // Format as millions
  if (count >= 1000) return (count / 1000).toFixed(1) + "K"; // Format as thousands
  return count.toString(); // Return count as is for less than 1000
};

const VideoCard = ({ info }) => {
  // Log the incoming data for debugging purposes
  // console.log("INFO::", info);

  // Destructure properties from the info object
  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};

  return (
    <div className="w-64 p-3 m-2 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
      <img
        className="w-full h-36 object-cover rounded-md"
        src={thumbnails?.high?.url}
        alt={title || "Video Thumbnail"}
      />

      <h3 className="text-sm font-bold mt-2 line-clamp-2">
        {title || "No Title Available"}
      </h3>

      <p className="text-gray-600 text-xs mt-1">
        {channelTitle || "Unknown Channel"}
      </p>

      <p className="text-gray-600 text-xs mt-1">
        {formatViewCount(statistics?.viewCount)} Views
      </p>
    </div>
  );
};

export const AddVideoCard = ({info}) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};
 
export default VideoCard;
