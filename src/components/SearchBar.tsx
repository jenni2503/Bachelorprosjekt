const SearchBar = () => {
  return (
    <div className="mx-40 pb-1.5 mt-16 text-2xl tracking-wider bg-black bg-opacity-40 rounded-[30px]">
      <div className="flex bg-blue-100 rounded-2xl">
        {/* search icon */}
        <svg
          className="w-16 pl-4 text-black-500"
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
        <input className=" w-full my-4 pl-3 text-md font-medium bg-blue-100 mr-1"></input>
        <div className="">
          <button className="px-14 py-8 rounded-2xl bg-blue-400 bg-opacity-50 ">
            Søk
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
