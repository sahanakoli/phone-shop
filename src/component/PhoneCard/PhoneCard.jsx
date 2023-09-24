/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import FavoritesPhone from "../FavoritesPhone/FavoritesPhone";





const PhoneCard = () => {

    const [phoneCard, setPhoneCard] = useState({});
    
    const {id} = useParams();
    
    const phones = useLoaderData();

    useEffect(()=>{
        const findPhoneCard = phones?.find(phoneCard => phoneCard.id === id);
      
        setPhoneCard(findPhoneCard);
    
    },[id, phones]);
    
 
    
    return (
        <div>
           <FavoritesPhone phoneCard={phoneCard}></FavoritesPhone>
        </div>
    );
};

export default PhoneCard;