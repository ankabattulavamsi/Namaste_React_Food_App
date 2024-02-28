import React, { useEffect, useState } from "react";
import DisplayCards from "./DisplayCards";
import { Link } from "react-router-dom";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchInput, SetSearchInput] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const respData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await respData?.json();

    setResData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants, '111111')
  };

  const onSearchInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    SetSearchInput(e.target.value);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center w-2/4">
        <div>
          <input
            data-testid="searchInput"
            placeholder="Search For Restaurant"
            type="text"
            value={searchInput}
            onChange={onSearchInput}
            className="border-1 p-2 m-4 bg-slate-300 w-64 mr-0"
          />
          <button
            className="bg-slate-500 px-4 py-2 text-cyan-50"
            onClick={() => {
              const searchData = resData.filter((each: any) =>
                each?.info?.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              );
              setFilteredList(searchData);
              // SetSearchInput('')
              // console.log('^^^^^^^^', searchData)
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="bg-slate-500 px-6 py-2 rounded-lg  text-cyan-50"
            onClick={() => {
              const searchList = resData?.filter(
                (each: any) => each?.info?.avgRating >= 4
              );
              setResData(searchList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList?.map((item: any) => {
          // console.log('888888888', item?.info.promoted)
          return (
            <Link key={item?.info?.id} to={`restaurants/${item?.info?.id}`}>
              <DisplayCards resData={item?.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
