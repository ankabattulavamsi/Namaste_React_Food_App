import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestMenuData from "../Hooks/useRestMenuData";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantDetails = () => {
    const [showItemsIndex, setShowItemsIndex] = useState(0)

  const { restId } = useParams();

  const [resDetails, restItems] = useRestMenuData(restId);
  const { name, sla, areaName, cuisines, avgRatingString } = resDetails;
  // console.log("^^^^^^^^^", restItems);

  
  return (
    <div className="p-4 ">
      <div className="flex justify-center mb-8">
        <div className="flex justify-between w-6/12">
          <div>
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-sm">{cuisines?.join(", ")}</p>

            <div className="flex justify-between">
              <h5 className="text-sm">{areaName}</h5>
              <p className="text-sm">{sla?.lastMileTravelString}</p>
            </div>
          </div>
          <div className="p-2 flex justify-between text-center border-2 drop-shadow-lg bg-slate-100 border-solid border-indigo-700">
           <div className="">
          <div className="flex align-middle justify-around">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-cyan-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>

            <h3>{avgRatingString}</h3>
          </div>
            <hr />
            <p>100+ ratings</p>
           </div>
          </div>
        </div>
      </div>
      <div>
        {
          restItems?.map((resItem:any, index:number) => {
            return(
              <RestaurantCategory resItem={resItem} showItems={index === showItemsIndex ? true : false}  setShowItemsIndex={() => setShowItemsIndex(index)}  />
            )
          })
        }
      </div>
    </div>
  );
};

export default RestaurantDetails;
