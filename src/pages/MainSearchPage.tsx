import Search from "../components/Search";
import Tabs from "../components/Tabs";

const MainSearchPage = () => {
  return (
    <>
      {/* height */}
      <div className="h-full ">
        <div className="">
          {/* Title */}
          <div
            className="text-center pt-16 text-xl
          font-bold tracking-wider md:text-3xl
          text-yellow-200"
          >
            TOLLETATEN
          </div>
          <div
            className="text-center mt-1 text-[10px]/[20px] md:text-sm
           text-yellow-200"
          >
            NORWEGIAN CUSTOMS
          </div>

          <Tabs />

          <Search />
        </div>
      </div>
    </>
  );
};

export default MainSearchPage;
