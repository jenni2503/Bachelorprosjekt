import { useContext } from "react";
import InfoModal from "../components/InfoModal";
import Search from "../components/Search";
import Tabs from "../components/Tabs";
import { ThemeContext } from "../contexts/ThemeContext";

const MainSearchPage = () => {
  const { themeColor } = useContext(ThemeContext);
  console.log(themeColor);
  return (
    <>
      {/* height */}
      <div className="h-full px-4 md:px-28">
        <div>
          {/* Title */}
          <h1
            className={
              `text-center pt-16 text-3xl lg:text-[33px]
            font-bold tracking-wider font-roboto ` +
              (themeColor == "light" ? "text-black" : "text-yellow-200")
            }
          >
            AI-Tariffering
          </h1>
          <h1
            className={
              `text-center mt-1 text-[14px]/[20px] 
            font-roboto ` +
              (themeColor == "light" ? "text-black" : "text-yellow-200")
            }
          >
            Bachelorprosjekt
          </h1>
          <InfoModal />

          <Tabs />

          <Search />
        </div>
      </div>
    </>
  );
};

export default MainSearchPage;
