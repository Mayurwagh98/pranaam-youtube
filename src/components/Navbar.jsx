import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "../redux/navbarSlice";
import { useEffect, useState } from "react";
import { SUGGESSTIONS_API } from "../utils/constants";
import { CiSearch } from "react-icons/ci";
import { storeSearchedResults } from "../redux/cacheSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggesstions, setSuggesstions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const storedSearched = useSelector((store) => store.searchedCache);
  console.log(storedSearched);

  const toggleSidebar = () => {
    dispatch(showSidebar());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (storedSearched[searchQuery]) {
        setSuggesstions(suggesstions);
      } else {
        getYoutubeSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getYoutubeSuggestions = async () => {
    try {
      const data = await fetch(SUGGESSTIONS_API + searchQuery);
      const newData = await data.json();
      setSuggesstions(newData[1]);
      dispatch(
        storeSearchedResults({
          [searchQuery]: newData[1],
        }),
      );
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

      <div className="flex col-span-10 w-[50%] justify-center items-center mx-auto">
        <div className="flex w-full">
          <input
            type="search"
            placeholder="Search here"
            className="border border-gray-400 outline-none w-full p-2 rounded-l-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="p-2 border border-gray-400 rounded-r-full bg-gray-100">
            <IoIosSearch className="text-2xl w-[50px]" />
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute bg-white py-1 px-2 w-[37%] shadow-lg rounded-lg border border-gray-100 mt-[550px]">
            {suggesstions?.map((item, index) => (
              <p
                key={index}
                className="my-2 flex justify-start items-center hover:bg-gray-200 p-2"
              >
                <CiSearch className="mr-1" />
                {item}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="col-span-1 grid place-items-center">
        <GiPlagueDoctorProfile className="text-4xl cursor-pointer border border-gray-400 p-2 rounded-full" />
      </div>
    </nav>
  );
};
export default Navbar;
