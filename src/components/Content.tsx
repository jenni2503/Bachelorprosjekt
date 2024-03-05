import { useState } from "react";
import MoreInformation from "./MoreInformation";
import { item } from "../types/itemType";

interface Props {
  items: item[];
}

const Content = ({ items }: Props) => {
  const [expandIndex, setExpandIndex] = useState(-1); // -1 is default value
  const expandContent = (clickedIndex: number) => {
    //if the same then that means we have already clicked this
    //box before and we are reclicking the same box
    if (clickedIndex == expandIndex) {
      setExpandIndex(-1);
      return;
    }
    //if above is not true, meaning we have not reclicked the same index again
    //then that means a new index has been clicked and we save that index in expandIndex
    setExpandIndex(clickedIndex);
  };

  return (
    <div className="md:flex md:justify-center">
      <div
        className="mt-6 mx-2 rounded-xl
        md:w-5/6 lg:w-2/3
        "
      >
        {/* happens only if items is not empty */}
        {items &&
          items.map((content, i) => {
            // i = number of the content we click on
            return (
              <div
                key={content.varenummer} // map has to have unique id
                className="flex flex-col items-start
               pt-6 mb-3 rounded-xl
               bg-neutral-700 border-white 
               border-solid border-[0.5px]"
              >
                <div className="flex flex-col md:flex-row flex-wrap">
                  <div>
                    <p className="inline-block pl-5 text-slate-100 font-semibold">{`Vareslag: `}</p>
                    <p className="inline-block pl-1 text-slate-100 font-light">
                      {content.vareslag}
                    </p>
                  </div>
                  <div>
                    <p className="inline-block pl-5 text-slate-100 font-semibold">{`Varenummer: `}</p>
                    <p className="inline-block pl-1 text-slate-100 font-light">
                      {content.varenummer}
                    </p>
                  </div>
                </div>

                {expandIndex == i && (
                  // transition-all ease-in-out duration-500
                  <div className="w-full">
                    {/* sending props */}
                    <MoreInformation item={content} />
                  </div>
                )}
                <div className="w-full flex justify-end">
                  <button
                    onClick={() => {
                      expandContent(i);
                    }}
                    className="w-[30px]"
                  >
                    {expandIndex == i ? (
                      <svg
                        className="w-8 pt-4 text-white"
                        height="60"
                        viewBox="5 0 30 25"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <polyline points="6 15 12 9 18 15" />
                      </svg>
                    ) : (
                      <svg
                        className="w-8 pt-4 text-white"
                        height="60"
                        viewBox="5 0 30 25"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Content;
