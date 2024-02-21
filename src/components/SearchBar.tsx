const SearchBar = () => {
  return (
    <div className="flex flex-col pb-1.5 mt-16 text-2xl tracking-wider bg-black bg-opacity-40 rounded-[30px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between pl-6 bg-blue-100 rounded-3xl max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
        <svg
          className="h-8 w-8 text-black-500"
          width="24"
          height="24"
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
        <div className="justify-center px-14 py-8 rounded-3xl bg-blue-400 bg-opacity-50 max-md:px-5">
          Søk
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
