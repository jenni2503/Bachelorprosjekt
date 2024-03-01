import SearchBar from "../components/SearchBar";
import Content from "../components/Content";

import Tabs from "../components/Tabs";
//import InformationPage from "../components/InformationPage";

const MainSearchPage = () => {
  return (
    <>
      {/* height */}
      <div className="h-full ">
        <div className="">
          {/* Title */}
          <div
            className="text-center pt-20 text-xl
          font-bold tracking-wider md:text-3xl text-yellow-300
           bg-opacity-90"
          >
            TOLLETATEN
          </div>
          <div
            className="text-center mt-1 text-[10px]/[20px] md:text-sm
           text-yellow-300 bg-opacity-90"
          >
            NORWEGIAN CUSTOMS
          </div>

          <Tabs />

          <SearchBar />

          <Content />

          {/*<InformationPage />*/}
        </div>
      </div>
    </>
  );
};

export default MainSearchPage;
