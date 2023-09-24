/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Phone = ({phones}) => {



    const {id, image, phone_name, brand_name, price, rating} = phones || []
    return (
        <div className=" mt-6">
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {brand_name}
      </p>
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        $ {price}
      </p>
    </div>
    <p className="block font-sans text-sm font-bold leading-normal text-gray-700 antialiased ">
      {phone_name}
    </p>
    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased mt-2">
        {rating}
      </p>
  </div>
  <div className="p-6 pt-0">
    <Link to={`/phones/${id}`}>
    <button className="btn bg-gray-200 w-full py-1 rounded-lg">
      See Details
    </button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Phone;