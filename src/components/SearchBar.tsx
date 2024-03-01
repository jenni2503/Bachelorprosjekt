const SearchBar = () => {
  return (
    <div className="md:flex md:justify-center">
      <div
        className="pb-1.5 mt-16 mx-2 text-sm md:text-2xl 
      tracking-wider bg-black bg-opacity-40 
      rounded-[30px]
      md:w-5/6 lg:w-2/3
    "
      >
        <div className="flex h-[60px] md:h-[80px] bg-neutral-700 rounded-2xl">
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
          <input
            className="w-full h-[85%] ml-1 pl-3 mr-1
            self-center text-lg text-slate-50 font-medium
          bg-neutral-800 bg-opacity-50 rounded-lg"
          ></input>
          <button
            className="px-8 md:px-12 py-2 
            md:py-6 text-base md:text-lg font-semibold 
            rounded-2xl bg-yellow-400"
          >
            Søk
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
