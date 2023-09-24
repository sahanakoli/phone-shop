/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

import FavoritesPhone from "../../component/FavoritesPhone/FavoritesPhone";


const Favorites = () => {

     const [favorites, setFavorites] = useState([])
    
     const [noFund, setNoFund] = useState(false)

     useEffect(() =>{
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))

        if(favoriteItems){
            setFavorites(favoriteItems);
        }
        else{
           
            setNoFund('no data fund');
        }
     },[])

     console.log(favorites)
    return (
        <div>
            {noFund ? (<p className=" h-[80vh] flex items-center justify-center">{noFund}</p>) : 
            (<div>
                {favorites.length > 0 && <button className="px-5 mt-6 bg-green-200 block mx-auto rounded-md">Deleted All Favorites</button>}
              <div className=" grid grid-cols-2 gap-5">
                {favorites.map(phoneCard => <FavoritesPhone key={phoneCard.id} phoneCard={phoneCard}></FavoritesPhone>)}
              </div>
            </div>) }
        </div>
    );
};

export default Favorites;