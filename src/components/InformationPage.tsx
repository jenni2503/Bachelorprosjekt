const InformationPage = () => {
  //flex mx-60 bg-gray-500 rounded-xl aspect-[1.02] h-[57px] w-[57px]
  return (
    //Search bar box
    <div>
      <button className="flex justify-center items-center mx-60 mt-8 bg-gray-500 rounded-xl aspect-[1.02] h-[57px] w-[57px]">
        <svg
          className=" size-8 text-white"
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
      </button>

      {/* Information box (to do: make the size of the box longer | pt-96 suits larger screens)*/}
      <div className="mx-60 mt-6 bg-gray-500 rounded-xl">
        <div className="flex flex-col items-end pt-64 rounded-xl bg-zinc-100 ">
          <svg
            className="w-8 pt-4 text-black"
            height="60"
            viewBox="5 0 30 25"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <polyline points="6 15 12 9 18 15" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
