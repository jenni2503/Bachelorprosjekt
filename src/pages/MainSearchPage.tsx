import InfoModal from "../components/InfoModal";
import Search from "../components/Search";
import Tabs from "../components/Tabs";

const MainSearchPage = () => {
  return (
    <>
      {/* height */}
      <div className="h-full px-4 md:px-28">
        <div className="">
          {/* Title */}
          <h1
            className="text-center pt-16 text-3xl lg:text-[33px]
          font-bold tracking-wider
          text-yellow-200 font-roboto"
          >
            AI-Tariffering
          </h1>
          <h1
            className="text-center mt-1 text-[14px]/[20px]
           text-yellow-200 font-roboto"
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
