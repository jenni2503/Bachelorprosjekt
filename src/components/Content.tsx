const Content = () => {
  return (
    // content 1 (next step: array list)
    <div className="mx-60 mt-6 bg-gray-500 rounded-xl">
      <div className="flex flex-col items-end pt-6 rounded-xl bg-zinc-100">
        <svg
          className="w-8 pt-4 text-black"
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
      <div className="flex flex-col items-end pt-6 mt-4 rounded-xl bg-zinc-100">
        <svg
          className="w-8 pt-4 text-black"
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
      <div className="flex flex-col items-end pt-6 mt-4 rounded-xl bg-zinc-100">
        <svg
          className="w-8 pt-4 text-black"
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
