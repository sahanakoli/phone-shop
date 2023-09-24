/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const FavoritesCard = ({phoneCard}) => {

    const {id, image, phone_name, brand_name, price } = phoneCard || {};
    return (
        <div>
        <div className=" mt-8  flex justify-center  items-center ">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
           <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
           <img
          src={image}
          alt="image"
         className="h-full w-full object-cover"
         />
        </div>
       <div className="p-4">
          <h6 className="mb-4 mt-5 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
          {brand_name}
          </h6>
          <h4 className="mb-2 mt-5 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
         {phone_name}
         </h4>
        <p className="mb-2 mt-5 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        $ {price}
        </p>

       <Link to={`/phones/${id}`}>
          <button className="btn bg-gray-200 w-full py-1 rounded-lg">
          See Details
          </button>
       </Link>
      </div>
     </div>
    </div>
    </div>
    );
};

export default FavoritesCard;