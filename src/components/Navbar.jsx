import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { showSidebar } from "../redux/navbarSlice";
import { useEffect, useState } from "react";
import { SUGGESSTIONS_API } from "../utils/constants";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    dispatch(showSidebar());
  };

  useEffect(() => {
    getYoutubeSuggestions();
  }, [searchQuery]);

  const getYoutubeSuggestions = async () => {
    try {
      const data = await fetch(SUGGESSTIONS_API + searchQuery);
      const newData = await data.json();
      console.log(newData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="grid grid-flow-col p-2 h-[4.5rem]">
      <div className="flex col-span-1 justify-start items-center">
        <GiHamburgerMenu
          className="mx-2 text-xl cursor-pointer"
          onClick={toggleSidebar}
        />
        <h1 className="flex justify-center items-center text-xl font-bold cursor-pointer">
          <IoLogoYoutube className="text-red-600 text-2xl mr-1 ml-2" />
          Youtube
        </h1>
      </div>

      <div className="flex col-span-10 w-1/2 justify-center items-center mx-auto">
        <input
          type="search"
          placeholder="Search here"
          className="border border-gray-400 outline-none w-full p-2 rounded-l-full"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="p-2 border border-gray-400 rounded-r-full bg-gray-100">
          <IoIosSearch className="text-2xl w-[50px]" />
        </button>
      </div>

      <div className="col-span-1 grid place-items-center">
        <GiPlagueDoctorProfile className="text-4xl cursor-pointer border border-gray-400 p-2 rounded-full" />
      </div>
    </nav>
  );
};
export default Navbar;
