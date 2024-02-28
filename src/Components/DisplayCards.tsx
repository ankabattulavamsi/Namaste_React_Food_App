const imgUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const DisplayCards = (props: any) => {
  console.log(props, '888888888888')
  const { name, cloudinaryImageId, avgRating, sla, cuisines } =
  props?.resData;

  return (
    <div data-testid="resCard" className="bg-slate-200 p-1 m-1 w-54 h-[330px] rounded-lg">
      <img
        src={imgUrl + cloudinaryImageId}
        alt="res-iimg"
        className="w-52 h-40 rounded-lg"
      />
      <h4 className="w-44 mt-1 mb-1 font-bold">{name}</h4>
      <div className="flex justify-between mt-2 mb-2">
        <h4>Rating: {avgRating}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
      <div className="w-52 ">
        <p className="">{cuisines.join(" ")}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (DisplayCards: any) => {
  return () => {
    return (
      <div>
        <p>promoted</p>
        <DisplayCards />
      </div>
    );
  };
};

export default DisplayCards;
