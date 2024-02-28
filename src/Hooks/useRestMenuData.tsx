import { useEffect, useState } from "react";
const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";


const useRestMenuData = (restId:any) => {
    const [resDetails, setResDetails] = useState<any>({});
    const [restItems, setRestItems] = useState<any[]>([]);
  
    useEffect(() => {
      fetchData();
    });
  
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=" +
          restId +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const jsonData = await data.json();
      const restaurantData =
        jsonData?.data?.cards
          ?.map((x: any) => x.card)
          ?.find((x: any) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
          // console.log('5555555555555',jsonData)
      setResDetails(restaurantData);
      
      
  
      // const resteauroCardItems =
      //   jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      //     ?.card?.card?.itemCards;
          
      // setRestItems(resteauroCardItems);
      const filteredMenuListItems = jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e:any) => e?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
        // console.log('!!!!!!!!!!!', filteredMenuListItems)
        setRestItems(filteredMenuListItems)
    };


    return [resDetails, restItems]
}

export default useRestMenuData