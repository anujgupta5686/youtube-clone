import React, { useEffect, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import YoutubeLogo from "../assets/youtubelogo.svg";
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "@/utils/constants";
import { cacheResults } from "@/utils/searchSlice";

const Head = () => {
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
        // ihpone:[1,2,3]
      })
    );
  };
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-12 items-center p-4 shadow-md bg-white">
      <div className="flex items-center col-span-3 sm:col-span-2 md:col-span-1">
        <IoMenuSharp
          fontSize={"38px"}
          className="cursor-pointer"
          onClick={toggleHandler}
        />
        <img src={YoutubeLogo} alt="Logo" className="h-8 mx-2" />
      </div>

      <div className="col-span-12 sm:col-span-8 md:col-span-8 flex justify-center">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 pl-10 pr-14 border rounded-full shadow-sm focus:outline-none"
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoMdSearch
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            fontSize={"20px"}
          />
          <button className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-r-full hover:bg-gray-500 flex items-center justify-center">
            <IoMdSearch fontSize={"24px"} />
          </button>

          {showSuggestions && (
            <div className="absolute z-10 w-full bg-white border rounded-b-lg shadow-lg mt-1">
              <ul className="max-h-60 overflow-y-auto">
                {suggestions.map((s) => (
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                    key={s}
                  >
                    <IoMdSearch
                      className="mr-3 text-gray-500"
                      fontSize="18px"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end col-span-3 sm:col-span-2 md:col-span-1">
        <FaRegUserCircle fontSize={"35px"} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Head;
