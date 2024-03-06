import InfoModal from "../components/InfoModal";
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
            className="text-center pt-16 text-3xl lg:text-[33px]
          font-bold tracking-wider
          text-yellow-200"
          >
            TOLLETATEN
          </div>
          <div
            className="text-center mt-1 text-[14px]/[20px]
           text-yellow-200"
          >
            NORWEGIAN CUSTOMS
          </div>
          <InfoModal />

          <Tabs />

          <Search />
        </div>
      </div>
    </>
  );
};

export default MainSearchPage;
