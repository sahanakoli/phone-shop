// import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import Phones from "../../component/Phones/Phones";


const Home = () => {

    // const phones = useLoaderData
    // console.log(phones)
    return (
        <div>
            <Banner></Banner>
           <Phones></Phones>
        </div>
    );
};

export default Home;