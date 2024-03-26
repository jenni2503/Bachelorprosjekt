import { useContext } from "react";
import ChangeThemeButton from "./ChangeThemeButton";
import { ThemeContext } from "../contexts/ThemeContext";

const Tabs = () => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div className="lg:flex lg:justify-center">
      <div
        className={
          `flex gap-5 md:mt-12 lg:pl-8 font-semibold
       tracking-wide lg:justify-start
          justify-center
          lg:w-2/3 ` + (themeColor == "light" ? "text-black" : "text-slate-100")
        }
      >
        {/* bg-black bg-opacity-40 */}
        <div className="text-[14px] md:text-lg">Spørsmål</div>
        <div className="text-[14px] md:text-lg">BKU</div>
        <ChangeThemeButton />
      </div>
    </div>
  );
};

export default Tabs;
