const Tabs = () => {
  return (
    <div className="lg:flex lg:justify-center">
      <div
        className="flex gap-5 md:mt-12 lg:pl-8 font-semibold
        text-slate-100 tracking-wide lg:justify-start
          justify-center
          lg:w-2/3"
      >
        <div className="text-[14px] md:text-lg">Spørsmål</div>
        <div className="text-[14px] md:text-lg">BKU</div>
      </div>
    </div>
  );
};

export default Tabs;
