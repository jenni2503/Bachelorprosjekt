const Tabs = () => {
  return (
    <div className="lg:flex lg:justify-center">
      <div
        className="flex gap-5 mt-24 lg:pl-8 font-semibold
        text-slate-100 tracking-wide lg:justify-start
          justify-center
          lg:w-2/3"
      >
        <div className="text-sm md:text-lg">Spørsmål</div>
        <div className="text-sm md:text-lg">BKU</div>
      </div>
    </div>
  );
};

export default Tabs;
