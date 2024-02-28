import React from "react";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({ resItem, showItems, setShowItemsIndex }: any) => {
    // const [showItems, setShowItems] = useState(false)
  // console.log('#####',resItem?.card?.card)
  const onClickSetShowItems = () => {
    setShowItemsIndex()
  }
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between cursor-pointer" onClick={() => onClickSetShowItems()}>
        <p className="font-bold text-lg">{resItem?.card?.card?.title}</p>
        {showItems ?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> :  <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
          </svg>
}
      </div>
      <div>
        {showItems && <ItemCards cartItems={resItem?.card?.card?.itemCards} />}
        
      </div>
    </div>
  );
};

export default RestaurantCategory;
