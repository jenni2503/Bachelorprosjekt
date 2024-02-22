const SearchBar = () => {
  return (
    <div className="pb-1.5 mt-16 text-2xl tracking-wider bg-black bg-opacity-40 rounded-[30px]">
      <div className="flex justify-between pl-6 bg-blue-100 rounded-2xl">
        {/* search icon */}
        <svg
          className="h-24 w-8 text-black-500"
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
        <input className="text-md font-medium bg-blue-100 "></input>
        <div>
          <button className=" px-14 py-8 rounded-2xl bg-blue-400 bg-opacity-50 ">
            Søk
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
