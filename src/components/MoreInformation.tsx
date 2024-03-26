import { item } from "../types/itemType";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface Props {
  item: item;
}

const MoreInformation = ({ item }: Props) => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div>
      <div
        className={themeColor == "light" ? "bg-neutral-600" : "bg-neutral-700"}
      >
        {/* white line div */}
        <div className="w-full h-[1px] mt-5 bg-white"></div>
        {/* Posisjon */}
        <div>
          <h1 className="pt-10 pl-5 text-slate-100 font-bold text-[15px] tracking-wide]">
            Posisjon:
          </h1>
          <p
            className={
              `mt-5 mx-5 px-5 py-5 rounded-xl 
            text-slate-100 text-sm lg:text-[15.5px] 
            tracking-[0.3px] bg-opacity-60 ` +
              (themeColor == "light"
                ? "bg-neutral-700 bg-opacity-90"
                : "bg-neutral-500")
            }
          >
            {item.posisjon}
          </p>
        </div>

        {/* Beskrivelse */}
        <div className="mt-5">
          <h1 className="pl-5 text-slate-100 font-bold text-[15px] tracking-wide]">
            Beskrivelse:
          </h1>
          <p
            className={
              `mt-5 mx-5 px-5 py-5 rounded-xl 
            text-slate-100 text-sm lg:text-[15.5px] 
            tracking-[0.3px] bg-opacity-60 ` +
              (themeColor == "light"
                ? "bg-neutral-700 bg-opacity-90"
                : "bg-neutral-500")
            }
          >
            {item.beskrivelse}
          </p>
        </div>

        {/* Begrunnelse */}
        <div className="mt-5">
          <h1
            className="pl-5 text-slate-100 
          font-bold text-[15px] tracking-wide"
          >
            Begrunnelse:
          </h1>
          <p
            className={
              `mt-5 mx-5 px-5 py-5 rounded-xl 
            text-slate-100 text-sm lg:text-[15.5px] 
            tracking-[0.3px] bg-opacity-60 ` +
              (themeColor == "light"
                ? "bg-neutral-700 bg-opacity-90"
                : "bg-neutral-500")
            }
          >
            {item.begrunnelse}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreInformation;
