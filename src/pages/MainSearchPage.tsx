import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

const MainSearchPage = () => {
  return (
    <>
      {/* Title */}
      <div className="self-center text-3xl tracking-wider">TOLLETATEN</div>
      <div className="self-center mt-3 text-xs">NORWEGIAN CUSTOMS</div>

      <Tabs />

      <SearchBar />
    </>
  );
};

export default MainSearchPage;
