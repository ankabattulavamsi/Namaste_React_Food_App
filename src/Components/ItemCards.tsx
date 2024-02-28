import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const imgId =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
const ItemCards = ({ cartItems }: any) => {

  const dispatch = useDispatch()
  const handleAddItem = (item: any) => {
    // console.log("itemsssssss", item);
    dispatch(addItems(item))
  };
  return (
    <div className="py-2">
      {cartItems?.map((item: any) => {
        // console.log("555555555", item);
        return (
          <div className="flex justify-between items-center">
            <div className="w-9/12">
              <p className="font-semibold text-sm">{item?.card?.info?.name}</p>
              <div className="flex">
                <span className="text-zinc-700 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-sm"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <p className="text-zinc-700 text-sm">
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </p>
              </div>
              <p className="text-xs text-zinc-800 mt-2 mb-2">
                {item?.card?.info?.description}
              </p>
              <hr className=" mb-2" />
            </div>
            <div className="w-2/12 ">
              <button
                className="absolute bg-white text-green-500 font-bold  rounded-lg mt-14 ml-2 py-2 px-3"
                onClick={() => handleAddItem(item)}
              >
                add+
              </button>
              <img
                src={imgId + item?.card?.info?.imageId}
                alt="cart-items"
                className="rounded-lg w-20"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCards;
