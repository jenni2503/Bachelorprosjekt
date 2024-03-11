import { useState } from "react";
import { item } from "../types/itemType";
import MoreInformation from "./MoreInformation";

type Props = {
  content: item;
};

const ContentItem = ({ content }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col items-start
               pt-6 mb-3 rounded-xl
               bg-neutral-700 border-white 
               border-solid border-[0.5px]"
    >
      <div className="flex flex-col md:flex-row flex-wrap">
        <div>
          <p
            className="inline-block pl-5 text-slate-100 
                    font-semibold text-[15px] tracking-wide"
          >{`Vareslag: `}</p>
          <p className="inline-block pl-1 text-slate-100 font-light">
            {content.vareslag}
          </p>
        </div>
        <div>
          <p
            className="inline-block pl-5 text-slate-100 
                    font-semibold text-[15px] tracking-wide"
          >{`Varenummer: `}</p>
          <p
            className="inline-block pl-1
                     text-slate-100 font-light"
          >
            {content.varenummer}
          </p>
        </div>
      </div>

      {isExpanded && (
        <div className="w-full">
          {/* sending props */}
          <MoreInformation item={content} />
        </div>
      )}
      <div className="w-full flex justify-end">
        <button
          onClick={() => {
            setIsExpanded((previous) => !previous);
          }}
          className="w-[30px]"
        >
          {isExpanded ? (
            <svg
              className="w-8 h-[45px] md:h-[55px] text-white"
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
              className="w-8 h-[45px] md:h-[55px] text-white"
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
};

export default ContentItem;
