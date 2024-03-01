const Content = () => {
  return (
    // content 1 (next step: array list)
    <div
      className="lg:mx-[250px] mt-6 rounded-xl
      md:mx-2/3 sm:mx-2
    "
    >
      <div className="flex flex-col items-end pt-6 rounded-xl bg-neutral-700 bg-opacity-90 border-white border-solid border-[0.5px]">
        <svg
          className="w-8 pt-4 text-white"
          height="60"
          viewBox="5 0 30 25"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* content 2 */}
      <div className="flex flex-col items-end pt-6 mt-4 rounded-xl bg-neutral-700 bg-opacity-90 border-white border-solid border-[0.5px]">
        <svg
          className="w-8 pt-4 text-white"
          height="60"
          viewBox="5 0 30 25"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* content 3 */}
      <div className="flex flex-col items-end pt-6 mt-4 rounded-xl bg-neutral-700 bg-opacity-90 border-white border-solid border-[0.5px]">
        <svg
          className="w-8 pt-4 text-white"
          height="60"
          viewBox="5 0 30 25"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
};

export default Content;
