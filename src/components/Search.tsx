import { useState } from "react";
import { useContext } from "react";
import { item } from "../types/itemType";
import Content from "./Content";
import SearchIcon from "./SearchIcon";
import { ThemeContext } from "../contexts/ThemeContext";

const Search = () => {
  const { themeColor } = useContext(ThemeContext);
  const [responseData, setResponseData] = useState<item[]>([]);
  console.log(responseData);

  //fetching data
  const submitSearch = () => {
    // if does not work on dev (npm run dev)
    //use ./../../public/mockdata/searchMock.json (relative path)
    fetch("/mockdata/searchMock.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResponseData(data.items);
        console.log(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="md:flex md:justify-center">
        <div
          className={
            `pb-1.5 mt-16 mx-2 
          text-sm md:text-2xl tracking-wider 
          rounded-[30px] md:w-5/6 lg:w-2/3 ` +
            (themeColor == "light"
              ? "bg-neutral-200"
              : "bg-black bg-opacity-40")
          }
        >
          <div
            className={
              `flex h-[6vh] md:h-[7vh] rounded-2xl ` +
              (themeColor == "light" ? "bg-neutral-500" : "bg-neutral-700")
            }
          >
            {/* input */}
            <input
              className="w-full h-[80%] ml-1 pl-3 
            self-center text-lg text-slate-50 font-medium
          bg-neutral-800 bg-opacity-50 rounded-lg"
            ></input>
            <button
              onClick={submitSearch}
              className="px-3 md:px-5 text-base md:text-lg 
              font-semibold rounded-r-2xl transition-colors 
              duration-300 active:bg-amber-200/10"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
      <Content items={responseData} />
    </>
  );
};

export default Search;
