const SearchBar = () => {
  return (
    <div
      className="lg:mx-[250px] pb-1.5 mt-16 text-2xl tracking-wider bg-black bg-opacity-40 rounded-[30px]
      md:mx-2/3 sm:mx-2
    "
    >
      <div className="flex bg-neutral-700 rounded-2xl">
        {/* search icon */}
        <svg
          className="w-14 pl-4 text-white"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <circle cx="10" cy="10" r="7" />{" "}
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
        {/* input */}
        <input className="w-full ml-1 my-4 pl-3 text-md text-slate-50 font-medium bg-neutral-700 mr-1"></input>
        <div className="">
          <button className="px-12 py-6 text-lg font-semibold rounded-2xl bg-yellow-400">
            Søk
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
