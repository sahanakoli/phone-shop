import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="px-5 shadow-lg py-5">
           <nav className=" flex justify-between">
            <h2>Phone Shop</h2>
            <ul className=" flex gap-5">
                <li>
                <NavLink
                   to="/"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "active" : ""
                   }
                   >
                  Home
                </NavLink> 
                </li>
                <li>
                <NavLink
                   to="/favorites"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "active" : ""
                   }
                   >
                  Favorites
                </NavLink> 
                </li>
                <li>
                <NavLink
                   to="/login"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "active" : ""
                   }
                   >
                   Login
                </NavLink> 
                </li>
            </ul>
            </nav> 
        </div>
    );
};

export default Navbar;