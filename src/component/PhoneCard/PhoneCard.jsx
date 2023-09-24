import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";




const PhoneCard = () => {

    const [phoneCard, setPhoneCard] = useState({});
    
    const {id} = useParams();
    
    const phones = useLoaderData();

    useEffect(()=>{
        const findPhoneCard = phones?.find(phoneCard => phoneCard.id === id);
      
        setPhoneCard(findPhoneCard);
    
    },[id, phones]);
    console.log(phoneCard);
    
    const { image, phone_name, brand_name } = phoneCard


    return (
        <div className=" mt-8  flex justify-center  items-center">
            <div className="relative flex w-6/12 max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
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
    
    <a className="inline-block" href="#">
      <Link to="/favorites">
      <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add To Favorites
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          // eslint-disable-next-line react/no-unknown-property
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            // eslint-disable-next-line react/no-unknown-property
            stroke-linecap="round"
            // eslint-disable-next-line react/no-unknown-property
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
      </Link>
    </a>
  </div>
</div>
        </div>
    );
};

export default PhoneCard;