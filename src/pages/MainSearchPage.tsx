import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

const MainSearchPage = () => {
  return (
    <>
      {/* Title */}
      <div className="text-center pt-12 text-3xl font-bold tracking-wider">
        TOLLETATEN
      </div>
      <div className="text-center pr-14 mt-3 text-xs">NORWEGIAN CUSTOMS</div>

      <Tabs />

      <SearchBar />
    </>
  );
};

export default MainSearchPage;
