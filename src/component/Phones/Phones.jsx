import { useLoaderData } from "react-router-dom";
import Phone from "../Phone/Phone";

const Phones = () => {

    const phones = useLoaderData()
    console.log(phones)
    return (
        <div className=" py-10">
           <h1 className="text-2xl text-center">All Categoires Phones</h1>

           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                phones?.map(phone => <Phone key={phone.id} phones={phone}></Phone>)
            }
            </div> 
        </div>
    );
};

export default Phones;