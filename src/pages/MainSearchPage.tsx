import SearchBar from "../components/SearchBar";
import Content from "../components/Content";

import Tabs from "../components/Tabs";
//import InformationPage from "../components/InformationPage";

const MainSearchPage = () => {
  return (
    <>
      <div className="bg-zinc-800 h-screen">
        {/* Title */}
        <div className="text-center pt-28 text-3xl font-bold tracking-wider text-yellow-300 bg-opacity-90">
          TOLLETATEN
        </div>
        <div className="text-center pr-14 mt-1 text-xs text-yellow-300 bg-opacity-90">
          NORWEGIAN CUSTOMS
        </div>

        <Tabs />
        <SearchBar />
        {/*<InformationPage />*/}
        <Content />
      </div>
    </>
  );
};

export default MainSearchPage;
