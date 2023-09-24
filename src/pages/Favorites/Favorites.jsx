/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

import FavoritesPhone from "../../component/FavoritesPhone/FavoritesPhone";


const Favorites = () => {

     const [favorites, setFavorites] = useState([]);
    
     const [noFund, setNoFund] = useState(false);

     const [isShow, setIsShow] = useState(false);

     const [totalPrice, setTotalPrice] = useState(0)

     useEffect(() =>{
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))

        if(favoriteItems){
            setFavorites(favoriteItems);

            const total = favoriteItems.reduce((preValue, currentItem) => preValue + currentItem.price, 0)

            setTotalPrice(total)
        }
        else{
           
            setNoFund('no data fund');
        }
     },[])

     console.log(favorites)

     const handleRemove = () => {
        localStorage.clear()
        setFavorites([]);
        setNoFund('No Data Fund');
     }

    return (
        <div>
            {noFund ? (<p className=" h-[80vh] flex items-center justify-center">{noFund}</p>) : 
            (<div>
                {favorites.length > 0 && 
                <div>
                    <button onClick={handleRemove} className="px-5 mt-6 bg-green-200 block mx-auto rounded-md">Deleted All Favorites</button>

                    <h2 className=" text-2xl font-medium text-center mt-2">Total Price: {totalPrice}</h2>
                </div>
                }
              <div className=" grid grid-cols-2 gap-5">
                {
                    isShow ? favorites.map(phoneCard => <FavoritesPhone key={phoneCard.id} phoneCard={phoneCard}></FavoritesPhone>)
                    :
                    favorites.slice(0, 4).map(phoneCard => <FavoritesPhone key={phoneCard.id} phoneCard={phoneCard}></FavoritesPhone>)
                }
              </div>
              {
                favorites.length > 4 && 
                <button onClick={() => setIsShow(!isShow)} className="px-5 mt-6 bg-green-200 block mx-auto rounded-md">{isShow ? "See Less" : "See more"}
                </button>
              }
            </div>) }
        </div>
    );
};

export default Favorites;